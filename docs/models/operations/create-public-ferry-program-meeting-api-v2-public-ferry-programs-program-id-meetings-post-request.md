# CreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPostRequest

## Example Usage

```typescript
import {
  CreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPostRequest,
} from "sanka-sdk/models/operations";

let value:
  CreatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPostRequest =
    {
      programId: "<id>",
      body: {
        title: "<value>",
      },
    };
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `programId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `workspaceId`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `xWorkspaceCode`                                                                                | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `body`                                                                                          | [models.FerryProgramMeetingCreateRequest](../../models/ferry-program-meeting-create-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |