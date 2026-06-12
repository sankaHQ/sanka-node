# GetPublicJournalApiV2PublicJournalsJournalIdGet200Envelope

## Example Usage

```typescript
import { GetPublicJournalApiV2PublicJournalsJournalIdGet200Envelope } from "sanka-sdk/models";

let value: GetPublicJournalApiV2PublicJournalsJournalIdGet200Envelope = {
  success: true,
  data: {
    id: "<id>",
    recordId: "<id>",
    objectType: "<value>",
  },
  meta: {
    ctxId: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *true*                                                     | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [models.ObjectRecordData](../models/object-record-data.md) | :heavy_check_mark:                                         | N/A                                                        |
| `meta`                                                     | [models.EnvelopeMeta](../models/envelope-meta.md)          | :heavy_check_mark:                                         | N/A                                                        |