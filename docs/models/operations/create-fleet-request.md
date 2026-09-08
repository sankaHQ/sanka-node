# CreateFleetRequest

## Example Usage

```typescript
import { CreateFleetRequest } from "sanka-sdk/models/operations";

let value: CreateFleetRequest = {
  idempotencyKey: "<value>",
  body: {
    items: [],
    maxCredits: 603624,
    concurrency: 593136,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workspaceId`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `idempotencyKey`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `xWorkspaceCode`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.DeveloperCloudFleetRequest](../../models/developer-cloud-fleet-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |