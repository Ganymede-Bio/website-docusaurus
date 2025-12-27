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

### Updating API Documentation
```bash
# Use the update script (recommended):
./scripts/update-api-spec.sh

# Or manually:
git submodule update --recursive --remote --init
cp api-server/common/public-api/openapi.yaml static/openapi.yaml
# Apply OpenAPI compatibility fixes manually if needed
git add static/openapi.yaml
git commit -m "Update API spec"
```

**Note**: The update script (`scripts/update-api-spec.sh`) automatically applies OpenAPI specification fixes:
- Adds `type: object` to `connConfiguration` property
- Removes invalid properties from `BearerAuth` security scheme
- Removes duplicate `PublicApi` tags
- Removes empty `ganymede` tag
- Sets proper server host default

These fixes are needed until the issues are resolved upstream in api-server.

**Source**: `api-server/common/public-api/openapi.yaml`
**Served from**: `static/openapi.yaml`
**Rendered by**: Scalar API Reference at `/api` (renders dynamically with automatic code sample generation)

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
- `/src/pages/api/` - API documentation (Scalar API Reference integration)
- `/docs/nodes/` - Node documentation (auto-generated from Python docstrings)
- `/docs/sdk/` - SDK documentation
- `/docs/releases/` - Release notes

### Key Configuration Files
- `docusaurus.config.js` - Main Docusaurus configuration, navbar, footer, plugins
- `sidebars.js` - Sidebar navigation structure
- `src/css/custom.css` - Custom styling

### Documentation Generation Pipeline
1. **API Docs**: Served via Scalar API Reference at /api
   - Source: `api-server/common/public-api/openapi.yaml`
   - Copy to static: `cp api-server/common/public-api/openapi.yaml static/openapi.yaml`
   - Scalar renders dynamically with automatic code sample generation (no generation step required)
   - Configuration: `src/pages/api/index.tsx`
   - Code samples automatically generated in cURL, JavaScript, Python, Node.js, and more
2. **Node Docs**: Generated from Python docstrings in `core-operators` and `pylib` submodules using custom Python scripts in `/pydoc/`
3. **SDK Docs**: Markdown files with auto-generated sidebars from JSON configs

### Submodules
- `api-server` - Contains OpenAPI specifications
- `core-operators` - Node operator code with docstrings
- `core-dev-operators` - Development operator code
- `pylib` - Python library documentation source

**IMPORTANT**: Do not modify files in submodule directories. These are external repositories that should only be updated through proper git submodule commands. Any changes needed in submodules should be made in their respective source repositories.

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
- **API Documentation**: Interactive single-page API docs using Scalar API Reference at /api with automatic code sample generation
- **Redirects**: Configured in plugin-client-redirects for URL migrations