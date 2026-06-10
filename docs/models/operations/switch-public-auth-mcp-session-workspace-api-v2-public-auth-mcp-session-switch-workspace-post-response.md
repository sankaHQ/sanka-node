# SwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePostResponse

## Example Usage

```typescript
import {
  SwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePostResponse,
} from "sanka-sdk/models/operations";

let value:
  SwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePostResponse =
    {
      headers: {
        "key": [],
        "key1": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
      result: {
        success: true,
        data: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                                                      | Record<string, *string*[]>                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |
| `result`                                                                                                                                                                                                                       | [models.SwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePost200Envelope](../../models/switch-public-auth-mcp-session-workspace-api-v2-public-auth-mcp-session-switch-workspace-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                            |