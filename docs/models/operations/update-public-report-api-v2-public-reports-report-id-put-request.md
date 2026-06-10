# UpdatePublicReportApiV2PublicReportsReportIdPutRequest

## Example Usage

```typescript
import { UpdatePublicReportApiV2PublicReportsReportIdPutRequest } from "sanka-sdk/models/operations";

let value: UpdatePublicReportApiV2PublicReportsReportIdPutRequest = {
  reportId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `reportId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `workspaceId`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `xWorkspaceCode`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `body`                                                                               | [models.ReportUpdateMutationRequest](../../models/report-update-mutation-request.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |