# CompleteProviderActionApiV2LookoutProviderActionsActionIdCompletePostRequest

## Example Usage

```typescript
import { CompleteProviderActionApiV2LookoutProviderActionsActionIdCompletePostRequest } from "sanka-sdk/models/operations";

let value:
  CompleteProviderActionApiV2LookoutProviderActionsActionIdCompletePostRequest =
    {
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