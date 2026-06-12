# McpToolCallLogRequest

## Example Usage

```typescript
import { McpToolCallLogRequest } from "sanka-sdk/models";

let value: McpToolCallLogRequest = {
  toolName: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `toolName`            | *string*              | :heavy_check_mark:    | N/A                   |
| `toolTitle`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `resource`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `operation`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `success`             | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `durationMs`          | *number*              | :heavy_minus_sign:    | N/A                   |
| `clientName`          | *string*              | :heavy_minus_sign:    | N/A                   |
| `clientVersion`       | *string*              | :heavy_minus_sign:    | N/A                   |
| `sourceIpAddress`     | *string*              | :heavy_minus_sign:    | N/A                   |
| `sourceUserAgent`     | *string*              | :heavy_minus_sign:    | N/A                   |
| `sourceBrowser`       | *string*              | :heavy_minus_sign:    | N/A                   |
| `sourceOs`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `sourceDeviceType`    | *string*              | :heavy_minus_sign:    | N/A                   |
| `mcpProtocolVersion`  | *string*              | :heavy_minus_sign:    | N/A                   |
| `mcpServerName`       | *string*              | :heavy_minus_sign:    | N/A                   |
| `mcpServerVersion`    | *string*              | :heavy_minus_sign:    | N/A                   |
| `modelProvider`       | *string*              | :heavy_minus_sign:    | N/A                   |
| `modelName`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `resultSummary`       | *string*              | :heavy_minus_sign:    | N/A                   |
| `recordIds`           | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `error`               | *string*              | :heavy_minus_sign:    | N/A                   |