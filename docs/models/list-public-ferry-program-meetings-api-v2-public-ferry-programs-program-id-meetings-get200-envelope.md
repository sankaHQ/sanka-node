# ListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet200Envelope

## Example Usage

```typescript
import {
  ListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet200Envelope,
} from "sanka-sdk/models";

let value:
  ListPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet200Envelope =
    {
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
    };
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `success`                                                                          | *true*                                                                             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [models.FerryProgramMeetingListData](../models/ferry-program-meeting-list-data.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `meta`                                                                             | [models.EnvelopeMeta](../models/envelope-meta.md)                                  | :heavy_check_mark:                                                                 | N/A                                                                                |