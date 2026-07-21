# CompleteProviderActionApiV2LookoutAdActionsActionIdCompletePostResponse

## Example Usage

```typescript
import { CompleteProviderActionApiV2LookoutAdActionsActionIdCompletePostResponse } from "sanka-sdk/models/operations";

let value:
  CompleteProviderActionApiV2LookoutAdActionsActionIdCompletePostResponse = {
    headers: {
      "key": [
        "<value 1>",
      ],
      "key1": [
        "<value 1>",
      ],
      "key2": [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    result: {
      success: true,
      data: {
        id: "<id>",
        workspaceId: "<id>",
        runId: "<id>",
        provider: "google_ads",
        actionSlug: "<value>",
        status: "succeeded",
        createdAt: new Date("2025-10-16T14:28:47.462Z"),
        updatedAt: new Date("2026-02-13T17:51:16.296Z"),
      },
      meta: {
        ctxId: "<id>",
      },
    },
  };
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                   | Record<string, *string*[]>                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                          | N/A                                                                                                                                                                                         |
| `result`                                                                                                                                                                                    | [models.CompleteProviderActionApiV2LookoutAdActionsActionIdCompletePost200Envelope](../../models/complete-provider-action-api-v2-lookout-ad-actions-action-id-complete-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                          | N/A                                                                                                                                                                                         |