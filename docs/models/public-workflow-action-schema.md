# PublicWorkflowActionSchema

## Example Usage

```typescript
import { PublicWorkflowActionSchema } from "sanka-sdk/models";

let value: PublicWorkflowActionSchema = {
  actionUid: "<id>",
  isTrigger: true,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `actionUid`           | *string*              | :heavy_check_mark:    | N/A                   |
| `actionSlug`          | *string*              | :heavy_minus_sign:    | N/A                   |
| `title`               | *string*              | :heavy_minus_sign:    | N/A                   |
| `titleJa`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `isTrigger`           | *boolean*             | :heavy_check_mark:    | N/A                   |
| `triggerType`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `inputFormat`         | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `outputFormat`        | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `requiredConditions`  | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |