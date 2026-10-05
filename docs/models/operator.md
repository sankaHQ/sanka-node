# Operator

## Example Usage

```typescript
import { Operator } from "sanka-sdk/models";

let value: Operator = "is_not_empty";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"equals" | "not_equals" | "contains" | "does_not_contain" | "starts_with" | "ends_with" | "in" | "not_in" | "is_empty" | "is_not_empty" | "greater_than" | "greater_than_or_equal" | "less_than" | "less_than_or_equal" | "between" | "equal_or_after_today" | "equal_or_before_today" | "last_x_days" | "more_than_x_days" | Unrecognized<string>
```