# DeveloperCloudRepairSpec

## Example Usage

```typescript
import { DeveloperCloudRepairSpec } from "sanka-sdk/models";

let value: DeveloperCloudRepairSpec = {
  parentRunId: "5f8472c4-e14b-4cdb-b5a0-112e30ad8c83",
  candidateSha256: "<value>",
  targetGate: "test",
  allowedPaths: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `parentRunId`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `candidateSha256`                                                                                                      | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `targetGate`                                                                                                           | [models.DeveloperCloudRepairSpecPropertiesTargetGate](../models/developer-cloud-repair-spec-properties-target-gate.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `allowedPaths`                                                                                                         | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `modelPolicy`                                                                                                          | *"bounded-patch-v1"*                                                                                                   | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `maxAttempts`                                                                                                          | *1*                                                                                                                    | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |