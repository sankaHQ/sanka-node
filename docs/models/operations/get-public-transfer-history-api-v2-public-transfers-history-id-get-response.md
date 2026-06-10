# GetPublicTransferHistoryApiV2PublicTransfersHistoryIdGetResponse

## Example Usage

```typescript
import { GetPublicTransferHistoryApiV2PublicTransfersHistoryIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicTransferHistoryApiV2PublicTransfersHistoryIdGetResponse = {
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

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                    | Record<string, *string*[]>                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `result`                                                                                                                                                                     | [models.GetPublicTransferHistoryApiV2PublicTransfersHistoryIdGet200Envelope](../../models/get-public-transfer-history-api-v2-public-transfers-history-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |