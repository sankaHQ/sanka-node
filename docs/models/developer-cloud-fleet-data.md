# DeveloperCloudFleetData

## Example Usage

```typescript
import { DeveloperCloudFleetData } from "sanka-sdk/models";

let value: DeveloperCloudFleetData = {
  id: "4e1ca860-df6e-43ce-a6d9-670b98058fdb",
  workspaceId: "048996a4-0cab-4213-97b7-ee300c590505",
  request: {
    items: [],
    maxCredits: 346046,
    concurrency: 304293,
  },
  inputSha256: "<value>",
  status: "partial",
  createdAt: new Date("2026-12-14T15:54:58.524Z"),
  expiresAt: new Date("2026-07-27T01:09:55.906Z"),
  items: [
    {
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
    },
  ],
  heldCredits: 808906,
  computeCredits: 33133,
  premiumCredits: 76651,
  releasedCredits: 908347,
  outstandingCredits: 448099,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `workspaceId`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `request`                                                                                                   | [models.DeveloperCloudFleetRequest](../models/developer-cloud-fleet-request.md)                             | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `inputSha256`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `status`                                                                                                    | [models.DeveloperCloudFleetDataPropertiesStatus](../models/developer-cloud-fleet-data-properties-status.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `expiresAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `completedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `cancelRequestedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `retryOf`                                                                                                   | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `items`                                                                                                     | [models.DeveloperCloudFleetItemData](../models/developer-cloud-fleet-item-data.md)[]                        | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `heldCredits`                                                                                               | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `computeCredits`                                                                                            | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `premiumCredits`                                                                                            | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `releasedCredits`                                                                                           | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `outstandingCredits`                                                                                        | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |