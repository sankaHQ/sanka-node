# DeveloperCloudListCloudRunsApiV2MigrateCloudRunsGet200Envelope

## Example Usage

```typescript
import { DeveloperCloudListCloudRunsApiV2MigrateCloudRunsGet200Envelope } from "sanka-sdk/models";

let value: DeveloperCloudListCloudRunsApiV2MigrateCloudRunsGet200Envelope = {
  success: true,
  data: {
    runs: [
      {
        id: "544d51c5-af4c-47fe-964f-ccdd42b8ad77",
        workspaceId: "2b8a67a4-6ace-4d05-87df-6646b768f714",
        request: {
          sourceId: "e0ece73f-a706-4078-92e3-9f9556ea441e",
          sourceSha256: "<value>",
          maxCredits: 893054,
        },
        billingCurrency: "USD",
        inputSha256: "<value>",
        status: "cancelled",
        runnerImage: "<value>",
        extensionSha256: "<value>",
        executionBudgetMs: 132748,
        createdAt: new Date("2026-07-06T05:47:51.533Z"),
      },
    ],
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `success`                                                                                 | *true*                                                                                    | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `data`                                                                                    | [models.DeveloperCloudCloudRunListData](../models/developer-cloud-cloud-run-list-data.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `meta`                                                                                    | [models.EnvelopeMeta](../models/envelope-meta.md)                                         | :heavy_check_mark:                                                                        | N/A                                                                                       |