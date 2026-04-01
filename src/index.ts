/*
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
