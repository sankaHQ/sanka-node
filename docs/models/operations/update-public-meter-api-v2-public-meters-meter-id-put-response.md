# UpdatePublicMeterApiV2PublicMetersMeterIdPutResponse

## Example Usage

```typescript
import { UpdatePublicMeterApiV2PublicMetersMeterIdPutResponse } from "sanka-sdk/models/operations";

let value: UpdatePublicMeterApiV2PublicMetersMeterIdPutResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
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

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                           | Record<string, *string*[]>                                                                                                                          | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `result`                                                                                                                                            | [models.UpdatePublicMeterApiV2PublicMetersMeterIdPut200Envelope](../../models/update-public-meter-api-v2-public-meters-meter-id-put200-envelope.md) | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |