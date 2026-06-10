# SwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePostRequest

## Example Usage

```typescript
import {
  SwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePostRequest,
} from "sanka-sdk/models/operations";

let value:
  SwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePostRequest =
    {
      body: {
        workspaceId: "<id>",
      },
    };
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workspaceId`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `xSankaMCPSessionID`                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `xWorkspaceCode`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `body`                                                                             | [models.AuthWorkspaceSwitchRequest](../../models/auth-workspace-switch-request.md) | :heavy_check_mark:                                                                 | N/A                                                                                |