# PublicUpdateReportRequest

## Example Usage

```typescript
import { PublicUpdateReportRequest } from "sanka-sdk/models";

let value: PublicUpdateReportRequest = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `reportMetadata`                                                                               | [models.PublicUpdateReportMetadataRequest](../models/public-update-report-metadata-request.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `panels`                                                                                       | [models.PublicReportPanelRequest](../models/public-report-panel-request.md)[]                  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `createDefaultPanel`                                                                           | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |