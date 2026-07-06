# PublicProjectDeleteData

## Example Usage

```typescript
import { PublicProjectDeleteData } from "sanka-sdk/models";

let value: PublicProjectDeleteData = {
  ok: false,
  status: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `ok`                    | *boolean*               | :heavy_check_mark:      | N/A                     |
| `status`                | *string*                | :heavy_check_mark:      | N/A                     |
| `id`                    | *string*                | :heavy_minus_sign:      | N/A                     |
| `projectId`             | *string*                | :heavy_minus_sign:      | N/A                     |
| `replacementProjectId`  | *string*                | :heavy_minus_sign:      | N/A                     |
| `clearedTaskCount`      | *number*                | :heavy_minus_sign:      | N/A                     |
| `reassignedTaskCount`   | *number*                | :heavy_minus_sign:      | N/A                     |
| `ctxId`                 | *string*                | :heavy_minus_sign:      | N/A                     |
| `advisories`            | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |