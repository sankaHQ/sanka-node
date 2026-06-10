# RevokePublicAuthSessionApiV2PublicAuthSessionRevokePostResponse

## Example Usage

```typescript
import { RevokePublicAuthSessionApiV2PublicAuthSessionRevokePostResponse } from "sanka-sdk/models/operations";

let value: RevokePublicAuthSessionApiV2PublicAuthSessionRevokePostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                  | Record<string, *string*[]>                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `result`                                                                                                                                                                   | [models.RevokePublicAuthSessionApiV2PublicAuthSessionRevokePost200Envelope](../../models/revoke-public-auth-session-api-v2-public-auth-session-revoke-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |