import { Sanka as GeneratedSanka } from "./sdk/sdk.js";
import type { SDKOptions } from "./lib/config.js";

export type SankaClientOptions = Omit<SDKOptions, "bearerAuth"> & {
  /**
   * Sanka API key. When omitted, the client reads `SANKA_API_KEY` from the
   * environment, then the older `SANKA_BEARER_AUTH`.
   */
  apiKey?: SDKOptions["bearerAuth"];
  /** Older name for `apiKey`; it takes precedence when both are set. */
  bearerAuth?: SDKOptions["bearerAuth"];
};

type Credential = SDKOptions["bearerAuth"];

function provided(value: Credential): boolean {
  return typeof value === "function" || (typeof value === "string" && value !== "");
}

function readEnvApiKey(): string | undefined {
  const globals = globalThis as {
    Deno?: { env?: { get?: (name: string) => string | undefined } };
    process?: { env?: Record<string, string | undefined> };
  };

  let value: string | undefined;
  try {
    value = globals.Deno?.env?.get
      ? globals.Deno.env.get("SANKA_API_KEY")
      : globals.process?.env?.["SANKA_API_KEY"];
  } catch {
    // Deno without --allow-env, or a runtime without an environment.
    return undefined;
  }

  return value ? value : undefined;
}

export default class Sanka extends GeneratedSanka {
  constructor(options: SankaClientOptions = {}) {
    const { apiKey, bearerAuth, ...rest } = options;

    // Explicit options win, then SANKA_API_KEY. When none is set the generated
    // client still falls back to SANKA_BEARER_AUTH.
    const credential = [bearerAuth, apiKey].find(provided) ?? readEnvApiKey();

    super({
      ...rest,
      bearerAuth: credential,
    });
  }
}
