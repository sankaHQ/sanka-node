# BulkUpdatePublicSubscriptionsApiV2PublicSubscriptionsBulkUpdatePostResponse

## Example Usage

```typescript
import { BulkUpdatePublicSubscriptionsApiV2PublicSubscriptionsBulkUpdatePostResponse } from "sanka-sdk/models/operations";

let value:
  BulkUpdatePublicSubscriptionsApiV2PublicSubscriptionsBulkUpdatePostResponse =
    {
      headers: {
        "key": [],
        "key1": [
          "<value 1>",
        ],
        "key2": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      result: {
        success: true,
        data: {
          operation: "edit",
          objectType: "<value>",
          count: 0,
          failedCount: 0,
          queued: false,
          message: "<value>",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `headers`                                                                                      | Record<string, *string*[]>                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `result`                                                                                       | *operations.BulkUpdatePublicSubscriptionsApiV2PublicSubscriptionsBulkUpdatePostResponseResult* | :heavy_check_mark:                                                                             | N/A                                                                                            |