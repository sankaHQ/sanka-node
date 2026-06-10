# GetPublicLocationApiV2PublicLocationsLocationIdGetResponse

## Example Usage

```typescript
import { GetPublicLocationApiV2PublicLocationsLocationIdGetResponse } from "sanka-sdk/models/operations";

let value: GetPublicLocationApiV2PublicLocationsLocationIdGetResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      id: "<id>",
      recordId: "<id>",
      objectType: "<value>",
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
| `result`                                                                                                                                                        | [models.GetPublicLocationApiV2PublicLocationsLocationIdGet200Envelope](../../models/get-public-location-api-v2-public-locations-location-id-get200-envelope.md) | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |