# Packages
(*packages*)

## Overview

The Packages endpoint focuses on the data packages offered by CELITECH.

### Available Operations

* [getPackages](#getpackages) - List Packages

## getPackages

List Packages

### Example Usage

```typescript
import { Celitech } from "CELITECH";
import { RFCDate } from "CELITECH/types";

async function run() {
  const sdk = new Celitech({
      oAuth2ClientCredentials: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

  
  const res = await sdk.packages.getPackages({
      destination: "FRA",
      startDate: new RFCDate("2023-11-01T00:00:00Z"),
      endDate: new RFCDate("2023-11-20T00:00:00Z"),
      afterCursor: "Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA",
      limit: 20,
      startTime: 1672052449,
      endTime: 1672396681,
      duration: 344232,
    });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPackagesRequest](../../models/operations/getpackagesrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetPackagesResponse](../../models/operations/getpackagesresponse.md)>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.GetPackagesResponseBody         | 400                                    | application/json                       |
| errors.GetPackagesPackagesResponseBody | 401                                    | application/json                       |
| errors.SDKError                        | 400-600                                | */*                                    |
