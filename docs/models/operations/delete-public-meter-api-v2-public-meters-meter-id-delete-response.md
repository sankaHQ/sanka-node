# DeletePublicMeterApiV2PublicMetersMeterIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicMeterApiV2PublicMetersMeterIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicMeterApiV2PublicMetersMeterIdDeleteResponse = {
  headers: {
    "key": [],
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

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `result`                                                                                                                                                  | [models.DeletePublicMeterApiV2PublicMetersMeterIdDelete200Envelope](../../models/delete-public-meter-api-v2-public-meters-meter-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |