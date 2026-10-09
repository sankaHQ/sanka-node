# SlideBlock


## Supported Types

### `models.CalloutBlock`

```typescript
const value: models.CalloutBlock = {
  type: "callout",
  markdown: "<value>",
};
```

### `models.CardsBlock`

```typescript
const value: models.CardsBlock = {
  type: "cards",
  items: [],
};
```

### `models.ColumnsBlock`

```typescript
const value: models.ColumnsBlock = {
  type: "columns",
  columns: [
    {
      width: 708464,
    },
  ],
};
```

### `models.DiagramBlock`

```typescript
const value: models.DiagramBlock = {
  type: "diagram",
  mermaid: "<id>",
};
```

### `models.DividerBlock`

```typescript
const value: models.DividerBlock = {
  type: "divider",
};
```

### `models.HeadingBlock`

```typescript
const value: models.HeadingBlock = {
  type: "heading",
  text: "<value>",
};
```

### `models.ImageBlock`

```typescript
const value: models.ImageBlock = {
  type: "image",
  assetId: "<id>",
};
```

### `models.QuoteBlock`

```typescript
const value: models.QuoteBlock = {
  type: "quote",
  text: "<value>",
};
```

### `models.StatsBlock`

```typescript
const value: models.StatsBlock = {
  type: "stats",
  items: [
    {
      value: "<value>",
      label: "<value>",
    },
  ],
};
```

### `models.StepsBlock`

```typescript
const value: models.StepsBlock = {
  type: "steps",
  items: [
    {
      title: "<value>",
    },
  ],
};
```

### `models.TableBlock`

```typescript
const value: models.TableBlock = {
  type: "table",
  columns: [
    {},
  ],
  rows: [
    [],
    [],
  ],
};
```

### `models.TextBlock`

```typescript
const value: models.TextBlock = {
  type: "text",
  markdown: "<value>",
};
```

### `models.TimelineBlock`

```typescript
const value: models.TimelineBlock = {
  type: "timeline",
  items: [],
};
```

