# ListPublicObjectSchemasApiV2PublicObjectSchemasGetResponse

## Example Usage

```typescript
import { ListPublicObjectSchemasApiV2PublicObjectSchemasGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicObjectSchemasApiV2PublicObjectSchemasGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                      | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `result`                                                                                                                                                        | [models.ListPublicObjectSchemasApiV2PublicObjectSchemasGet200Envelope](../../models/list-public-object-schemas-api-v2-public-object-schemas-get200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |