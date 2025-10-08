# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the Ganymede documentation website repository, built with Docusaurus v3.6.3. The site is served at docs.ganymede.bio and contains documentation for the Ganymede Cloud Server, including app documentation, API references, SDK documentation, and node documentation.

## Common Development Commands

### Local Development
```bash
yarn start         # Start local dev server on port 3000
yarn build         # Build production site
yarn clear         # Clear cache/build artifacts
yarn serve         # Serve production build locally
```

### API Documentation Generation
```bash
# Generate API docs from OpenAPI spec
yarn api           # Runs: docusaurus clean-api-docs all && docusaurus gen-api-docs all

# The OpenAPI spec is located at: api-server/common/public-api/openapi.yaml
```

### Node Documentation Generation
```bash
# Update submodules and generate node docs
git submodule update --recursive --remote --init

# Generate operator documentation
pushd pydoc
source env/bin/activate
python generateOperatorDocs.py
python generatePylibDocs.py
python generateAllotropeDocs.py
deactivate
popd
```

### Environment Setup
- Requires Node.js v18 LTS (v18.12+ known to work)
- An `.env` file is required for Typesense configuration (see internal docs)
- Python environment for pydoc: `python3 -m venv env` in the pydoc directory

## Architecture

### Documentation Structure
- `/docs/app/` - Application documentation
- `/docs/api/` - API documentation (auto-generated from OpenAPI spec)
- `/docs/nodes/` - Node documentation (auto-generated from Python docstrings)
- `/docs/sdk/` - SDK documentation
- `/docs/releases/` - Release notes

### Key Configuration Files
- `docusaurus.config.js` - Main Docusaurus configuration, navbar, footer, plugins
- `sidebars.js` - Sidebar navigation structure
- `src/css/custom.css` - Custom styling

### Documentation Generation Pipeline
1. **API Docs**: Generated from `api-server/common/public-api/openapi.yaml` using docusaurus-plugin-openapi-docs
2. **Node Docs**: Generated from Python docstrings in `core-operators` and `pylib` submodules using custom Python scripts in `/pydoc/`
3. **SDK Docs**: Markdown files with auto-generated sidebars from JSON configs

### Submodules
- `api-server` - Contains OpenAPI specifications
- `core-operators` - Node operator code with docstrings
- `core-dev-operators` - Development operator code
- `pylib` - Python library documentation source

## Development Workflow

### Creating/Updating Documentation
1. Create a new branch: `git checkout -b <branch-name>`
2. Make changes and preview locally with `yarn start`
3. Commit and push: `git commit -am '<description>' && git push`
4. Merge to main after review to deploy to production

### Deployment
- Feature branches are automatically deployed to preview environments (URLs shared in Slack)
- Main branch deploys to production at docs.ganymede.bio

## Special Features
- **Algolia Search**: Configured with app ID `SMEM8QA2TD`
- **Analytics**: Vercel Analytics, Google Tag Manager, and Google Analytics configured
- **Mermaid Diagrams**: Supported via @docusaurus/theme-mermaid
- **OpenAPI Documentation**: Interactive API documentation with request/response examples
- **Redirects**: Configured in plugin-client-redirects for URL migrations

## API Documentation Build Optimization

The API documentation includes some very large schema files (up to 2.5MB each) that can cause memory issues during builds. A systematic exclusion system has been implemented to manage these files.

### Problem
- Total API docs size: **15MB** with 160 files
- Large files contain circular references and deeply nested objects
- Files over 350KB cause build memory issues

### Solution: Automated File Exclusion

**Quick Commands:**
```bash
make api-generate    # Generate API docs with automatic exclusions
make api-exclude     # Exclude large files from existing docs
make api-restore     # Restore all excluded files
make api-status      # Show current exclusion status
make api-list        # List files that would be excluded
make build           # Build site with exclusions applied
```

**Manual Management:**
```bash
./scripts/manage-api-docs.sh exclude  # Exclude large files
./scripts/manage-api-docs.sh restore  # Restore excluded files
./scripts/manage-api-docs.sh status   # Show status
./scripts/manage-api-docs.sh list     # List large files
```

### Configuration Files
- **`scripts/manage-api-docs.sh`** - Main exclusion script (350KB threshold)
- **`docs/api/.exclude-list`** - Documents which files are excluded and why
- **`scripts/update-sidebar.js`** - Removes references to excluded files from sidebar
- **`Makefile`** - Provides convenient automation targets

### How It Works
1. Files larger than 350KB are renamed with `.excluded` extension
2. Sidebar is updated to remove references to excluded files
3. Build proceeds with ~3MB of docs instead of 15MB
4. Excluded files are gitignored to keep repository clean

### Excluded Files (Typical)
- `process.schema.mdx` (2.5MB) - Circular references
- `unitoperation.schema.mdx` (1.7MB) - Circular references
- `instrumenttype.schema.mdx` (1.0MB) - Excessive enumerations
- `get-process.api.mdx` (2.4MB) - Returns full process object
- Plus ~14 other files over 350KB

This system reduces build memory usage by ~80% while maintaining all essential API documentation.