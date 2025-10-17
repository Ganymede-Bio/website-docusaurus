#!/usr/bin/env node
/**
 * update-sidebar.js
 * Removes references to excluded files from the API sidebar
 * This prevents broken links when large files are excluded from the build
 * Also fixes known description issues in API files
 */

const fs = require('fs');
const path = require('path');

// Paths
const sidebarPath = path.join(__dirname, '../docs/api/sidebar.ts');
const excludeListPath = path.join(__dirname, '../docs/api/.exclude-list');
const apiDir = path.join(__dirname, '../docs/api');

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
 * Fix known issues in API documentation files
 */
function fixApiDescriptions() {
  const uploadFilePath = path.join(apiDir, 'upload-file.api.mdx');

  if (fs.existsSync(uploadFilePath)) {
    let content = fs.readFileSync(uploadFilePath, 'utf8');
    const originalContent = content;
    let changesMade = false;

    // Fix grammar in uploadFile description header
    content = content.replace(
      'description: "Get a signed url to upload a [File](https://docs.ganymede.bio/app/files/FileBrowser) in an Environment. The url will valid for 15 minutes."',
      'description: "Get a signed url to upload a [File](https://docs.ganymede.bio/app/files/FileBrowser) in an Environment. The url will be valid for 15 minutes."'
    );

    // Fix grammar in body text
    const bodyGrammarPattern = /Get a signed url to upload a \[File\]\(https:\/\/docs\.ganymede\.bio\/app\/files\/FileBrowser\) in an Environment\. The url will valid for 15 minutes\./;
    if (bodyGrammarPattern.test(content)) {
      content = content.replace(
        bodyGrammarPattern,
        'Get a signed url to upload a [File](https://docs.ganymede.bio/app/files/FileBrowser) in an Environment. The url will be valid for 15 minutes.'
      );
      changesMade = true;
    }

    // Update the Ganymede bucket upload instructions to use formatted JSON code block
    const oldGanymedePattern = /Uploads to a Ganymede bucket will require a PUT request with the header "x-goog-content-length-range" set with value "0,10000000", the header "x-goog-meta-initiatortype" set with value "API", and the header "x-goog-meta-initiatorid" set with the initiator value that was passed in the request body\./;

    const newGanymedeContent = `Uploads to a Ganymede bucket will require a PUT request with these header elements:

\`\`\`json
{
  "x-goog-content-length-range": "0,10000000",
  "x-goog-meta-initiatortype": "API",
  "x-goog-meta-initiatorid": initiator value passed in the request body
}
\`\`\``;

    if (oldGanymedePattern.test(content)) {
      content = content.replace(oldGanymedePattern, newGanymedeContent);
      changesMade = true;
    }

    if (content !== originalContent || changesMade) {
      fs.writeFileSync(uploadFilePath, content);
      console.log(`${colors.green}Fixed uploadFile description and formatting${colors.reset}`);
    }
  }
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

  // Categories to exclude from sidebar
  const categoriesToExclude = [
    'PublicApi',
    'Schemas',
    'Secrets'
  ];

  // Remove excluded categories
  categoriesToExclude.forEach(categoryLabel => {
    const categoryPattern = `type: "category",\n      label: "${categoryLabel}"`;
    const categoryStart = sidebarContent.indexOf(categoryPattern);

    if (categoryStart !== -1) {
      // Find the matching closing bracket for this category
      let bracketCount = 0;
      let endPos = categoryStart;

      // Go back to find the opening {
      let startPos = categoryStart;
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
        console.log(`${colors.yellow}Removing ${categoryLabel} category${colors.reset}`);
        // Remove from the start of the category to the end, including any trailing comma/whitespace
        const before = sidebarContent.substring(0, startPos).trimEnd();
        const after = sidebarContent.substring(endPos).trimStart();

        // Add proper spacing between remaining categories
        if (before && after && after.startsWith('{')) {
          sidebarContent = before + ',\n    ' + after;
        } else {
          sidebarContent = before + after;
        }
        changeCount++;
      }
    }
  });

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
  console.log(`${colors.yellow}Updating sidebar and fixing API descriptions...${colors.reset}`);

  try {
    fixApiDescriptions();
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