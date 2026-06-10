# CreatePublicLocationApiV2PublicLocationsPostResponse

## Example Usage

```typescript
import { CreatePublicLocationApiV2PublicLocationsPostResponse } from "sanka-sdk/models/operations";

let value: CreatePublicLocationApiV2PublicLocationsPostResponse = {
  headers: {
    "key": [],
  },
  result: {
    success: true,
    data: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
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
| `result`                                                                                                                                          | [models.CreatePublicLocationApiV2PublicLocationsPost200Envelope](../../models/create-public-location-api-v2-public-locations-post200-envelope.md) | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |