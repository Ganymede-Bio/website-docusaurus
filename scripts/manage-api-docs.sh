#!/bin/bash
# scripts/manage-api-docs.sh
# Systematically manages large API documentation files to improve build performance
# Usage: ./scripts/manage-api-docs.sh {exclude|restore|list|status}

# Configuration: Size threshold for exclusion (in bytes)
SIZE_THRESHOLD="350000"  # 350KB

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Patterns for files that should always be excluded regardless of size
EXCLUDE_PATTERNS=(
  "process.schema"
  "unitoperation.schema"
  "instrumenttype.schema"
  "connectionv-4.schema"
  "agentv-4.schema"
  "host.schema"
  "get-host"
  "get-agent-templates"
  "connector.schema"
  "connectorconnection.schema"
  "customimage.schema"
  "panelapp.schema"
  "dashboard.schema"
  "chart.schema"
  "dataset.schema"
)

# Function to exclude large files
exclude_large_files() {
  echo -e "${YELLOW}Finding and excluding files larger than ${SIZE_THRESHOLD} bytes...${NC}"

  # Counter for excluded files
  count=0
  total_size_saved=0

  # Find and exclude large files
  while IFS= read -r file; do
    if [[ ! "$file" == *.excluded ]]; then
      size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
      size_mb=$(echo "scale=2; $size / 1048576" | bc)

      # Move file to .excluded
      mv "$file" "${file}.excluded"

      echo -e "${RED}Excluded:${NC} $(basename "$file") (${size_mb}MB)"
      ((count++))
      ((total_size_saved+=size))
    fi
  done < <(find docs/api -name "*.mdx" -size +${SIZE_THRESHOLD}c 2>/dev/null)

  # Also exclude files matching patterns regardless of size
  for pattern in "${EXCLUDE_PATTERNS[@]}"; do
    while IFS= read -r file; do
      if [[ ! "$file" == *.excluded ]] && [[ -f "$file" ]]; then
        size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        size_mb=$(echo "scale=2; $size / 1048576" | bc)

        mv "$file" "${file}.excluded"

        echo -e "${RED}Excluded by pattern:${NC} $(basename "$file") (${size_mb}MB)"
        ((count++))
        ((total_size_saved+=size))
      fi
    done < <(find docs/api -name "*${pattern}*" -name "*.mdx" 2>/dev/null)
  done

  total_mb=$(echo "scale=2; $total_size_saved / 1048576" | bc)
  echo -e "${GREEN}Excluded ${count} files, saved ${total_mb}MB${NC}"
}

# Function to restore excluded files
restore_excluded_files() {
  echo -e "${YELLOW}Restoring excluded files...${NC}"

  count=0
  while IFS= read -r file; do
    original="${file%.excluded}"
    mv "$file" "$original"
    echo -e "${GREEN}Restored:${NC} $(basename "$original")"
    ((count++))
  done < <(find docs/api -name "*.excluded" 2>/dev/null)

  echo -e "${GREEN}Restored ${count} files${NC}"
}

# Function to list large files
list_large_files() {
  echo -e "${YELLOW}Files larger than ${SIZE_THRESHOLD} bytes:${NC}"
  echo "----------------------------------------"

  # List current large files
  while IFS= read -r line; do
    echo "$line"
  done < <(find docs/api -name "*.mdx" -size +${SIZE_THRESHOLD}c -exec ls -lh {} \; 2>/dev/null)

  echo ""
  echo -e "${YELLOW}Files matching exclusion patterns:${NC}"
  echo "----------------------------------------"

  # List files matching patterns
  for pattern in "${EXCLUDE_PATTERNS[@]}"; do
    find docs/api -name "*${pattern}*" -name "*.mdx" -exec ls -lh {} \; 2>/dev/null
  done
}

# Function to show current status
show_status() {
  echo -e "${YELLOW}API Documentation Status${NC}"
  echo "========================"

  # Count excluded files
  excluded_count=$(find docs/api -name "*.excluded" 2>/dev/null | wc -l)

  # Count active MDX files
  active_count=$(find docs/api -name "*.mdx" 2>/dev/null | wc -l)

  # Calculate sizes
  if [ "$excluded_count" -gt 0 ]; then
    excluded_size=$(find docs/api -name "*.excluded" -exec stat -f%z {} \; 2>/dev/null | awk '{s+=$1} END {print s}' || \
                    find docs/api -name "*.excluded" -exec stat -c%s {} \; 2>/dev/null | awk '{s+=$1} END {print s}')
    excluded_mb=$(echo "scale=2; ${excluded_size:-0} / 1048576" | bc)
  else
    excluded_mb=0
  fi

  if [ "$active_count" -gt 0 ]; then
    active_size=$(find docs/api -name "*.mdx" -exec stat -f%z {} \; 2>/dev/null | awk '{s+=$1} END {print s}' || \
                  find docs/api -name "*.mdx" -exec stat -c%s {} \; 2>/dev/null | awk '{s+=$1} END {print s}')
    active_mb=$(echo "scale=2; ${active_size:-0} / 1048576" | bc)
  else
    active_mb=0
  fi

  echo -e "Active files:   ${GREEN}${active_count}${NC} files (${active_mb}MB)"
  echo -e "Excluded files: ${RED}${excluded_count}${NC} files (${excluded_mb}MB)"
  echo ""

  if [ "$excluded_count" -gt 0 ]; then
    echo -e "${YELLOW}Excluded files:${NC}"
    find docs/api -name "*.excluded" -exec basename {} \; 2>/dev/null | sort
  fi
}

# Main execution
case "$1" in
  exclude)
    exclude_large_files
    ;;
  restore)
    restore_excluded_files
    ;;
  list)
    list_large_files
    ;;
  status)
    show_status
    ;;
  *)
    echo "Usage: $0 {exclude|restore|list|status}"
    echo ""
    echo "Commands:"
    echo "  exclude - Exclude files larger than ${SIZE_THRESHOLD} bytes"
    echo "  restore - Restore all excluded files"
    echo "  list    - List files that would be excluded"
    echo "  status  - Show current exclusion status"
    exit 1
    ;;
esac