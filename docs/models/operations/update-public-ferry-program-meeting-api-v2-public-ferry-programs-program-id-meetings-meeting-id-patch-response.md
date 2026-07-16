# UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatchResponse

## Example Usage

```typescript
import {
  UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatchResponse,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatchResponse =
    {
      headers: {},
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

| Field                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                                                                                     | Record<string, *string*[]>                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                           |
| `result`                                                                                                                                                                                                                                      | [models.UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch200Envelope](../../models/update-public-ferry-program-meeting-api-v2-public-ferry-programs-program-id-meetings-meeting-id-patch200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                           |