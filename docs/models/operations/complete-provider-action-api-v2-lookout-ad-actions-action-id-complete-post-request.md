# CompleteProviderActionApiV2LookoutAdActionsActionIdCompletePostRequest

## Example Usage

```typescript
import { CompleteProviderActionApiV2LookoutAdActionsActionIdCompletePostRequest } from "sanka-sdk/models/operations";

let value:
  CompleteProviderActionApiV2LookoutAdActionsActionIdCompletePostRequest = {
    actionId: "<id>",
    body: {
      status: "succeeded",
    },
  };
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `actionId`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `workspaceId`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `xWorkspaceCode`                                                                                        | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `body`                                                                                                  | [models.LookoutProviderActionCompleteRequest](../../models/lookout-provider-action-complete-request.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |