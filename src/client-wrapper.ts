import { Sanka as GeneratedSanka } from "./sdk/sdk.js";
import type { SDKOptions } from "./lib/config.js";

export type SankaClientOptions = Omit<SDKOptions, "bearerAuth"> & {
  apiKey?: SDKOptions["bearerAuth"];
  bearerAuth?: SDKOptions["bearerAuth"];
};

export default class Sanka extends GeneratedSanka {
  constructor(options: SankaClientOptions = {}) {
    const { apiKey, bearerAuth, ...rest } = options;

    super({
      ...rest,
      bearerAuth: bearerAuth ?? apiKey,
    });
  }
}
