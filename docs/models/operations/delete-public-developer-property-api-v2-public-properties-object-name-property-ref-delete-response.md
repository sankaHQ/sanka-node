# DeletePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefDeleteResponse

## Example Usage

```typescript
import {
  DeletePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefDeleteResponse,
} from "sanka-sdk/models/operations";

let value:
  DeletePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefDeleteResponse =
    {
      headers: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
        "key1": [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        "key2": [
          "<value 1>",
        ],
      },
      result: {
        success: true,
        data: {
          "key": "<value>",
        },
        meta: {
          ctxId: "<id>",
        },
      },
    };
```

## Fields

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                                                                                                | Record<string, *string*[]>                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |
| `result`                                                                                                                                                                                                                 | [models.DeletePublicDeveloperPropertyApiV2PublicPropertiesObjectNamePropertyRefDelete200Envelope](../../models/delete-public-developer-property-api-v2-public-properties-object-name-property-ref-delete200-envelope.md) | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |