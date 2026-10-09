# Deck

## Example Usage

```typescript
import { Deck } from "sanka-sdk/models";

let value: Deck = {
  slides: [],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `schema`                                      | *"sanka.deck/v1"*                             | :heavy_minus_sign:                            | N/A                                           |
| `page`                                        | [models.DeckPage](../models/deck-page.md)     | :heavy_minus_sign:                            | N/A                                           |
| `theme`                                       | [models.DeckTheme](../models/deck-theme.md)   | :heavy_minus_sign:                            | N/A                                           |
| `footer`                                      | [models.DeckFooter](../models/deck-footer.md) | :heavy_minus_sign:                            | N/A                                           |
| `slides`                                      | [models.Slide](../models/slide.md)[]          | :heavy_check_mark:                            | N/A                                           |