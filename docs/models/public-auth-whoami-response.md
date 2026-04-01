# PublicAuthWhoamiResponse

## Example Usage

```typescript
import { PublicAuthWhoamiResponse } from "sanka-sdk/models";

let value: PublicAuthWhoamiResponse = {
  data: {
    userId: "<id>",
    authMode: "<value>",
    principalKey: "<value>",
  },
  message: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [models.PublicAuthWhoamiPayload](../models/public-auth-whoami-payload.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `message`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `ctxId`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |