# UpdatePublicDisbursementApiV2PublicDisbursementsDisbursementIdPutRequest

## Example Usage

```typescript
import { UpdatePublicDisbursementApiV2PublicDisbursementsDisbursementIdPutRequest } from "sanka-sdk/models/operations";

let value:
  UpdatePublicDisbursementApiV2PublicDisbursementsDisbursementIdPutRequest = {
    disbursementId: "<id>",
    body: {},
  };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `disbursementId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `externalId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordUpdateRequest](../../models/object-record-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |