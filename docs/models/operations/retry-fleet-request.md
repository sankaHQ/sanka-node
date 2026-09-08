# RetryFleetRequest

## Example Usage

```typescript
import { RetryFleetRequest } from "sanka-sdk/models/operations";

let value: RetryFleetRequest = {
  fleetId: "df20104d-ebd3-446a-8880-cace592c09de",
  idempotencyKey: "<value>",
  body: {
    itemKeys: [
      "<value 1>",
    ],
    maxCredits: 741402,
    concurrency: 820307,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `fleetId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `xWorkspaceCode`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `body`                                                                                        | [models.DeveloperCloudFleetRetryRequest](../../models/developer-cloud-fleet-retry-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |