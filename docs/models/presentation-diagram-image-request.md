# PresentationDiagramImageRequest

## Example Usage

```typescript
import { PresentationDiagramImageRequest } from "sanka-sdk/models";

let value: PresentationDiagramImageRequest = {
  diagramId: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `diagramId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | A Sanka diagram in the same workspace; its latest revision is stored. |
| `alt`                                                                 | *string*                                                              | :heavy_minus_sign:                                                    | Defaults to the diagram's name.                                       |