# PresentationReplaceRequest

## Example Usage

```typescript
import { PresentationReplaceRequest } from "sanka-sdk/models";

let value: PresentationReplaceRequest = {
  expectedRevision: 728405,
  deck: {},
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `expectedRevision`                                                                                                                | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `title`                                                                                                                           | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |
| `deck`                                                                                                                            | Record<string, *any*>                                                                                                             | :heavy_check_mark:                                                                                                                | A `sanka.deck/v1` deck. The presentations catalog (`GET …/presentations/catalog`) publishes its JSON Schema, limits and guidance. |