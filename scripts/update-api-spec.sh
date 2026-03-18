#!/bin/bash
# Update API specification from api-server submodule and prepare for Scalar

set -e

echo "🔄 Updating API specification..."

# Update submodule
echo "📥 Fetching latest from api-server submodule..."
git submodule update --recursive --remote --init

# Copy to static
echo "📋 Copying spec to static folder..."
cp api-server/common/public-api/openapi.yaml static/openapi.yaml

# Prepare spec (filter, cleanup, fix)
if command -v node &> /dev/null; then
    node scripts/prepare-api-spec.js
    echo ""
    echo "📦 Generating Postman collection..."
    node scripts/generate-postman-collection.js
else
    echo "⚠️  Node.js not found. Cannot prepare API spec."
    exit 1
fi

echo ""

# Validate the spec
echo "🔍 Validating OpenAPI spec..."
if command -v npx &> /dev/null; then
    if npx --yes @apidevtools/swagger-cli validate static/openapi.yaml 2>&1 | grep -q "is valid"; then
        echo "✅ OpenAPI spec is valid!"
    else
        echo "⚠️  Validation warnings/errors detected. Check output above."
    fi
else
    echo "⚠️  npx not found. Skipping validation. Install Node.js to enable validation."
fi

echo ""
echo "📊 Changes summary:"
git diff --stat static/openapi.yaml || echo "No git changes detected"

echo ""
echo "✅ API spec updated successfully!"
echo ""
echo "Next steps:"
echo "1. Review changes: git diff static/openapi.yaml"
echo "2. Test locally: yarn start (navigate to /api)"
echo "3. Build: yarn build"
echo "4. Commit: git add static/openapi.yaml && git commit -m 'Update API spec'"
echo ""
