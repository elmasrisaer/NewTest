# Destinations
(*destinations*)

## Overview

Destinations encapsulate the various countries & regions that CELITECH currently supports.

### Available Operations

* [getDestinations](#getdestinations) - List Destinations

## getDestinations

List Destinations

### Example Usage

```typescript
import { Celitech } from "CELITECH";

async function run() {
  const sdk = new Celitech({
    oAuth2ClientCredentials: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.destinations.getDestinations();

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetDestinationsResponse](../../models/operations/getdestinationsresponse.md)>**
### Errors

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.GetDestinationsResponseBody             | 400                                            | application/json                               |
| errors.GetDestinationsDestinationsResponseBody | 401                                            | application/json                               |
| errors.SDKError                                | 4xx-5xx                                        | */*                                            |
