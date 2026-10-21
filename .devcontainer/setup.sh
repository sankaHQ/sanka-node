#!/bin/bash

# Fail setup if the configured runtime was not installed.
node -e "require('node:assert/strict').equal(process.versions.node, '24.22.1')" || exit 1

# Install the speakeasy CLI
curl -fsSL https://raw.githubusercontent.com/speakeasy-api/speakeasy/main/install.sh | sh

# Setup samples directory
rmdir samples || true
mkdir samples

npm install --ignore-scripts
npm install -g ts-node --ignore-scripts
npm link
npm link sanka-sdk
TS_CONFIG_CONTENT=$(cat <<EOL
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "openapi": ["../src/index"],
      "openapi/*": ["../src/*"]
    }
  },
  "include": ["./**/*.ts"]
}
EOL
)
echo "$TS_CONFIG_CONTENT" > samples/tsconfig.json

# Generate starter usage sample with speakeasy
speakeasy generate usage -s .speakeasy/out.openapi.yaml -l typescript -o samples/root.ts