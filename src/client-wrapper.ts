import { Sanka as GeneratedSanka } from "./sdk/sdk.js";
import type { SDKOptions } from "./lib/config.js";

export type SankaClientOptions = Omit<SDKOptions, "publicOAuthOrJWTAuth"> & {
  apiKey?: SDKOptions["publicOAuthOrJWTAuth"];
  publicOAuthOrJWTAuth?: SDKOptions["publicOAuthOrJWTAuth"];
};

export default class Sanka extends GeneratedSanka {
  constructor(options: SankaClientOptions = {}) {
    const { apiKey, publicOAuthOrJWTAuth, ...rest } = options;

    super({
      ...rest,
      publicOAuthOrJWTAuth: publicOAuthOrJWTAuth ?? apiKey,
    });
  }
}
