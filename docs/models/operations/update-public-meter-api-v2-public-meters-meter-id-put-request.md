# UpdatePublicMeterApiV2PublicMetersMeterIdPutRequest

## Example Usage

```typescript
import { UpdatePublicMeterApiV2PublicMetersMeterIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicMeterApiV2PublicMetersMeterIdPutRequest = {
  meterId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `meterId`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `externalId`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `workspaceId`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `xWorkspaceCode`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `body`                                                                                            | [models.PublicObjectRecordMutationRequest](../../models/public-object-record-mutation-request.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |