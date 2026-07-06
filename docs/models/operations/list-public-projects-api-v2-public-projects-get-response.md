# ListPublicProjectsApiV2PublicProjectsGetResponse

## Example Usage

```typescript
import { ListPublicProjectsApiV2PublicProjectsGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicProjectsApiV2PublicProjectsGetResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      items: [
        {
          id: "<id>",
          projectId: "<id>",
        },
      ],
      page: 223301,
      pageSize: 7516,
      total: 261961,
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                 | Record<string, *string*[]>                                                                                                                | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `result`                                                                                                                                  | [models.ListPublicProjectsApiV2PublicProjectsGet200Envelope](../../models/list-public-projects-api-v2-public-projects-get200-envelope.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |