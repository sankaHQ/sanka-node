# PublicAuthWhoamiPayload

## Example Usage

```typescript
import { PublicAuthWhoamiPayload } from "sanka-sdk/models";

let value: PublicAuthWhoamiPayload = {
  userId: "<id>",
  authMode: "<value>",
  principalKey: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `userId`           | *string*           | :heavy_check_mark: | N/A                |
| `username`         | *string*           | :heavy_minus_sign: | N/A                |
| `email`            | *string*           | :heavy_minus_sign: | N/A                |
| `workspaceId`      | *string*           | :heavy_minus_sign: | N/A                |
| `workspaceCode`    | *string*           | :heavy_minus_sign: | N/A                |
| `workspaceName`    | *string*           | :heavy_minus_sign: | N/A                |
| `authMode`         | *string*           | :heavy_check_mark: | N/A                |
| `principalKey`     | *string*           | :heavy_check_mark: | N/A                |
| `tokenId`          | *string*           | :heavy_minus_sign: | N/A                |
| `tokenName`        | *string*           | :heavy_minus_sign: | N/A                |
| `permissionLevel`  | *string*           | :heavy_minus_sign: | N/A                |
| `permissions`      | *string*[]         | :heavy_minus_sign: | N/A                |
| `scopes`           | *string*[]         | :heavy_minus_sign: | N/A                |
| `oauthAppId`       | *string*           | :heavy_minus_sign: | N/A                |