# GetPublicMeterApiV2PublicMetersMeterIdGetResponse

## Example Usage

```typescript
import { GetPublicMeterApiV2PublicMetersMeterIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicMeterApiV2PublicMetersMeterIdGetResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.GetPublicMeterApiV2PublicMetersMeterIdGet200Envelope](../../models/get-public-meter-api-v2-public-meters-meter-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |