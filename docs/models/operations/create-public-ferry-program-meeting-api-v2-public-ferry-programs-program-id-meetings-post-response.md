# CreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPostResponse

## Example Usage

```typescript
import {
  CreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPostResponse,
} from "sanka-sdk/models/operations";

let value:
  CreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPostResponse =
    {
      headers: {
        "key": [],
        "key1": [
          "<value 1>",
        ],
      },
      result: {
        success: true,
        data: {
          id: "<id>",
          programId: "<id>",
          workspaceId: "<id>",
          title: "<value>",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                               | Record<string, *string*[]>                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                     |
| `result`                                                                                                                                                                                                                | [models.CreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPost200Envelope](../../models/create-public-ferry-program-meeting-api-v2-public-ferry-programs-program-id-meetings-post200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                     |