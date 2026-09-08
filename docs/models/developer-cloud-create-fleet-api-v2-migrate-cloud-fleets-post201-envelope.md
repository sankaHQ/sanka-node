# DeveloperCloudCreateFleetApiV2MigrateCloudFleetsPost201Envelope

## Example Usage

```typescript
import { DeveloperCloudCreateFleetApiV2MigrateCloudFleetsPost201Envelope } from "sanka-sdk/models";

let value: DeveloperCloudCreateFleetApiV2MigrateCloudFleetsPost201Envelope = {
  success: true,
  data: {
    id: "f56e9186-e3af-4c35-a580-6e59543ec3fc",
    workspaceId: "0ecf985e-9bdc-4425-924f-730761171bac",
    request: {
      items: [],
      maxCredits: 346046,
      concurrency: 304293,
    },
    inputSha256: "<value>",
    status: "partial",
    createdAt: new Date("2026-07-11T23:26:58.967Z"),
    expiresAt: new Date("2026-11-07T02:44:15.445Z"),
    items: [],
    heldCredits: 157926,
    computeCredits: 409383,
    premiumCredits: 882752,
    releasedCredits: 233075,
    outstandingCredits: 970488,
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *true*                                                                    | :heavy_check_mark:                                                        | N/A                                                                       |
| `data`                                                                    | [models.DeveloperCloudFleetData](../models/developer-cloud-fleet-data.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `meta`                                                                    | [models.EnvelopeMeta](../models/envelope-meta.md)                         | :heavy_check_mark:                                                        | N/A                                                                       |