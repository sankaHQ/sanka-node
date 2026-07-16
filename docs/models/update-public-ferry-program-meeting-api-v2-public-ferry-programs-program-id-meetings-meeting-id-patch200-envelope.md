# UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch200Envelope

## Example Usage

```typescript
import {
  UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch200Envelope,
} from "sanka-sdk/models";

let value:
  UpdatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch200Envelope =
    {
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
    };
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success`                                                                 | *true*                                                                    | :heavy_check_mark:                                                        | N/A                                                                       |
| `data`                                                                    | [models.FerryProgramMeetingData](../models/ferry-program-meeting-data.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `meta`                                                                    | [models.EnvelopeMeta](../models/envelope-meta.md)                         | :heavy_check_mark:                                                        | N/A                                                                       |