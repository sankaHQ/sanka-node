# ListPublicOverdueInvoicesApiV2PublicInvoicesOverdueGetResponse

## Example Usage

```typescript
import { ListPublicOverdueInvoicesApiV2PublicInvoicesOverdueGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicOverdueInvoicesApiV2PublicInvoicesOverdueGetResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
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

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                              | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `result`                                                                                                                                                                | [models.ListPublicOverdueInvoicesApiV2PublicInvoicesOverdueGet200Envelope](../../models/list-public-overdue-invoices-api-v2-public-invoices-overdue-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |