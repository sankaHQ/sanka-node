# CreateRunRequest

## Example Usage

```typescript
import { CreateRunRequest } from "sanka-sdk/models/operations";

let value: CreateRunRequest = {
  idempotencyKey: "<value>",
  body: {
    sourceId: "3babd5b1-659c-45ec-a123-53d17ed0bb33",
    sourceSha256: "<value>",
    maxCredits: 133589,
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `workspaceId`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `idempotencyKey`                                                                          | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `xWorkspaceCode`                                                                          | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `body`                                                                                    | [models.DeveloperCloudCloudRunRequest](../../models/developer-cloud-cloud-run-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |