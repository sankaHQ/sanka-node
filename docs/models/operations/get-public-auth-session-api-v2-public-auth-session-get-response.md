# GetPublicAuthSessionApiV2PublicAuthSessionGetResponse

## Example Usage

```typescript
import { GetPublicAuthSessionApiV2PublicAuthSessionGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicAuthSessionApiV2PublicAuthSessionGetResponse = {
  headers: {
    "key": [],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                             | Record<string, *string*[]>                                                                                                                            | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `result`                                                                                                                                              | [models.GetPublicAuthSessionApiV2PublicAuthSessionGet200Envelope](../../models/get-public-auth-session-api-v2-public-auth-session-get200-envelope.md) | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |