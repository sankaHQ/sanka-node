# UpdatePublicAbsenceApiV2PublicAbsencesAbsenceIdPutRequest

## Example Usage

```typescript
import { UpdatePublicAbsenceApiV2PublicAbsencesAbsenceIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicAbsenceApiV2PublicAbsencesAbsenceIdPutRequest = {
  absenceId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `absenceId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.ObjectRecordUpdateRequest](../../models/object-record-update-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |