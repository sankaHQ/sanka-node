# ListCertificateKeysResponse

## Example Usage

```typescript
import { ListCertificateKeysResponse } from "sanka-sdk/models/operations";

let value: ListCertificateKeysResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      keys: [],
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                        | Record<string, *string*[]>                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `result`                                                                                                                                                                                                         | [models.DeveloperCloudCloudCertificateKeysApiV2MigrateCloudRunsCertificateKeysGet200Envelope](../../models/developer-cloud-cloud-certificate-keys-api-v2-migrate-cloud-runs-certificate-keys-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |