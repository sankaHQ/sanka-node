# GetAvailabilityResponse

## Example Usage

```typescript
import { GetAvailabilityResponse } from "sanka-sdk/models/operations";

let value: GetAvailabilityResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      enabled: false,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                          | Record<string, *string*[]>                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `result`                                                                                                                                                                                           | [models.DeveloperCloudCloudAvailabilityApiV2MigrateCloudRunsAvailabilityGet200Envelope](../../models/developer-cloud-cloud-availability-api-v2-migrate-cloud-runs-availability-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |