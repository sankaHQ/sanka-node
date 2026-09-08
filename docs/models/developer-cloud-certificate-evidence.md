# DeveloperCloudCertificateEvidence

## Example Usage

```typescript
import { DeveloperCloudCertificateEvidence } from "sanka-sdk/models";

let value: DeveloperCloudCertificateEvidence = {
  candidateSha256: "<value>",
  planSha256: "<value>",
  dependencyLockSha256: "<value>",
  generatedTests: 294249,
  generatedChecksPassed: false,
  scenarios: [],
  declaredRoutes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  testedRoutes: [
    "<value 1>",
    "<value 2>",
  ],
  untestedRoutes: [],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `profile`                                                                                 | *"independent-http-replay-v1"*                                                            | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `candidateSha256`                                                                         | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `planSha256`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `dependencyLockSha256`                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `generatedTests`                                                                          | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `generatedChecksPassed`                                                                   | *boolean*                                                                                 | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `scenarios`                                                                               | [models.DeveloperCloudScenarioEvidence](../models/developer-cloud-scenario-evidence.md)[] | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `declaredRoutes`                                                                          | *string*[]                                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `testedRoutes`                                                                            | *string*[]                                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `untestedRoutes`                                                                          | *string*[]                                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |