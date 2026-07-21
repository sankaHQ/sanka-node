# ListProviderActionsApiV2LookoutProviderActionsGetResponse

## Example Usage

```typescript
import { ListProviderActionsApiV2LookoutProviderActionsGetResponse } from "sanka-sdk/models/operations";

let value: ListProviderActionsApiV2LookoutProviderActionsGetResponse = {
  headers: {
    "key": [
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

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                    | Record<string, *string*[]>                                                                                                                                   | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `result`                                                                                                                                                     | [models.ListProviderActionsApiV2LookoutProviderActionsGet200Envelope](../../models/list-provider-actions-api-v2-lookout-provider-actions-get200-envelope.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |