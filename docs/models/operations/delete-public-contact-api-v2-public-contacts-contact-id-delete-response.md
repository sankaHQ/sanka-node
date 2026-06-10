# DeletePublicContactApiV2PublicContactsContactIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicContactApiV2PublicContactsContactIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicContactApiV2PublicContactsContactIdDeleteResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `result`                                                                                                                                                              | [models.DeletePublicContactApiV2PublicContactsContactIdDelete200Envelope](../../models/delete-public-contact-api-v2-public-contacts-contact-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |