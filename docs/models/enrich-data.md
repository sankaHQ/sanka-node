# EnrichData

## Example Usage

```typescript
import { EnrichData } from "sanka-sdk/models";

let value: EnrichData = {
  runId: "<id>",
  pipelineVersion: "<value>",
  requestHash: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `companyId`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `seedExternalId`       | *string*               | :heavy_minus_sign:     | N/A                    |
| `runId`                | *string*               | :heavy_check_mark:     | N/A                    |
| `pipelineVersion`      | *string*               | :heavy_check_mark:     | N/A                    |
| `requestHash`          | *string*               | :heavy_check_mark:     | N/A                    |
| `updatedBuiltinFields` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `updatedCustomFields`  | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `proposedFields`       | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `fieldEvidence`        | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `skippedFields`        | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `providerMeta`         | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |