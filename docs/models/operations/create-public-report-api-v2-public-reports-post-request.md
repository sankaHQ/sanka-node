# CreatePublicReportApiV2PublicReportsPostRequest

## Example Usage

```typescript
import { CreatePublicReportApiV2PublicReportsPostRequest } from "sanka-sdk/models/operations";

let value: CreatePublicReportApiV2PublicReportsPostRequest = {
  body: {
    name: "<value>",
    panelType: "<value>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `workspaceId`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `xWorkspaceCode`                                                        | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `body`                                                                  | [models.ReportMutationRequest](../../models/report-mutation-request.md) | :heavy_check_mark:                                                      | N/A                                                                     |