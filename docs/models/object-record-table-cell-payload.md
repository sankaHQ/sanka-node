# ObjectRecordTableCellPayload

## Example Usage

```typescript
import { ObjectRecordTableCellPayload } from "sanka-sdk/models";

let value: ObjectRecordTableCellPayload = {
  cellType: "<value>",
  rendererType: "<value>",
  fieldId: "<id>",
  propertyKey: "<value>",
  source: "<value>",
  propertyType: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `cellType`              | *string*                | :heavy_check_mark:      | N/A                     |
| `rendererType`          | *string*                | :heavy_check_mark:      | N/A                     |
| `fieldId`               | *string*                | :heavy_check_mark:      | N/A                     |
| `propertyKey`           | *string*                | :heavy_check_mark:      | N/A                     |
| `source`                | *string*                | :heavy_check_mark:      | N/A                     |
| `propertyType`          | *string*                | :heavy_check_mark:      | N/A                     |
| `customPropertyType`    | *string*                | :heavy_minus_sign:      | N/A                     |
| `rawValue`              | *any*                   | :heavy_minus_sign:      | N/A                     |
| `display`               | *string*                | :heavy_minus_sign:      | N/A                     |
| `label`                 | *string*                | :heavy_minus_sign:      | N/A                     |
| `values`                | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |
| `files`                 | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |
| `images`                | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |
| `count`                 | *number*                | :heavy_minus_sign:      | N/A                     |
| `multiple`              | *boolean*               | :heavy_minus_sign:      | N/A                     |
| `empty`                 | *boolean*               | :heavy_minus_sign:      | N/A                     |
| `showBadge`             | *boolean*               | :heavy_minus_sign:      | N/A                     |
| `badgeColor`            | *string*                | :heavy_minus_sign:      | N/A                     |
| `color`                 | *string*                | :heavy_minus_sign:      | N/A                     |
| `meta`                  | Record<string, *any*>   | :heavy_minus_sign:      | N/A                     |