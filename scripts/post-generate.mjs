#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoDir = path.resolve(__dirname, "..");

// The npm tarball ships neither docs/ nor FUNCTIONS.md, and npm does not
// resolve relative README links, so README links point at GitHub.
const repoBlobUrl = "https://github.com/sankaHQ/sanka-node/blob/main/";
// npm shows a README only up to 65,536 characters; keep a margin.
const readmeCharBudget = 60000;

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

[Node SDK guide](https://sanka.com/docs/developers/sdk-node/) · [Authentication](https://sanka.com/docs/developers/authentication/) · [Developer documentation](https://sanka.com/docs/developers/) · API base URL \`https://api.sanka.com\`

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=sanka-sdk&utm_campaign=typescript)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-1f6feb?style=for-the-badge)](LICENSE)
`;

const whoamiExample = `\`\`\`typescript
import Sanka from "sanka-sdk";

// With no apiKey, the client reads SANKA_API_KEY from the environment.
const sanka = new Sanka({
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const identity = await sanka.publicAuth.getCurrentIdentity();

  console.log(identity);
}

run();
\`\`\``;

const authenticationReadme = `## Authentication

Every request needs a Sanka API key. Create one as described in [Authentication](https://sanka.com/docs/developers/authentication/) and store it as \`SANKA_API_KEY\`.

| Option   | Type | Scheme      | Environment variable |
| -------- | ---- | ----------- | -------------------- |
| \`apiKey\` | http | HTTP Bearer | \`SANKA_API_KEY\`      |

\`new Sanka()\` reads \`SANKA_API_KEY\` when you do not pass \`apiKey\`. The older \`bearerAuth\` option and \`SANKA_BEARER_AUTH\` variable still work: an option you pass wins over the environment, and \`SANKA_API_KEY\` wins over \`SANKA_BEARER_AUTH\`.

${whoamiExample}

A missing or invalid key fails with HTTP 401, thrown as \`errors.ErrorEnvelope\` (see [Error Handling](#error-handling)).`;

const standaloneReadme = `## Standalone functions

Every method above is also a standalone function for browser and serverless bundles, where unused code is tree-shaken away. A function's name is the resource property followed by the method name, it is imported from \`sanka-sdk/funcs/<kebab-case-name>.js\`, and it takes a \`SankaCore\` client. \`SankaCore\` takes the key as \`bearerAuth\` and reads only the older \`SANKA_BEARER_AUTH\` from the environment, so pass the key explicitly:

\`\`\`typescript
import { SankaCore } from "sanka-sdk/core.js";
import { publicAuthGetCurrentIdentity } from "sanka-sdk/funcs/public-auth-get-current-identity.js";

const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const res = await publicAuthGetCurrentIdentity(sanka);
  if (res.ok) {
    console.log(res.value);
  } else {
    console.log("publicAuthGetCurrentIdentity failed:", res.error);
  }
}

run();
\`\`\`

Each resource page linked above shows the standalone form of every method. [FUNCTIONS.md](FUNCTIONS.md) explains the \`Result\` type they return.`;

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
    ...["README.md", "USAGE.md", "FUNCTIONS.md"].map((file) => path.join(repoDir, file)),
    ...(await listFiles(path.join(repoDir, "docs"), [".md"])),
    ...(await listFiles(path.join(repoDir, "examples"), [".ts", ".md", ".env.template"])),
  ];

  await Promise.all(files.map(patchFile));
}

async function listFiles(dir, extensions) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules") files.push(...(await listFiles(fullPath, extensions)));
    } else if (extensions.some((extension) => entry.name.endsWith(extension))) {
      files.push(fullPath);
    }
  }
  return files;
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
  next = filePath.endsWith(".md") ? mapCodeBlocks(next, useApiKey) : useApiKey(next);

  if (filePath === path.join(repoDir, "README.md")) {
    next = patchRootReadme(next);
  }

  if (next !== original) {
    await fs.writeFile(filePath, next);
  }
}

// Users read one name for the key: `apiKey` and SANKA_API_KEY.
function useApiKey(code) {
  const next = code
    .replaceAll("SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH", "SANKA_API_KEY")
    .replaceAll("SANKA_BEARER_AUTH", "SANKA_API_KEY")
    .replaceAll("your_bearerauth_here", "your_api_key_here");

  // SankaCore has no apiKey alias, so standalone snippets keep `bearerAuth`.
  if (next.includes("SankaCore")) return next;

  return next
    .replaceAll('import { Sanka } from "sanka-sdk";', 'import Sanka from "sanka-sdk";')
    .replace(/\b(?:publicOAuthOrJWTAuth|bearerAuth)(?=:)/g, "apiKey");
}

const fencePattern = /(^[ \t]*```[^\n]*\n[\s\S]*?^[ \t]*```[^\n]*$)/gm;

function mapCodeBlocks(markdown, fn) {
  return markdown
    .split(fencePattern)
    .map((part, index) => (index % 2 === 1 ? part.replace(/^([^\n]*\n)([\s\S]*?)(^[ \t]*```[^\n]*)$/m, (_, open, body, close) => open + fn(body) + close) : part))
    .join("");
}

function mapProse(markdown, fn) {
  return markdown
    .split(fencePattern)
    .map((part, index) => (index % 2 === 0 ? fn(part) : part))
    .join("");
}

function absoluteLinks(markdown) {
  return mapProse(markdown, (prose) =>
    prose.replace(
      /\]\((?!https?:\/\/|#|mailto:)(?:\.\/)?([^)\s]+)\)/g,
      (_, target) => `](${repoBlobUrl}${target})`,
    ),
  );
}

function replaceSection(markdown, id, body) {
  const pattern = new RegExp(
    `(<!-- Start [^\\n]*?\\[${id}\\] -->\\n)[\\s\\S]*?(\\n?<!-- End [^\\n]*?\\[${id}\\] -->)`,
  );
  return markdown.replace(pattern, (_, start, end) => `${start}${body}\n${end.trimStart()}`);
}

function sectionBody(markdown, id) {
  const pattern = new RegExp(
    `<!-- Start [^\\n]*?\\[${id}\\] -->\\n([\\s\\S]*?)<!-- End [^\\n]*?\\[${id}\\] -->`,
  );
  return markdown.match(pattern)?.[1] ?? "";
}

// Reads Speakeasy's operations list, or the compact list rendered below.
function parseOperations(body) {
  const resources = [];
  for (const line of body.split("\n")) {
    const heading = line.match(/^### \[([^\]]+)\]\(([^)]+)\)/);
    if (heading) {
      resources.push({ name: heading[1], link: heading[2], methods: [] });
      continue;
    }

    const method = line.match(/^\* (?:\[~~([^\]~]+)~~\]\([^)]*\)|\[([^\]]+)\]\([^)]*\)|`([^`]+)`) - (.*)$/);
    if (method && resources.length > 0) {
      let description = method[4];
      const deprecated =
        method[1] !== undefined || /(?: :warning: \*\*Deprecated\*\*| \(deprecated\))$/.test(description);
      description = description.replace(/(?: :warning: \*\*Deprecated\*\*| \(deprecated\))$/, "");
      resources.at(-1).methods.push({
        name: method[1] ?? method[2] ?? method[3],
        description,
        deprecated,
      });
    }
  }
  return resources;
}

function clientProperty(resourceName) {
  return resourceName
    .split(".")
    .map((part) => part.charAt(0).toLowerCase() + part.slice(1))
    .join(".");
}

function renderOperations(resources, { withMethods }) {
  const intro = `## Available Resources and Operations

Each resource is a property of the client: \`sanka.publicAuth.getCurrentIdentity()\` calls \`GET /v2/public/auth/whoami\`. Each resource links to its page on GitHub with the parameters, response type and an example for every method. The installed package also ships the typed source in \`src/sdk/\`.
`;

  if (!withMethods) {
    const rows = resources.map(
      (resource) =>
        `| [${resource.name}](${resource.link}) | \`sanka.${clientProperty(resource.name)}\` | ${resource.methods.length} |`,
    );
    return `${intro}
| Resource | Client property | Methods |
| -------- | --------------- | ------- |
${rows.join("\n")}`;
  }

  const blocks = resources.map((resource) => {
    const methods = resource.methods.map(
      (method) => `* \`${method.name}\` - ${method.description}${method.deprecated ? " (deprecated)" : ""}`,
    );
    return `### [${resource.name}](${resource.link}): \`sanka.${clientProperty(resource.name)}\`

${methods.join("\n")}`;
  });

  return `${intro}
<details open>
<summary>Available methods</summary>

${blocks.join("\n\n")}

</details>`;
}

function patchRootReadme(content) {
  let next = content;

  const cloudLinkText = "[Developer Cloud release candidate](";
  if (!next.includes(cloudLinkText)) {
    next += `\n\n${cloudLinkText}docs/developer-cloud.md): bounded execution, Repair, certificates and Fleet.\n`;
  }
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

${whoamiExample}
<!-- End SDK Example Usage [usage] -->`,
  );
  next = next.replace(
    "<!-- End SDK Example Usage [usage] -->",
    "<!-- End SDK Example Usage [usage] -->\n\n" + migrationReadme,
  );

  next = replaceSection(next, "security", authenticationReadme);
  next = replaceSection(next, "standalone-funcs", standaloneReadme);

  const defaultServer = "Requests go to `https://api.sanka.com` by default.";
  if (!next.includes(defaultServer)) {
    next = next.replace("## Server Selection\n", `## Server Selection\n\n${defaultServer}\n`);
  }

  const resources = parseOperations(sectionBody(next, "operations"));
  if (resources.length === 0) {
    throw new Error("README.md: found no resources in the operations section");
  }

  let readme = absoluteLinks(
    replaceSection(next, "operations", renderOperations(resources, { withMethods: true })),
  );
  if (readme.length > readmeCharBudget) {
    console.warn(
      `README.md has ${readme.length} characters with every method listed; listing resources only.`,
    );
    readme = absoluteLinks(
      replaceSection(next, "operations", renderOperations(resources, { withMethods: false })),
    );
  }
  if (readme.length > readmeCharBudget) {
    throw new Error(
      `README.md has ${readme.length} characters; npm cuts READMEs at 65,536, so keep it under ${readmeCharBudget}.`,
    );
  }

  return readme;
}

await main();

// Preserve the hand-written local migration adapter across regeneration.
const packagePath = path.join(repoDir, "package.json");
const packageJson = JSON.parse(await fs.readFile(packagePath, "utf8"));
packageJson.exports["./migrate"] = {
  source: "./src/migrate.ts",
  types: "./esm/migrate.d.ts",
  default: "./esm/migrate.js",
};
packageJson.scripts.test = "npm run build && node --test tests/*.test.mjs";
packageJson.devDependencies["@types/node"] = "^24.13.3";
await fs.writeFile(packagePath, JSON.stringify(packageJson, null, 2) + "\n");
