# DeveloperCloudCertificatePayload

## Example Usage

```typescript
import { DeveloperCloudCertificatePayload } from "sanka-sdk/models";

let value: DeveloperCloudCertificatePayload = {
  certificateId: "6041210f-4151-4ae1-a66d-2a1ea94df736",
  runId: "51e92018-7edf-45e6-8d03-7163e069d80a",
  workspaceId: "30604c5a-351d-465f-af5d-8166eba6642f",
  parentRunId: "0ba3f354-0e4b-4ff8-8860-0a0d10f95447",
  inputSha256: "<value>",
  sourceSha256: "<value>",
  runnerImage: "<value>",
  extensionSha256: "<value>",
  issuedAt: new Date("2026-02-23T11:47:07.840Z"),
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
  limitations: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `schemaVersion`                                                                               | *"developer-certificate-v1"*                                                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `issuer`                                                                                      | *"https://api-v2.sanka.com"*                                                                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `certificateId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parentRunId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inputSha256`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceSha256`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceRevision`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `runnerImage`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `extensionSha256`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `issuedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evidence`                                                                                    | [models.DeveloperCloudCertificateEvidence](../models/developer-cloud-certificate-evidence.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limitations`                                                                                 | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |