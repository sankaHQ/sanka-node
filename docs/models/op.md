# Op


## Supported Types

### `models.DeleteBlocksOp`

```typescript
const value: models.DeleteBlocksOp = {
  op: "delete_blocks",
  slideId: "<id>",
  blockIds: [
    "<value 1>",
  ],
};
```

### `models.DeleteSlidesOp`

```typescript
const value: models.DeleteSlidesOp = {
  op: "delete_slides",
  slideIds: [
    "<value 1>",
  ],
};
```

### `models.InsertBlocksOp`

```typescript
const value: models.InsertBlocksOp = {
  op: "insert_blocks",
  slideId: "<id>",
  blocks: [
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  ],
};
```

### `models.InsertSlidesOp`

```typescript
const value: models.InsertSlidesOp = {
  op: "insert_slides",
  slides: [
    {},
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
    },
  ],
};
```

### `models.MoveBlockOp`

```typescript
const value: models.MoveBlockOp = {
  op: "move_block",
  blockId: "<id>",
  toSlideId: "<id>",
};
```

### `models.MoveSlidesOp`

```typescript
const value: models.MoveSlidesOp = {
  op: "move_slides",
  slideIds: [],
};
```

### `models.ReplaceBlockOp`

```typescript
const value: models.ReplaceBlockOp = {
  op: "replace_block",
  slideId: "<id>",
  blockId: "<id>",
  block: {},
};
```

### `models.ReplaceSlideOp`

```typescript
const value: models.ReplaceSlideOp = {
  op: "replace_slide",
  slideId: "<id>",
  slide: {},
};
```

### `models.SetFooterOp`

```typescript
const value: models.SetFooterOp = {
  op: "set_footer",
  footer: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `models.SetThemeOp`

```typescript
const value: models.SetThemeOp = {
  op: "set_theme",
  theme: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `models.SetTitleOp`

```typescript
const value: models.SetTitleOp = {
  op: "set_title",
  title: "<value>",
};
```

### `models.UpdateBlockOp`

```typescript
const value: models.UpdateBlockOp = {
  op: "update_block",
  slideId: "<id>",
  blockId: "<id>",
  set: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `models.UpdateSlideOp`

```typescript
const value: models.UpdateSlideOp = {
  op: "update_slide",
  slideId: "<id>",
  set: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

