# DeveloperCloudScenarioEvidence

## Example Usage

```typescript
import { DeveloperCloudScenarioEvidence } from "sanka-sdk/models";

let value: DeveloperCloudScenarioEvidence = {
  id: "<id>",
  requestSha256: "<value>",
  routeKey: "<value>",
  source: {
    status: 263438,
    bodySha256: "<value>",
    bodyFormat: "json",
    contentType: "<value>",
  },
  candidate: {
    status: 24377,
    bodySha256: "<value>",
    bodyFormat: "bytes",
    contentType: "<value>",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `requestSha256`                                                                       | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `routeKey`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `source`                                                                              | [models.DeveloperCloudHttpObservation](../models/developer-cloud-http-observation.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `candidate`                                                                           | [models.DeveloperCloudHttpObservation](../models/developer-cloud-http-observation.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |