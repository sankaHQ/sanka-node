# ScoreRecordApiV2ScorePostRequest

## Example Usage

```typescript
import { ScoreRecordApiV2ScorePostRequest } from "sanka-sdk/models/operations";

let value: ScoreRecordApiV2ScorePostRequest = {
  body: {
    objectType: "<value>",
    recordId: "f090e622-271c-4389-b99c-91cb62587521",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `workspaceId`                                        | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `xWorkspaceCode`                                     | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `body`                                               | [models.ScoreRequest](../../models/score-request.md) | :heavy_check_mark:                                   | N/A                                                  |