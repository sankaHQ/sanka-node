# UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatchRequest

## Example Usage

```typescript
import {
  UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatchRequest,
} from "sanka-sdk/models/operations";

let value:
  UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatchRequest =
    {
      programId: "<id>",
      meetingId: "<id>",
      body: {},
    };
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `programId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `meetingId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `workspaceId`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `xWorkspaceCode`                                                                                | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `body`                                                                                          | [models.FerryProgramMeetingUpdateRequest](../../models/ferry-program-meeting-update-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |