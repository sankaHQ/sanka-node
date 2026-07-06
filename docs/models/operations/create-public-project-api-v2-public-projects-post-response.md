# CreatePublicProjectApiV2PublicProjectsPostResponse

## Example Usage

```typescript
import { CreatePublicProjectApiV2PublicProjectsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicProjectApiV2PublicProjectsPostResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: {
      ok: true,
      status: "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                     | Record<string, *string*[]>                                                                                                                    | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `result`                                                                                                                                      | [models.CreatePublicProjectApiV2PublicProjectsPost200Envelope](../../models/create-public-project-api-v2-public-projects-post200-envelope.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |