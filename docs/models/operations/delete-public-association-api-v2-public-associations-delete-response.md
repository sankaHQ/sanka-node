# DeletePublicAssociationApiV2PublicAssociationsDeleteResponse

## Example Usage

```typescript
import { DeletePublicAssociationApiV2PublicAssociationsDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicAssociationApiV2PublicAssociationsDeleteResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {},
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                         | Record<string, *string*[]>                                                                                                                                        | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `result`                                                                                                                                                          | [models.DeletePublicAssociationApiV2PublicAssociationsDelete200Envelope](../../models/delete-public-association-api-v2-public-associations-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |