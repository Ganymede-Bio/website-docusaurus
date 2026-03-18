#!/usr/bin/env node
/**
 * Generate a Postman Collection from the prepared OpenAPI spec.
 * Uses openapi-to-postmanv2 (official Postman converter).
 */

const fs = require('fs');
const path = require('path');
const Converter = require('openapi-to-postmanv2');

const SPEC_PATH = path.join(__dirname, '..', 'static', 'openapi.yaml');
const OUTPUT_PATH = path.join(__dirname, '..', 'static', 'ganymede-api.postman_collection.json');

const CONVERTER_OPTIONS = {
  folderStrategy: 'Tags',
  requestNameSource: 'Fallback',
  schemaFaker: true,
  includeAuthInfoInExample: true,
  alwaysInheritAuthentication: false,
  enableOptionalParameters: true,
  includeDeprecated: false,
  keepImplicitHeaders: false,
};

console.log('📦 Generating Postman collection...');

try {
  const specContent = fs.readFileSync(SPEC_PATH, 'utf8');

  const input = { type: 'string', data: specContent };

  Converter.convert(input, CONVERTER_OPTIONS, (err, result) => {
    if (err) {
      console.error('❌ Conversion error:', err);
      process.exit(1);
    }

    if (!result.result) {
      console.error('❌ Conversion failed:', result.reason);
      process.exit(1);
    }

    const collection = result.output[0].data;

    // Add collection-level auth (api-key)
    collection.auth = {
      type: 'apikey',
      apikey: [
        { key: 'key', value: 'api-key', type: 'string' },
        { key: 'value', value: '{{apiKey}}', type: 'string' },
        { key: 'in', value: 'header', type: 'string' },
      ],
    };

    // Add collection variables for auth
    if (!collection.variable) {
      collection.variable = [];
    }
    collection.variable.push(
      { key: 'apiKey', value: '', type: 'string', description: 'Your Ganymede API key' },
      { key: 'bearerToken', value: '', type: 'string', description: 'Your JWT bearer token' },
    );

    // Fix description type to markdown
    if (collection.info && collection.info.description) {
      collection.info.description = {
        content: typeof collection.info.description === 'string'
          ? collection.info.description
          : collection.info.description.content,
        type: 'text/markdown',
      };
    }

    const json = JSON.stringify(collection, null, 2);
    fs.writeFileSync(OUTPUT_PATH, json, 'utf8');

    const folders = (collection.item || []).length;
    const requests = (collection.item || []).reduce(
      (sum, folder) => sum + (folder.item ? folder.item.length : 0), 0
    );
    const sizeMB = (Buffer.byteLength(json) / 1024 / 1024).toFixed(1);

    console.log('');
    console.log('✅ Postman collection generated:');
    console.log(`   - ${folders} folders, ${requests} requests`);
    console.log(`   - ${sizeMB} MB`);
    console.log(`   - ${OUTPUT_PATH}`);
  });
} catch (err) {
  console.error('❌ Error:', err.message);
  process.exit(1);
}
