# DeveloperCloudRepairEvidence

## Example Usage

```typescript
import { DeveloperCloudRepairEvidence } from "sanka-sdk/models";

let value: DeveloperCloudRepairEvidence = {
  candidateSha256: "<value>",
  patchSha256: "<value>",
  targetGate: "test",
  beforePassed: false,
  afterPassed: false,
  regressionPassed: true,
  regressionTests: 387388,
  checksUnchanged: false,
  editScopeRespected: true,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `candidateSha256`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `patchSha256`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `targetGate`                                                                                                                   | [models.DeveloperCloudRepairEvidencePropertiesTargetGate](../models/developer-cloud-repair-evidence-properties-target-gate.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `beforePassed`                                                                                                                 | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `afterPassed`                                                                                                                  | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `regressionPassed`                                                                                                             | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `regressionTests`                                                                                                              | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `checksUnchanged`                                                                                                              | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `editScopeRespected`                                                                                                           | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |