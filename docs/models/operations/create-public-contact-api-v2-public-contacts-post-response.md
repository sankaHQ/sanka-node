# CreatePublicContactApiV2PublicContactsPostResponse

## Example Usage

```typescript
import { CreatePublicContactApiV2PublicContactsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicContactApiV2PublicContactsPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
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
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.CreatePublicContactApiV2PublicContactsPost200Envelope](../../models/create-public-contact-api-v2-public-contacts-post200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |