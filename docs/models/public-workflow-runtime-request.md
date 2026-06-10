# PublicWorkflowRuntimeRequest

## Example Usage

```typescript
import { PublicWorkflowRuntimeRequest } from "sanka-sdk/models";

let value: PublicWorkflowRuntimeRequest = {
  workflowType: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `workflowType`        | *string*              | :heavy_check_mark:    | N/A                   |
| `sourceRecord`        | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `options`             | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `idempotencyKey`      | *string*              | :heavy_minus_sign:    | N/A                   |
| `language`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `lang`                | *string*              | :heavy_minus_sign:    | N/A                   |