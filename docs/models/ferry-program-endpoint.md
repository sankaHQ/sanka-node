# FerryProgramEndpoint

## Example Usage

```typescript
import { FerryProgramEndpoint } from "sanka-sdk/models";

let value: FerryProgramEndpoint = {
  id: "<id>",
  kind: "<value>",
  label: "<value>",
  role: "source",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | N/A                              |
| `kind`                           | *string*                         | :heavy_check_mark:               | N/A                              |
| `label`                          | *string*                         | :heavy_check_mark:               | N/A                              |
| `labelJa`                        | *string*                         | :heavy_minus_sign:               | N/A                              |
| `role`                           | [models.Role](../models/role.md) | :heavy_check_mark:               | N/A                              |
| `integrationSlug`                | *string*                         | :heavy_minus_sign:               | N/A                              |
| `channelId`                      | *string*                         | :heavy_minus_sign:               | N/A                              |
| `sourceType`                     | *string*                         | :heavy_minus_sign:               | N/A                              |
| `objectTypes`                    | *string*[]                       | :heavy_minus_sign:               | N/A                              |
| `metadata`                       | Record<string, *any*>            | :heavy_minus_sign:               | N/A                              |