# CreatePublicDealPipelineApiV2PublicDealsPipelinesPostRequest

## Example Usage

```typescript
import { CreatePublicDealPipelineApiV2PublicDealsPipelinesPostRequest } from "sanka-sdk/models/operations";

let value: CreatePublicDealPipelineApiV2PublicDealsPipelinesPostRequest = {
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xWorkspaceCode`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `body`                                                                           | [models.DealPipelineCreateRequest](../../models/deal-pipeline-create-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |