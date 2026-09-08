# DeveloperCloudListFleetsApiV2MigrateCloudFleetsGet200Envelope

## Example Usage

```typescript
import { DeveloperCloudListFleetsApiV2MigrateCloudFleetsGet200Envelope } from "sanka-sdk/models";

let value: DeveloperCloudListFleetsApiV2MigrateCloudFleetsGet200Envelope = {
  success: true,
  data: {
    fleets: [],
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `success`                                                                          | *true*                                                                             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [models.DeveloperCloudFleetListData](../models/developer-cloud-fleet-list-data.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `meta`                                                                             | [models.EnvelopeMeta](../models/envelope-meta.md)                                  | :heavy_check_mark:                                                                 | N/A                                                                                |