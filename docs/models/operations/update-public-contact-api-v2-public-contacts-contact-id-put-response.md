# UpdatePublicContactApiV2PublicContactsContactIdPutResponse

## Example Usage

```typescript
import { UpdatePublicContactApiV2PublicContactsContactIdPutResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicContactApiV2PublicContactsContactIdPutResponse = {
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
    },
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
| `result`                                                                                                                                                        | [models.UpdatePublicContactApiV2PublicContactsContactIdPut200Envelope](../../models/update-public-contact-api-v2-public-contacts-contact-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |