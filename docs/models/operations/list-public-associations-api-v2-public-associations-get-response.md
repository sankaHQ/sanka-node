# ListPublicAssociationsApiV2PublicAssociationsGetResponse

## Example Usage

```typescript
import { ListPublicAssociationsApiV2PublicAssociationsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicAssociationsApiV2PublicAssociationsGetResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      recordRef: {
        objectType: "<value>",
        recordId: "<id>",
      },
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `result`                                                                                                                                                  | [models.ListPublicAssociationsApiV2PublicAssociationsGet200Envelope](../../models/list-public-associations-api-v2-public-associations-get200-envelope.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |