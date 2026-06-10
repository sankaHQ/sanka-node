# GetPublicTicketApiV2PublicTicketsTicketIdGetResponse

## Example Usage

```typescript
import { GetPublicTicketApiV2PublicTicketsTicketIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicTicketApiV2PublicTicketsTicketIdGetResponse = {
  headers: {},
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

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                           | Record<string, *string*[]>                                                                                                                          | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `result`                                                                                                                                            | [models.GetPublicTicketApiV2PublicTicketsTicketIdGet200Envelope](../../models/get-public-ticket-api-v2-public-tickets-ticket-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |