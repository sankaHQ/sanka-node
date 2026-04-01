# ApiRoutersV1InventoriesPublicApiUpdatePublicInventoryRequest

## Example Usage

```typescript
import { ApiRoutersV1InventoriesPublicApiUpdatePublicInventoryRequest } from "sanka-sdk/models/operations";

let value: ApiRoutersV1InventoriesPublicApiUpdatePublicInventoryRequest = {
  inventoryId: "<id>",
  body: {
    externalId: "<id>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `inventoryId`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `body`                                                                    | [models.PublicInventoryRequest](../../models/public-inventory-request.md) | :heavy_check_mark:                                                        | N/A                                                                       |