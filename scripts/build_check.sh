#!/bin/bash

# Get list of changed files in the last commit
changed_files=$(git diff --name-only HEAD~1 HEAD)

# Check if any changed file is NOT in the excluded list
for file in $changed_files; do
  case "$file" in
    README.md|screenshot-light.png|screenshot-dark.png) continue ;;
    scripts/*) continue ;;
    .github/*) continue ;;
    *) echo "Build needed due to change in: $file"; exit 1 ;;
  esac
done

echo "No build needed."
exit 0
