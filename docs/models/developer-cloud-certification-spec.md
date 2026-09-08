# DeveloperCloudCertificationSpec

## Example Usage

```typescript
import { DeveloperCloudCertificationSpec } from "sanka-sdk/models";

let value: DeveloperCloudCertificationSpec = {
  parentRunId: "60f21ecd-8c97-4d61-8836-e1d9499cb211",
  candidateSha256: "<value>",
  scenarios: [
    {
      id: "<id>",
      method: "PUT",
      path: "/opt/share",
    },
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `parentRunId`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `candidateSha256`                                                                 | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `scenarios`                                                                       | [models.DeveloperCloudHttpScenario](../models/developer-cloud-http-scenario.md)[] | :heavy_check_mark:                                                                | N/A                                                                               |