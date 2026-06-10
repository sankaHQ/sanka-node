# UpsertPublicLockRuleApiV2PublicLockRulesPostRequest

## Example Usage

```typescript
import { UpsertPublicLockRuleApiV2PublicLockRulesPostRequest } from "sanka-sdk/models/operations";

let value: UpsertPublicLockRuleApiV2PublicLockRulesPostRequest = {
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `workspaceId`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `xWorkspaceCode`                                                                  | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `body`                                                                            | [models.PublicLockRuleSaveRequest](../../models/public-lock-rule-save-request.md) | :heavy_check_mark:                                                                | N/A                                                                               |