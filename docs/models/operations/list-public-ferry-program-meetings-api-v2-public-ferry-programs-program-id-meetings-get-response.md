# ListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGetResponse

## Example Usage

```typescript
import {
  ListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGetResponse,
} from "sanka-sdk/models/operations";

let value:
  ListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGetResponse =
    {
      headers: {
        "key": [],
        "key1": [
          "<value 1>",
          "<value 2>",
        ],
      },
      result: {
        success: true,
        data: {
          meetings: [
            {
              id: "<id>",
              programId: "<id>",
              workspaceId: "<id>",
              title: "<value>",
            },
          ],
          count: 878815,
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                               | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                           | Record<string, *string*[]>                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                 |
| `result`                                                                                                                                                                                                            | [models.ListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet200Envelope](../../models/list-public-ferry-program-meetings-api-v2-public-ferry-programs-program-id-meetings-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                 |