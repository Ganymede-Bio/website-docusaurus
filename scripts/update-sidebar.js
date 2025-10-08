#!/usr/bin/env node
/**
 * update-sidebar.js
 * Removes references to excluded files from the API sidebar
 * This prevents broken links when large files are excluded from the build
 */

const fs = require('fs');
const path = require('path');

// Paths
const sidebarPath = path.join(__dirname, '../docs/api/sidebar.ts');
const excludeListPath = path.join(__dirname, '../docs/api/.exclude-list');

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m'
};

/**
 * Parse the exclude list to get file patterns
 */
function parseExcludeList() {
  if (!fs.existsSync(excludeListPath)) {
    console.log(`${colors.yellow}Warning: .exclude-list not found${colors.reset}`);
    return { schemas: [], endpoints: [] };
  }

  const content = fs.readFileSync(excludeListPath, 'utf8');
  const schemas = [];
  const endpoints = [];

  // Simple parsing - look for file: entries
  const lines = content.split('\n');
  let currentSection = null;

  for (const line of lines) {
    if (line.startsWith('schemas:')) {
      currentSection = 'schemas';
    } else if (line.startsWith('endpoints:')) {
      currentSection = 'endpoints';
    } else if (line.includes('file:')) {
      const match = line.match(/file:\s*(.+)/);
      if (match) {
        const fileName = match[1].trim();
        if (currentSection === 'schemas') {
          schemas.push(fileName);
        } else if (currentSection === 'endpoints') {
          endpoints.push(fileName);
        }
      }
    }
  }

  return { schemas, endpoints };
}

/**
 * Check if any excluded files actually exist
 */
function findExcludedFiles() {
  const excluded = [];
  const apiDir = path.join(__dirname, '../docs/api');

  // Find all .excluded files
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.excluded')) {
        excluded.push(file.replace('.excluded', ''));
      }
    }
  }

  if (fs.existsSync(apiDir)) {
    walkDir(apiDir);
  }

  return excluded;
}

/**
 * Update the sidebar to remove excluded items
 */
function updateSidebar() {
  if (!fs.existsSync(sidebarPath)) {
    console.log(`${colors.red}Error: sidebar.ts not found${colors.reset}`);
    return;
  }

  // Get list of excluded files
  const { schemas, endpoints } = parseExcludeList();
  const excludedFiles = findExcludedFiles();

  // Combine all exclusions
  const allExclusions = [...schemas, ...endpoints, ...excludedFiles];

  console.log(`${colors.yellow}Processing exclusions and removing PublicApi category...${colors.reset}`);
  if (allExclusions.length > 0) {
    allExclusions.forEach(file => console.log(`  - ${file}`));
  }

  // Read sidebar content
  let sidebarContent = fs.readFileSync(sidebarPath, 'utf8');
  let changeCount = 0;

  // Remove PublicApi category entirely
  // This regex handles nested brackets properly
  const publicApiStart = sidebarContent.indexOf('type: "category",\n      label: "PublicApi"');
  if (publicApiStart !== -1) {
    // Find the matching closing bracket for this category
    let bracketCount = 0;
    let inCategory = false;
    let endPos = publicApiStart;

    // Go back to find the opening {
    let startPos = publicApiStart;
    while (startPos > 0 && sidebarContent[startPos] !== '{') {
      startPos--;
    }

    // Now find the matching closing bracket
    for (let i = startPos; i < sidebarContent.length; i++) {
      if (sidebarContent[i] === '{') bracketCount++;
      if (sidebarContent[i] === '}') {
        bracketCount--;
        if (bracketCount === 0) {
          endPos = i + 1;
          // Check if there's a comma after
          if (sidebarContent[endPos] === ',') endPos++;
          break;
        }
      }
    }

    if (endPos > startPos) {
      console.log(`${colors.yellow}Removing PublicApi category${colors.reset}`);
      // Remove from the start of the category to the end, including any trailing comma/whitespace
      const before = sidebarContent.substring(0, startPos).trimEnd();
      const after = sidebarContent.substring(endPos).trimStart();
      sidebarContent = before + '\n    ' + after;
      changeCount++;
    }
  }

  // Remove entries for excluded files
  allExclusions.forEach(fileName => {
    // Remove the file extension for the ID
    const fileId = fileName.replace('.mdx', '').replace('.api', '').replace('.schema', '');

    // Create patterns to match the sidebar entry
    const patterns = [
      // Match complete object entries for this file
      new RegExp(`\\s*\\{[^}]*id:\\s*["']api/[^"']*${fileId}["'][^}]*\\},?`, 'g'),
      new RegExp(`\\s*\\{[^}]*id:\\s*["']api/schemas/${fileId}["'][^}]*\\},?`, 'g')
    ];

    patterns.forEach(pattern => {
      const matches = sidebarContent.match(pattern);
      if (matches) {
        changeCount += matches.length;
        sidebarContent = sidebarContent.replace(pattern, '');
      }
    });
  });

  // Clean up any double commas or trailing commas
  sidebarContent = sidebarContent.replace(/,\s*,/g, ',');
  sidebarContent = sidebarContent.replace(/,\s*]/g, ']');
  sidebarContent = sidebarContent.replace(/,\s*}/g, '}');

  // Write updated sidebar
  fs.writeFileSync(sidebarPath, sidebarContent);

  console.log(`${colors.green}Sidebar updated: Removed ${changeCount} references${colors.reset}`);
}

// Main execution
function main() {
  console.log(`${colors.yellow}Updating sidebar to remove excluded files...${colors.reset}`);

  try {
    updateSidebar();
    console.log(`${colors.green}Sidebar update complete${colors.reset}`);
  } catch (error) {
    console.error(`${colors.red}Error updating sidebar:${colors.reset}`, error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { updateSidebar, parseExcludeList };