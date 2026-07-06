# DeletePublicProjectApiV2PublicProjectsProjectIdDeleteResponse

## Example Usage

```typescript
import { DeletePublicProjectApiV2PublicProjectsProjectIdDeleteResponse } from "sanka-sdk/models/operations";

let value: DeletePublicProjectApiV2PublicProjectsProjectIdDeleteResponse = {
  headers: {
    "key": [
      "<value 1>",
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

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                                             | Record<string, *string*[]>                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `result`                                                                                                                                                              | [models.DeletePublicProjectApiV2PublicProjectsProjectIdDelete200Envelope](../../models/delete-public-project-api-v2-public-projects-project-id-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |