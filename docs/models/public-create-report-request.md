# PublicCreateReportRequest

## Example Usage

```typescript
import { PublicCreateReportRequest } from "sanka-sdk/models";

let value: PublicCreateReportRequest = {
  reportMetadata: {
    name: "<value>",
    reportType: {
      type: "<value>",
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `reportMetadata`                                                                  | [models.PublicReportMetadataRequest](../models/public-report-metadata-request.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `panels`                                                                          | [models.PublicReportPanelRequest](../models/public-report-panel-request.md)[]     | :heavy_minus_sign:                                                                | N/A                                                                               |
| `createDefaultPanel`                                                              | *boolean*                                                                         | :heavy_minus_sign:                                                                | N/A                                                                               |