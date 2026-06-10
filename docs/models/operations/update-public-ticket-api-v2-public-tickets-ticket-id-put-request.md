# UpdatePublicTicketApiV2PublicTicketsTicketIdPutRequest

## Example Usage

```typescript
import { UpdatePublicTicketApiV2PublicTicketsTicketIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicTicketApiV2PublicTicketsTicketIdPutRequest = {
  ticketId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `ticketId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `externalId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordUpdateRequest](../../models/object-record-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |