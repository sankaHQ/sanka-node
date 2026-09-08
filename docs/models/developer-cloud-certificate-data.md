# DeveloperCloudCertificateData

## Example Usage

```typescript
import { DeveloperCloudCertificateData } from "sanka-sdk/models";

let value: DeveloperCloudCertificateData = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `certificate`                                                                                 | [models.DeveloperCloudSignedCertificate](../models/developer-cloud-signed-certificate.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revokedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `revocationReason`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |