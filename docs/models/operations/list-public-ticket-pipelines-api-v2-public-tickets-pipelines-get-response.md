# ListPublicTicketPipelinesApiV2PublicTicketsPipelinesGetResponse

## Example Usage

```typescript
import { ListPublicTicketPipelinesApiV2PublicTicketsPipelinesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicTicketPipelinesApiV2PublicTicketsPipelinesGetResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
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

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                 | Record<string, *string*[]>                                                                                                                                                | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `result`                                                                                                                                                                  | [models.ListPublicTicketPipelinesApiV2PublicTicketsPipelinesGet200Envelope](../../models/list-public-ticket-pipelines-api-v2-public-tickets-pipelines-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |