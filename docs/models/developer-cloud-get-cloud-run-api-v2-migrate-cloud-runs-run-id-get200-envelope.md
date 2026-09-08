# DeveloperCloudGetCloudRunApiV2MigrateCloudRunsRunIdGet200Envelope

## Example Usage

```typescript
import { DeveloperCloudGetCloudRunApiV2MigrateCloudRunsRunIdGet200Envelope } from "sanka-sdk/models";

let value: DeveloperCloudGetCloudRunApiV2MigrateCloudRunsRunIdGet200Envelope = {
  success: true,
  data: {
    id: "8e5e7e4a-f238-4b92-9215-328cdd8f4f44",
    workspaceId: "c19a5e2e-46cd-45df-b48e-fceca5ce3108",
    request: {
      sourceId: "e0ece73f-a706-4078-92e3-9f9556ea441e",
      sourceSha256: "<value>",
      maxCredits: 893054,
    },
    billingCurrency: "JPY",
    inputSha256: "<value>",
    status: "running",
    runnerImage: "<value>",
    extensionSha256: "<value>",
    executionBudgetMs: 496562,
    createdAt: new Date("2026-09-27T10:18:23.599Z"),
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `success`                                                                        | *true*                                                                           | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [models.DeveloperCloudCloudRunData](../models/developer-cloud-cloud-run-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `meta`                                                                           | [models.EnvelopeMeta](../models/envelope-meta.md)                                | :heavy_check_mark:                                                               | N/A                                                                              |