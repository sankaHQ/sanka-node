# ApprovalRequestCreateRequest

## Example Usage

```typescript
import { ApprovalRequestCreateRequest } from "sanka-sdk/models";

let value: ApprovalRequestCreateRequest = {
  objectType: "<value>",
  recordId: "<id>",
  approverUserIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `objectType`       | *string*           | :heavy_check_mark: | N/A                |
| `recordId`         | *string*           | :heavy_check_mark: | N/A                |
| `approverUserIds`  | *string*[]         | :heavy_check_mark: | N/A                |
| `title`            | *string*           | :heavy_minus_sign: | N/A                |
| `description`      | *string*           | :heavy_minus_sign: | N/A                |
| `blockTargets`     | *string*[]         | :heavy_minus_sign: | N/A                |
| `requestedAction`  | *string*           | :heavy_minus_sign: | N/A                |
| `idempotencyKey`   | *string*           | :heavy_minus_sign: | N/A                |