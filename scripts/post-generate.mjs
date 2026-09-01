#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoDir = path.resolve(__dirname, "..");

const rootFiles = ["README.md", "USAGE.md"];
const exampleFiles = ["examples/aiEnrich.example.ts"];

const entrypoint = `/*
 * Custom Sanka entrypoint layered on top of the generated Speakeasy client.
 * This file is rewritten by scripts/post-generate.mjs after every generation.
 */

export * from "./lib/config.js";
export * as files from "./lib/files.js";
export { HTTPClient } from "./lib/http.js";
export type { Fetcher, HTTPClientOptions } from "./lib/http.js";
export { Sanka as GeneratedSanka } from "./sdk/sdk.js";
export { default as Sanka } from "./client-wrapper.js";
export type { SankaClientOptions } from "./client-wrapper.js";
export { default } from "./client-wrapper.js";
`;

const readmeHeader = `# sanka-sdk

Official Node.js and TypeScript SDK for Sanka's hosted API and local migration lifecycle.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=sanka-sdk&utm_campaign=typescript)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-1f6feb?style=for-the-badge)](LICENSE)
`;

const migrationReadme = [
  "<!-- Start Local Migration [local-migration] -->",
  "## Local migration",
  "",
  "The hosted API client and local migration adapter are separate surfaces:",
  "",
  "| Import | What runs | Authentication |",
  "|---|---|---|",
  '| `import Sanka from "sanka-sdk"` | Sanka\'s hosted HTTP API | API token |',
  '| `import { SankaMigrate } from "sanka-sdk/migrate"` | A local `sanka-migrate` subprocess | None |',
  "",
  "Install the migration runtime separately, then import the tokenless Node-only subpath:",
  "",
  "```bash",
  "uv tool install sanka-migrate",
  "```",
  "",
  "```typescript",
  'import { SankaMigrate } from "sanka-sdk/migrate";',
  "",
  'const migrate = new SankaMigrate({ cwd: "./django-app" });',
  "",
  "const available = await migrate.extensions.list();",
  'await migrate.extensions.add("sanka/drf-to-fastapi");',
  "const marketplaces = await migrate.extensions.marketplaces.list();",
  "",
  "const scan = await migrate.scan();",
  "const plan = await migrate.plan({",
  '  to: "fastapi",',
  '  generation: "full",',
  '  strategy: "native",',
  '  packageManager: "uv",',
  '  extensionConfig: { output: "target" },',
  '  extensionEnvironment: ["DJANGO_SECRET_KEY"],',
  "});",
  "const applied = await migrate.apply({ planHash: plan.data.plan_hash });",
  "const tested = await migrate.test();",
  "const verified = await migrate.verify();",
  "```",
  "",
  "Each method maps directly to the local runtime:",
  "",
  "| Node.js method | Runtime command | Purpose |",
  "|---|---|---|",
  "| `scan()` | `sanka-migrate scan ... --json` | Inspect the source and write the scan artifact |",
  "| `plan()` | `sanka-migrate plan ... --json` | Create a reviewable plan and plan hash |",
  "| `apply()` | `sanka-migrate apply ... --json` | Generate only from the supplied reviewed plan hash |",
  "| `test()` | `sanka-migrate test ... --json` | Prepare the generated target environment and run its tests |",
  "| `verify()` | `sanka-migrate verify ... --json` | Verify integrity and configured behavior |",
  "| `extensions.add/list/remove` | `sanka-migrate extension ... --json` | Manage project extension pins |",
  "| `extensions.marketplaces.add/list/upgrade/remove` | `sanka-migrate extension marketplace ... --json` | Manage immutable marketplace snapshots |",
  "",
  "The adapter uses a shell-free argument vector and never calls Sanka's hosted API. It validates extension configuration as JSON and explicit environment-variable names before spawning; migration defaults, framework detection, generated-target environments, and plan-hash safety remain owned by `sanka-migrate`. Every call returns a typed `SankaMigrateResult` with the `sanka-cli/v1` fields `data`, `artifacts`, `limitations`, and `next_actions`.",
  "",
  "Failures reject with `SankaMigrateError`. Its `command`, `exitCode`, `parsedError`, complete valid failure `result`, and `stderr` fields distinguish a migration failure (exit `1`), invalid usage (exit `2`), a missing executable, and an invalid protocol response. Exported classes, methods, and option types include JSDoc for IDE hover.",
  "",
  "See the [CLI execution model](https://github.com/sankaHQ/sanka/blob/main/docs/django-to-fastapi.md#cli-and-sdk-execution-model) and [Sanka developer documentation](https://sanka.com/docs/developers/).",
  "<!-- End Local Migration [local-migration] -->",
].join("\n");

async function main() {
  await fs.copyFile(
    path.join(repoDir, "handwritten/migrate.ts"),
    path.join(repoDir, "src/migrate.ts"),
  );
  await fs.writeFile(path.join(repoDir, "src/index.ts"), entrypoint);

  const files = [
    ...rootFiles.map((file) => path.join(repoDir, file)),
    ...exampleFiles.map((file) => path.join(repoDir, file)),
  ];

  await Promise.all(files.map(patchFile));
}

async function patchFile(filePath) {
  try {
    await fs.access(filePath);
  } catch (error) {
    if (error?.code === "ENOENT") return;
    throw error;
  }

  const original = await fs.readFile(filePath, "utf8");
  let next = original;

  next = next.replaceAll("sanka-sdk-speakeasy", "sanka-sdk");
  next = next.replaceAll("<UNSET>", "sanka-sdk");

  if (path.basename(filePath) === "README.md" && path.dirname(filePath) === repoDir) {
    next = patchRootReadme(next);
  }

  if (path.basename(filePath) === "USAGE.md") {
    next = patchUsageSnippet(next);
  }

  if (path.basename(filePath) === "aiEnrich.example.ts") {
    next = patchUsageSnippet(next);
  }

  if (next !== original) {
    await fs.writeFile(filePath, next);
  }
}

function patchRootReadme(content) {
  let next = content;
  next = next.replace(
    /\n<!-- Start Local Migration \[local-migration\] -->[\s\S]*?<!-- End Local Migration \[local-migration\] -->\n*/m,
    "\n",
  );

  next = next.replace(
    /^# sanka-sdk[\s\S]*?<!-- Start Summary \[summary\] -->/m,
    `${readmeHeader}\n<!-- Start Summary [summary] -->`,
  );

  next = next.replace(/\n  \* \[Local migration\]\(#local-migration\)/g, "");
  next = next.replace(
    "  * [SDK Example Usage](#sdk-example-usage)",
    "  * [SDK Example Usage](#sdk-example-usage)\n  * [Local migration](#local-migration)",
  );

  next = next.replace(
    /## Summary\n\n(?:.|\n)*?<!-- End Summary \[summary\] -->/m,
    `## Summary

The official Node.js and TypeScript SDK for Sanka's hosted API and local migration lifecycle.

<!-- End Summary [summary] -->`,
  );

  next = next.replace(
    /\n> \[!TIP\][\s\S]*?\n\nThe SDK can be installed/,
    "\nThe SDK can be installed",
  );

  next = next.replace(
    /## SDK Example Usage[\s\S]*?<!-- End SDK Example Usage \[usage\] -->/m,
    `## SDK Example Usage

### Example

\`\`\`typescript
import Sanka from "sanka-sdk";

const sanka = new Sanka({
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const result = await sanka.ai.enrich({
    objectType: "<value>",
  });

  console.log(result);
}

run();
\`\`\`
<!-- End SDK Example Usage [usage] -->`,
  );
  next = next.replace(
    "<!-- End SDK Example Usage [usage] -->",
    "<!-- End SDK Example Usage [usage] -->\n\n" + migrationReadme,
  );

  next = next.replace(
    /To authenticate with the API the `[^`]+` parameter must be set when initializing the SDK client instance\. For example:[\s\S]*?run\(\);\n\n\`\`\`/m,
    `To authenticate with the API the \`apiKey\` parameter must be set when initializing the SDK client instance. For example:
\`\`\`typescript
import Sanka from "sanka-sdk";

const sanka = new Sanka({
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const result = await sanka.ai.enrich({
    objectType: "<value>",
  });

  console.log(result);
}

run();

\`\`\``,
  );

  next = next.replace(
    /\| `publicOAuthOrJWTAuth` \| http \| HTTP Bearer \| `SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH` \|/,
    "| `apiKey` | http | HTTP Bearer | `SANKA_API_KEY` |",
  );
  next = next.replace(
    /\| `bearerAuth` \| http \| HTTP Bearer \| `SANKA_BEARER_AUTH` \|/,
    "| `apiKey` | http | HTTP Bearer | `SANKA_API_KEY` |",
  );

  return next;
}

function patchUsageSnippet(content) {
  let next = content;

  next = next.replaceAll(
    'import { Sanka } from "sanka-sdk";',
    'import Sanka from "sanka-sdk";',
  );
  next = next.replaceAll("publicOAuthOrJWTAuth", "apiKey");
  next = next.replaceAll("bearerAuth", "apiKey");
  next = next.replaceAll("SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH", "SANKA_API_KEY");
  next = next.replaceAll("SANKA_BEARER_AUTH", "SANKA_API_KEY");

  return next;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
