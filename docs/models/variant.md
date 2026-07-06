# Variant

## Example Usage

```typescript
import { Variant } from "sanka-sdk/models";

let value: Variant = "success";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"success" | "error" | "info" | "warning" | Unrecognized<string>
```