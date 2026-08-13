# GetPublicWorkforceOrganizationResponse

## Example Usage

```typescript
import { GetPublicWorkforceOrganizationResponse } from "sanka-sdk/models/operations";

let value: GetPublicWorkforceOrganizationResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    success: true,
    data: {},
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [models.GetPublicWorkforceOrganization200Envelope](../../models/get-public-workforce-organization200-envelope.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |