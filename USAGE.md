<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->