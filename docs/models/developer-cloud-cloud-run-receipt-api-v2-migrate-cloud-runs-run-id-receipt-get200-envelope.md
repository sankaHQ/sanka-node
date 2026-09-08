# DeveloperCloudCloudRunReceiptApiV2MigrateCloudRunsRunIdReceiptGet200Envelope

## Example Usage

```typescript
import { DeveloperCloudCloudRunReceiptApiV2MigrateCloudRunsRunIdReceiptGet200Envelope } from "sanka-sdk/models";

let value:
  DeveloperCloudCloudRunReceiptApiV2MigrateCloudRunsRunIdReceiptGet200Envelope =
    {
      success: true,
      data: {
        runId: "b3137769-6dd9-4030-99ee-622e621dbc05",
        workspaceId: "6459430a-6a67-4857-9334-a9ed2bc3e933",
        inputSha256: "<value>",
        sourceSha256: "<value>",
        runnerImage: "<value>",
        extensionSha256: "<value>",
        attempts: [
          {
            attemptId: "<id>",
            activeMs: 108550,
          },
        ],
        heldCredits: 650267,
        computeCredits: 81573,
        releasedCredits: 778246,
        billingCurrency: "USD",
        outcome: "succeeded",
        artifacts: [
          {
            name: "output.zip",
            sha256: "<value>",
            sizeBytes: 271862,
            expiresAt: new Date("2024-04-04T15:28:35.775Z"),
          },
        ],
        settledAt: new Date("2024-07-10T14:35:42.699Z"),
      },
      meta: {
        ctxId: "<id>",
      },
    };
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `success`                                                                                | *true*                                                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [models.DeveloperCloudCloudReceiptData](../models/developer-cloud-cloud-receipt-data.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `meta`                                                                                   | [models.EnvelopeMeta](../models/envelope-meta.md)                                        | :heavy_check_mark:                                                                       | N/A                                                                                      |