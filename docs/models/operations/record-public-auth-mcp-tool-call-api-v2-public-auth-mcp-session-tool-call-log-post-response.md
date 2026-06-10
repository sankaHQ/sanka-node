# RecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPostResponse

## Example Usage

```typescript
import { RecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPostResponse } from "sanka-sdk/models/operations";

let value:
  RecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPostResponse =
    {
      headers: {
        "key": [
          "<value 1>",
        ],
        "key1": [],
        "key2": [],
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

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |
| `result`                                                                                                                                                                                                | [models.RecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPost200Envelope](../../models/record-public-auth-mcp-tool-call-api-v2-public-auth-mcp-session-tool-call-log-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |