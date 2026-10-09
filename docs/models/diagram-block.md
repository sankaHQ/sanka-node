# DiagramBlock

## Example Usage

```typescript
import { DiagramBlock } from "sanka-sdk/models";

let value: DiagramBlock = {
  type: "diagram",
  mermaid: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"diagram"*        | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_minus_sign: | N/A                |
| `mermaid`          | *string*           | :heavy_check_mark: | N/A                |
| `alt`              | *string*           | :heavy_minus_sign: | N/A                |
| `caption`          | *string*           | :heavy_minus_sign: | N/A                |