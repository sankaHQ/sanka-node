# DeveloperCloudFleetItemData

## Example Usage

```typescript
import { DeveloperCloudFleetItemData } from "sanka-sdk/models";

let value: DeveloperCloudFleetItemData = {
  key: "<key>",
  repository: "<value>",
  revision: "<value>",
  waitingForCapacity: true,
  run: {
    id: "64e53e64-fc7a-498f-bd04-6fef39d09ee6",
    workspaceId: "ecf18ff1-0fb2-4a52-9dff-664b56755469",
    request: {
      sourceId: "e0ece73f-a706-4078-92e3-9f9556ea441e",
      sourceSha256: "<value>",
      maxCredits: 893054,
    },
    billingCurrency: "JPY",
    inputSha256: "<value>",
    status: "queued",
    runnerImage: "<value>",
    extensionSha256: "<value>",
    executionBudgetMs: 267280,
    createdAt: new Date("2024-02-08T00:02:49.158Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `key`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `repository`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `revision`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `waitingForCapacity`                                                                     | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `run`                                                                                    | [models.DeveloperCloudCloudRunData](../models/developer-cloud-cloud-run-data.md)         | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `receipt`                                                                                | [models.DeveloperCloudCloudReceiptData](../models/developer-cloud-cloud-receipt-data.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `retriedRunId`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |