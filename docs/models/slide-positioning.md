# SlidePositioning

`flow` stacks blocks in the layout's body; `free` places every top-level block in its `frame` (array order is stacking order, bottom first).

## Example Usage

```typescript
import { SlidePositioning } from "sanka-sdk/models";

let value: SlidePositioning = "free";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"flow" | "free" | Unrecognized<string>
```