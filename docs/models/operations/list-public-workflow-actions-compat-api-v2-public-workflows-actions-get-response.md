# ListPublicWorkflowActionsCompatApiV2PublicWorkflowsActionsGetResponse

## Example Usage

```typescript
import { ListPublicWorkflowActionsCompatApiV2PublicWorkflowsActionsGetResponse } from "sanka-sdk/models/operations";

let value:
  ListPublicWorkflowActionsCompatApiV2PublicWorkflowsActionsGetResponse = {
    headers: {
      "key": [],
      "key1": [
        "<value 1>",
        "<value 2>",
      ],
    },
    result: {
      success: true,
      data: {
        "key": "<value>",
        "key1": "<value>",
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                              | Record<string, *string*[]>                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `result`                                                                                                                                                                               | [models.ListPublicWorkflowActionsCompatApiV2PublicWorkflowsActionsGet200Envelope](../../models/list-public-workflow-actions-compat-api-v2-public-workflows-actions-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |