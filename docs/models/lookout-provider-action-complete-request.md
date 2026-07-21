# LookoutProviderActionCompleteRequest

## Example Usage

```typescript
import { LookoutProviderActionCompleteRequest } from "sanka-sdk/models";

let value: LookoutProviderActionCompleteRequest = {
  status: "succeeded",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                          | [models.LookoutProviderActionCompleteRequestStatus](../models/lookout-provider-action-complete-request-status.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `providerResponse`                                                                                                | Record<string, *any*>                                                                                             | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `error`                                                                                                           | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |