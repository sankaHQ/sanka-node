# ListPublicFerryProgramsApiV2PublicFerryProgramsGetResponse

## Example Usage

```typescript
import { ListPublicFerryProgramsApiV2PublicFerryProgramsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicFerryProgramsApiV2PublicFerryProgramsGetResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    success: true,
    data: {
      programs: [],
      count: 667962,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                       | Record<string, *string*[]>                                                                                                                                      | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `result`                                                                                                                                                        | [models.ListPublicFerryProgramsApiV2PublicFerryProgramsGet200Envelope](../../models/list-public-ferry-programs-api-v2-public-ferry-programs-get200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |