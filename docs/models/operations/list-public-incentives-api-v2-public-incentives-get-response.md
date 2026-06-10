# ListPublicIncentivesApiV2PublicIncentivesGetResponse

## Example Usage

```typescript
import { ListPublicIncentivesApiV2PublicIncentivesGetResponse } from "sanka-sdk/models/operations";

let value: ListPublicIncentivesApiV2PublicIncentivesGetResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
    },
    meta: {
      ctxId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                         | Record<string, *string*[]>                                                                                                                        | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |
| `result`                                                                                                                                          | [models.ListPublicIncentivesApiV2PublicIncentivesGet200Envelope](../../models/list-public-incentives-api-v2-public-incentives-get200-envelope.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |