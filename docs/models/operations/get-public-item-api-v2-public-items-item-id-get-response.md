# GetPublicItemApiV2PublicItemsItemIdGetResponse

## Example Usage

```typescript
import { GetPublicItemApiV2PublicItemsItemIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicItemApiV2PublicItemsItemIdGetResponse = {
  headers: {
    "key": [],
  },
  result: {
    success: true,
    data: {
      id: "<id>",
      recordId: "<id>",
      objectType: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                               | Record<string, *string*[]>                                                                                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `result`                                                                                                                                | [models.GetPublicItemApiV2PublicItemsItemIdGet200Envelope](../../models/get-public-item-api-v2-public-items-item-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |