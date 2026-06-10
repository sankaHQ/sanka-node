# ListPublicDeliveryRulesApiV2PublicDeliveryRulesGetResponse

## Example Usage

```typescript
import { ListPublicDeliveryRulesApiV2PublicDeliveryRulesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicDeliveryRulesApiV2PublicDeliveryRulesGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                      | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `result`                                                                                                                                                        | [models.ListPublicDeliveryRulesApiV2PublicDeliveryRulesGet200Envelope](../../models/list-public-delivery-rules-api-v2-public-delivery-rules-get200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |