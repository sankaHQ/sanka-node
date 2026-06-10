# RecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPostRequest

## Example Usage

```typescript
import { RecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPostRequest } from "sanka-sdk/models/operations";

let value:
  RecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPostRequest = {
    body: {
      toolName: "<value>",
    },
  };
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `workspaceId`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `xSankaMCPSessionID`                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `xWorkspaceCode`                                                          | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `body`                                                                    | [models.McpToolCallLogRequest](../../models/mcp-tool-call-log-request.md) | :heavy_check_mark:                                                        | N/A                                                                       |