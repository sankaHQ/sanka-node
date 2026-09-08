# RevokeCertificateResponse

## Example Usage

```typescript
import { RevokeCertificateResponse } from "sanka-sdk/models/operations";

let value: RevokeCertificateResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [],
  },
  result: {
    success: true,
    data: {
      certificate: {
        keyId: "<id>",
        payload: {
          certificateId: "7ccf2247-7aee-4eec-8dff-4a95f1971762",
          runId: "9be6e19e-98e5-4bfb-8a81-bbd8e75589f1",
          workspaceId: "6ae863f5-d8dc-4eed-890b-8a480f5ec2b2",
          parentRunId: "1ab6d6e0-9b48-4814-b476-80296e5ed8cb",
          inputSha256: "<value>",
          sourceSha256: "<value>",
          runnerImage: "<value>",
          extensionSha256: "<value>",
          issuedAt: new Date("2026-08-25T21:09:09.542Z"),
          evidence: {
            candidateSha256: "<value>",
            planSha256: "<value>",
            dependencyLockSha256: "<value>",
            generatedTests: 999509,
            generatedChecksPassed: true,
            scenarios: [
              {
                id: "<id>",
                requestSha256: "<value>",
                routeKey: "<value>",
                source: {
                  status: 263438,
                  bodySha256: "<value>",
                  bodyFormat: "json",
                  contentType: "<value>",
                },
                candidate: {
                  status: 24377,
                  bodySha256: "<value>",
                  bodyFormat: "bytes",
                  contentType: "<value>",
                },
              },
            ],
            declaredRoutes: [],
            testedRoutes: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
            untestedRoutes: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
          },
          limitations: [
            "<value 1>",
          ],
        },
        signatureBase64: "<value>",
      },
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                              | Record<string, *string*[]>                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |
| `result`                                                                                                                                                                                                                               | [models.DeveloperCloudRevokeCloudCertificateApiV2MigrateCloudRunsRunIdCertificateRevokePost200Envelope](../../models/developer-cloud-revoke-cloud-certificate-api-v2-migrate-cloud-runs-run-id-certificate-revoke-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                    |