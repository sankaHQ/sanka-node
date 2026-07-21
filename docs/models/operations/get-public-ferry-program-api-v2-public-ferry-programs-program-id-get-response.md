# GetPublicFerryProgramApiV2PublicFerryProgramsProgramIdGetResponse

## Example Usage

```typescript
import { GetPublicFerryProgramApiV2PublicFerryProgramsProgramIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicFerryProgramApiV2PublicFerryProgramsProgramIdGetResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      id: "<id>",
      workspaceId: "<id>",
      templateSlug: "<value>",
      status: "completed",
      name: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |
| `result`                                                                                                                                                                        | [models.GetPublicFerryProgramApiV2PublicFerryProgramsProgramIdGet200Envelope](../../models/get-public-ferry-program-api-v2-public-ferry-programs-program-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |