# ListPublicAssociationsApiV2PublicAssociationsGet200Envelope

## Example Usage

```typescript
import { ListPublicAssociationsApiV2PublicAssociationsGet200Envelope } from "sanka-sdk/models";

let value: ListPublicAssociationsApiV2PublicAssociationsGet200Envelope = {
  success: true,
  data: {
    recordRef: {
      objectType: "<value>",
      recordId: "<id>",
    },
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `success`                                                                     | *true*                                                                        | :heavy_check_mark:                                                            | N/A                                                                           |
| `data`                                                                        | [models.RecordAssociationListData](../models/record-association-list-data.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `meta`                                                                        | [models.EnvelopeMeta](../models/envelope-meta.md)                             | :heavy_check_mark:                                                            | N/A                                                                           |