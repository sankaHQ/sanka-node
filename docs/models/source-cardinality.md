# SourceCardinality

## Example Usage

```typescript
import { SourceCardinality } from "sanka-sdk/models";

let value: SourceCardinality = "zero_or_many";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"one" | "zero_or_one" | "one_or_many" | "zero_or_many" | Unrecognized<string>
```