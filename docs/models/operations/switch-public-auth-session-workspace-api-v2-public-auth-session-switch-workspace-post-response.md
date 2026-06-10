# SwitchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePostResponse

## Example Usage

```typescript
import {
  SwitchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePostResponse,
} from "sanka-sdk/models/operations";

let value:
  SwitchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePostResponse =
    {
      headers: {
        "key": [],
        "key1": [],
        "key2": [
          "<value 1>",
          "<value 2>",
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

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                        | Record<string, *string*[]>                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |
| `result`                                                                                                                                                                                                         | [models.SwitchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePost200Envelope](../../models/switch-public-auth-session-workspace-api-v2-public-auth-session-switch-workspace-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                               | N/A                                                                                                                                                                                                              |