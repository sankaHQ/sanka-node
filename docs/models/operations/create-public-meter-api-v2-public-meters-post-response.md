# CreatePublicMeterApiV2PublicMetersPostResponse

## Example Usage

```typescript
import { CreatePublicMeterApiV2PublicMetersPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicMeterApiV2PublicMetersPostResponse = {
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

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                             | Record<string, *string*[]>                                                                                                            | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `result`                                                                                                                              | [models.CreatePublicMeterApiV2PublicMetersPost200Envelope](../../models/create-public-meter-api-v2-public-meters-post200-envelope.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |