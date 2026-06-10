# GetPublicAuthWhoamiApiV2PublicAuthWhoamiGet200Envelope

## Example Usage

```typescript
import { GetPublicAuthWhoamiApiV2PublicAuthWhoamiGet200Envelope } from "sanka-sdk/models";

let value: GetPublicAuthWhoamiApiV2PublicAuthWhoamiGet200Envelope = {
  success: true,
  data: {
    userId: "<id>",
    authMode: "developer_api_token",
    principalKey: "<value>",
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
| `data`                                                                        | [models.PublicDeveloperWhoamiData](../models/public-developer-whoami-data.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `meta`                                                                        | [models.EnvelopeMeta](../models/envelope-meta.md)                             | :heavy_check_mark:                                                            | N/A                                                                           |