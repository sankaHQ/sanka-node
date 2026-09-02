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
  "The hosted API client and local migration runtime are separate:",
  "",
  "| Import | What runs | Authentication |",
  "|---|---|---|",
  '| `import Sanka from "sanka-sdk"` | Sanka\'s hosted HTTP API | API token |',
  '| `import { SankaMigrate } from "sanka-sdk/migrate"` | A local `sanka` subprocess | None |',
  "",
  "Install `sanka` separately. The Node adapter does not bundle the runtime or call the hosted API.",
  "",
  "```bash",
  "uv tool install sanka-cli",
  "```",
  "",
  "Use a runtime release that includes the extension marketplace commands and",
  "the published default DRF extension dependency.",
  "",
  "```typescript",
  'import { SankaMigrate } from "sanka-sdk/migrate";',
  "",
  "const migrate = new SankaMigrate({",
  '  cwd: "./django-app",',
  '  env: { DJANGO_SECRET_KEY: process.env["DJANGO_SECRET_KEY"] },',
  "});",
  "",
  "await migrate.extensions.marketplaces.add(",
  '  "git@github.com:sankaHQ/extensions.git",',
  '  { name: "sanka" },',
  ");",
  "const extensions = await migrate.extensions.list();",
  "console.log(extensions.data);",
  'await migrate.extensions.add("sanka/drf-to-fastapi", {',
  '  marketplace: "sanka",',
  "});",
  "",
  "const scan = await migrate.scan();",
  "for (const recommendation of scan.data.recommendations ?? []) {",
  "  console.log(",
  "    recommendation.id,",
  "    recommendation.targets,",
  "    recommendation.status,",
  "    recommendation.add_command,",
  "  );",
  "}",
  "",
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
  "`scan.data.recommendations` contains typed extension IDs, versions, marketplace",
  "names, targets, static evidence, status, and the exact add command. `plan({ to })`",
  "selects one enabled extension that advertises that target. SDK calls are",
  "non-interactive, so pass `to`. A missing, incompatible, or ambiguous extension",
  "fails instead of choosing one silently. For `SANKA_EXTENSION_REQUIRED`, read",
  "the same recommendation data from",
  '`error.parsedError?.details?.["recommendations"]`.',
  "",
  "`extensionConfig` and `extensionEnvironment` are available on `scan`, `plan`,",
  "`apply`, `test`, and `verify`. Configuration must be a plain JSON object. The",
  "adapter snapshots and serializes it before spawning. `extensionEnvironment`",
  "accepts names such as `DJANGO_SECRET_KEY`, not secret values. Values come from",
  "`process.env` plus the constructor's `env` overrides and are forwarded only",
  "when named.",
  "",
  "### Manage extensions and marketplaces",
  "",
  "```typescript",
  'await migrate.extensions.marketplaces.add("./marketplace", {',
  '  name: "third-party",',
  "  trust: true,",
  "});",
  "await migrate.extensions.marketplaces.list();",
  'await migrate.extensions.marketplaces.upgrade("third-party");',
  "await migrate.extensions.marketplaces.upgrade(); // Upgrade every marketplace.",
  "",
  'await migrate.extensions.add("example/demo", {',
  '  marketplace: "third-party",',
  "});",
  "await migrate.extensions.list();",
  'await migrate.extensions.remove("example/demo");',
  "",
  'await migrate.extensions.marketplaces.remove("third-party");',
  "```",
  "",
  "The Node adapter does not make trust or snapshot decisions. `sanka`",
  "owns marketplace trust checks, immutable snapshots, artifact validation,",
  "installed caches, and project extension locks. Adding an untrusted marketplace",
  "requires `trust: true`. Upgrading reads a new immutable snapshot. Removing a",
  "marketplace fails while a project extension still depends on it.",
  "",
  "### Command and result contract",
  "",
  "| Node.js method | Runtime command | Purpose |",
  "|---|---|---|",
  "| `scan()` | `sanka scan ... --json` | Inspect the source and write the scan artifact |",
  "| `plan()` | `sanka plan ... --json` | Create a reviewable plan and plan hash |",
  "| `apply()` | `sanka apply ... --json` | Generate only from the supplied reviewed plan hash |",
  "| `test()` | `sanka test ... --json` | Prepare the generated target environment and run its tests |",
  "| `verify()` | `sanka verify ... --json` | Verify integrity and configured behavior |",
  "| `extensions.add/list/remove` | `sanka extension ... --json` | Manage project extension pins |",
  "| `extensions.marketplaces.add/list/upgrade/remove` | `sanka extension marketplace ... --json` | Manage immutable marketplace snapshots |",
  "",
  "Every subprocess receives an argument array with `shell: false` and `--json`.",
  "Invalid extension configuration or environment names throw before the process",
  "starts. String arguments are never interpreted as shell commands.",
  "",
  "Successful calls return a typed `SankaMigrateResult` only after the adapter",
  "validates one complete `sanka-cli/v1` document. It requires the matching",
  "command, a `success` outcome with exit `0`, object `data`, string-array",
  "`artifacts`, `limitations`, and `next_actions`, and a string `migration_state`.",
  "",
  "Failures reject with `SankaMigrateError`. A valid CLI failure has an `error`",
  "outcome with exit `1` for a migration or verification failure, or exit `2` for",
  "invalid usage. `parsedError` contains its stable `code`, `message`, and optional",
  "`details`. `result` keeps the complete validated envelope. Missing executables,",
  "signals, malformed JSON, unsupported schemas, command mismatches, malformed",
  "error data, and inconsistent outcome/exit pairs fail closed without a `result`.",
  "",
  "```typescript",
  'import { SankaMigrateError } from "sanka-sdk/migrate";',
  "",
  "try {",
  '  await migrate.plan({ to: "fastapi" });',
  "} catch (error) {",
  "  if (error instanceof SankaMigrateError) {",
  "    console.error(error.parsedError?.code, error.parsedError?.details);",
  "    console.error(error.exitCode, error.stderr);",
  "  }",
  "}",
  "```",
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
