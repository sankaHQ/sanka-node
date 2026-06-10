# PublicApprovalRuleSaveRequest

## Example Usage

```typescript
import { PublicApprovalRuleSaveRequest } from "sanka-sdk/models";

let value: PublicApprovalRuleSaveRequest = {
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
| `blockSave`            | *boolean*              | :heavy_minus_sign:     | N/A                    |
| `blockTargets`         | *string*[]             | :heavy_minus_sign:     | N/A                    |
| `approverUserIds`      | *string*[]             | :heavy_minus_sign:     | N/A                    |
| `workerScopeType`      | *string*               | :heavy_minus_sign:     | N/A                    |
| `workerIds`            | *string*[]             | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |