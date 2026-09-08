# CreateRunResponse

## Example Usage

```typescript
import { CreateRunResponse } from "sanka-sdk/models/operations";

let value: CreateRunResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                              | Record<string, *string*[]>                                                                                                                                             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `result`                                                                                                                                                               | [models.DeveloperCloudCreateCloudRunApiV2MigrateCloudRunsPost201Envelope](../../models/developer-cloud-create-cloud-run-api-v2-migrate-cloud-runs-post201-envelope.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |