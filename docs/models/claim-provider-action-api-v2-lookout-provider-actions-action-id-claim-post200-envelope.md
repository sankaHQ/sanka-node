# ClaimProviderActionApiV2LookoutProviderActionsActionIdClaimPost200Envelope

## Example Usage

```typescript
import { ClaimProviderActionApiV2LookoutProviderActionsActionIdClaimPost200Envelope } from "sanka-sdk/models";

let value:
  ClaimProviderActionApiV2LookoutProviderActionsActionIdClaimPost200Envelope = {
    success: true,
    data: {
      id: "<id>",
      workspaceId: "<id>",
      runId: "<id>",
      provider: "google_ads",
      actionSlug: "<value>",
      status: "succeeded",
      createdAt: new Date("2025-10-16T14:28:47.462Z"),
      updatedAt: new Date("2026-02-13T17:51:16.296Z"),
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
| `data`                                                                        | [models.LookoutProviderActionData](../models/lookout-provider-action-data.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `meta`                                                                        | [models.EnvelopeMeta](../models/envelope-meta.md)                             | :heavy_check_mark:                                                            | N/A                                                                           |