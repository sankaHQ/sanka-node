# DeletePublicTicketApiV2PublicTicketsTicketIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicTicketApiV2PublicTicketsTicketIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicTicketApiV2PublicTicketsTicketIdDeleteResponse = {
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
      "key1": "<value>",
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
| `result`                                                                                                                                                        | [models.DeletePublicTicketApiV2PublicTicketsTicketIdDelete200Envelope](../../models/delete-public-ticket-api-v2-public-tickets-ticket-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |