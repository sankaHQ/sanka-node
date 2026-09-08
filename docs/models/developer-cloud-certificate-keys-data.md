# DeveloperCloudCertificateKeysData

## Example Usage

```typescript
import { DeveloperCloudCertificateKeysData } from "sanka-sdk/models";

let value: DeveloperCloudCertificateKeysData = {
  keys: [
    {
      keyId: "<id>",
      publicKeyBase64: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `issuer`                                                                                           | *"https://api-v2.sanka.com"*                                                                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `keys`                                                                                             | [models.DeveloperCloudCertificatePublicKey](../models/developer-cloud-certificate-public-key.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |