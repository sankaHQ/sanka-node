# RevokeCertificateRequest

## Example Usage

```typescript
import { RevokeCertificateRequest } from "sanka-sdk/models/operations";

let value: RevokeCertificateRequest = {
  runId: "260e657a-5beb-4b90-828a-0022af165465",
  body: {
    reason: "<value>",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `runId`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `workspaceId`                                                                                               | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `xWorkspaceCode`                                                                                            | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `body`                                                                                                      | [models.DeveloperCloudCertificateRevokeRequest](../../models/developer-cloud-certificate-revoke-request.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |