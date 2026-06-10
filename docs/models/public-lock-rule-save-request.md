# PublicLockRuleSaveRequest

## Example Usage

```typescript
import { PublicLockRuleSaveRequest } from "sanka-sdk/models";

let value: PublicLockRuleSaveRequest = {
  name: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `object`               | *string*               | :heavy_minus_sign:     | N/A                    |
| `ruleId`               | *string*               | :heavy_minus_sign:     | N/A                    |
| `name`                 | *string*               | :heavy_check_mark:     | N/A                    |
| `description`          | *string*               | :heavy_minus_sign:     | N/A                    |
| `isActive`             | *boolean*              | :heavy_minus_sign:     | N/A                    |
| `order`                | *number*               | :heavy_minus_sign:     | N/A                    |
| `conditions`           | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `language`             | *string*               | :heavy_minus_sign:     | N/A                    |
| `lockScope`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `lockConfig`           | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |