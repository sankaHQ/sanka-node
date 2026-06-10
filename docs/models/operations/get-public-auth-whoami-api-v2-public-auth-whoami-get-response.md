# GetPublicAuthWhoamiApiV2PublicAuthWhoamiGetResponse

## Example Usage

```typescript
import { GetPublicAuthWhoamiApiV2PublicAuthWhoamiGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicAuthWhoamiApiV2PublicAuthWhoamiGetResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    success: true,
    data: {
      userId: "<id>",
      authMode: "developer_api_token",
      principalKey: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                         | Record<string, *string*[]>                                                                                                                        | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |
| `result`                                                                                                                                          | [models.GetPublicAuthWhoamiApiV2PublicAuthWhoamiGet200Envelope](../../models/get-public-auth-whoami-api-v2-public-auth-whoami-get200-envelope.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |