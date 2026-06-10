# CreatePublicAssociationApiV2PublicAssociationsPost200Envelope

## Example Usage

```typescript
import { CreatePublicAssociationApiV2PublicAssociationsPost200Envelope } from "sanka-sdk/models";

let value: CreatePublicAssociationApiV2PublicAssociationsPost200Envelope = {
  success: true,
  data: {},
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `success`                                                                         | *true*                                                                            | :heavy_check_mark:                                                                | N/A                                                                               |
| `data`                                                                            | [models.AssociationEdgeMutationData](../models/association-edge-mutation-data.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `meta`                                                                            | [models.EnvelopeMeta](../models/envelope-meta.md)                                 | :heavy_check_mark:                                                                | N/A                                                                               |