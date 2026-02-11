#!/usr/bin/env node
/**
 * Prepare OpenAPI spec for Scalar
 * - Filters out API groups (Secrets, Hosts)
 * - Removes duplicate/unwanted tags
 * - Applies compatibility fixes
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SPEC_PATH = path.join(__dirname, '..', 'static', 'openapi.yaml');
const FILTERED_GROUPS = ['Secrets'];
const UNWANTED_TAGS = ['PublicApi', 'ganymede'];

console.log('🔧 Preparing OpenAPI spec for Scalar...');

try {
  // Read the OpenAPI spec
  const specContent = fs.readFileSync(SPEC_PATH, 'utf8');
  const spec = yaml.load(specContent);

  if (!spec.paths) {
    console.error('❌ No paths found in OpenAPI spec');
    process.exit(1);
  }

  let operationsRemoved = 0;
  let pathsRemoved = 0;
  let tagsRemoved = 0;
  let deprecatedRemoved = 0;

  // 1. Filter out API groups (Secrets, Hosts) and deprecated endpoints
  console.log('   🔍 Filtering API groups and deprecated endpoints...');
  for (const [path, pathItem] of Object.entries(spec.paths)) {
    const methods = ['get', 'post', 'put', 'patch', 'delete', 'options', 'head'];
    let pathHasOperations = false;

    for (const method of methods) {
      if (!pathItem[method]) continue;

      const operation = pathItem[method];

      // Check if operation has any filtered tags
      if (operation.tags && operation.tags.some(tag => FILTERED_GROUPS.includes(tag))) {
        delete pathItem[method];
        operationsRemoved++;
        console.log(`      Removed: ${method.toUpperCase()} ${path}`);
      } else if (operation.deprecated) {
        delete pathItem[method];
        deprecatedRemoved++;
        console.log(`      Removed deprecated: ${method.toUpperCase()} ${path}`);
      } else if (pathItem[method]) {
        pathHasOperations = true;
      }
    }

    // If path has no operations left, remove the entire path
    if (!pathHasOperations) {
      delete spec.paths[path];
      pathsRemoved++;
    }
  }

  // 2. Remove unwanted tags from operations
  console.log('   🏷️  Removing unwanted tags...');
  for (const [path, pathItem] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(pathItem)) {
      if (!['get', 'post', 'put', 'patch', 'delete', 'options', 'head'].includes(method)) {
        continue;
      }

      if (operation.tags && Array.isArray(operation.tags)) {
        const originalLength = operation.tags.length;
        operation.tags = operation.tags.filter(tag => !UNWANTED_TAGS.includes(tag));
        if (operation.tags.length < originalLength) {
          tagsRemoved += (originalLength - operation.tags.length);
        }
      }
    }
  }

  // 3. Remove unwanted tag definitions from top-level tags array
  if (spec.tags && Array.isArray(spec.tags)) {
    const originalTagCount = spec.tags.length;
    spec.tags = spec.tags.filter(tag =>
      !FILTERED_GROUPS.includes(tag.name) && !UNWANTED_TAGS.includes(tag.name)
    );
    const defsRemoved = originalTagCount - spec.tags.length;
    if (defsRemoved > 0) {
      console.log(`      Removed ${defsRemoved} tag definition(s)`);
    }
  }

  // 4. Fix connConfiguration property (add missing type)
  console.log('   🔧 Fixing connConfiguration property...');
  let connConfigFixed = 0;
  if (spec.components && spec.components.schemas) {
    for (const [schemaName, schema] of Object.entries(spec.components.schemas)) {
      if (schema.properties && schema.properties.connConfiguration) {
        const connConfig = schema.properties.connConfiguration;
        if (!connConfig.type) {
          connConfig.type = 'object';
          connConfig.description = connConfig.description || 'Configuration for the connector';
          connConfigFixed++;
        }
      }
    }
  }
  if (connConfigFixed > 0) {
    console.log(`      Fixed ${connConfigFixed} connConfiguration propert(y/ies)`);
  }  

  // 5. Fix BearerAuth security scheme
  console.log('   🔧 Fixing BearerAuth security scheme...');
  if (spec.components && spec.components.securitySchemes && spec.components.securitySchemes.BearerAuth) {
    const bearerAuth = spec.components.securitySchemes.BearerAuth;
    // HTTP bearer auth should only have: scheme, bearerFormat, type, description
    spec.components.securitySchemes.BearerAuth = {
      scheme: 'bearer',
      bearerFormat: 'JWT',
      type: 'http',
      description: bearerAuth.description || 'JWT Bearer token authentication'
    };
    console.log('      Fixed BearerAuth security scheme');
  }

  // 6. Set proper server host default
  console.log('   🔧 Setting server host default...');
  if (spec.servers && Array.isArray(spec.servers)) {
    for (const server of spec.servers) {
      if (server.variables && server.variables.host) {
        if (server.variables.host.default === 'host') {
          server.variables.host.default = 'your_tenant.ganymede.bio';
          console.log('      Updated host default to your_tenant.ganymede.bio');
        }
      }
    }
  }

  // 7. Set title and description
  console.log('   🔧 Setting title and description...');
  if (spec.info) {
    if (!spec.info.title) {
      spec.info.title = 'Ganymede Public API Specification';
      console.log('      Set default title');
    }
    if (!spec.info.description) {
      spec.info.description = 'API specification for the Ganymede platform. Create an API key following the [instructions](https://docs.ganymede.bio/app/configuration/APISetup) to authenticate your requests.';
      console.log('      Set default description');
    }
  }

  // Write modified spec back
  const modifiedSpec = yaml.dump(spec, {
    lineWidth: -1, // Don't wrap lines
    noRefs: true,  // Don't use references
  });

  fs.writeFileSync(SPEC_PATH, modifiedSpec, 'utf8');

  console.log('');
  console.log('✅ Summary:');
  console.log(`   - Removed ${operationsRemoved} operation(s) from ${pathsRemoved} path(s)`);
  console.log(`   - Removed ${deprecatedRemoved} deprecated endpoint(s)`);
  console.log(`   - Removed ${tagsRemoved} unwanted tag(s) from operations`);
  console.log(`   - Applied compatibility fixes`);
  console.log(`   - Updated ${SPEC_PATH}`);

} catch (err) {
  console.error('❌ Error:', err.message);
  console.error(err.stack);
  process.exit(1);
}
