# WorkflowListData

## Example Usage

```typescript
import { WorkflowListData } from "sanka-sdk/models";

let value: WorkflowListData = {
  total: 269148,
  page: 520852,
  pageSize: 756066,
  hasNextPage: true,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `items`                                                      | [models.WorkflowListItem](../models/workflow-list-item.md)[] | :heavy_minus_sign:                                           | N/A                                                          |
| `total`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `page`                                                       | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pageSize`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `hasNextPage`                                                | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `permission`                                                 | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `columns`                                                    | [models.WorkflowColumn](../models/workflow-column.md)[]      | :heavy_minus_sign:                                           | N/A                                                          |
| `classifications`                                            | Record<string, *string*>                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `message`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |