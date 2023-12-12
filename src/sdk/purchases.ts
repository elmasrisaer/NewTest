/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Purchases extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Create Purchase
     *
     * @remarks
     * This endpoint is used to purchase a new eSIM by providing the package details.
     */
    async createPurchase(
        input: operations.CreatePurchaseRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreatePurchaseResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = operations.CreatePurchaseRequestBody$.outboundSchema
            .optional()
            .parse(input);
        const body =
            payload === undefined ? null : enc$.encodeJSON("body", payload, { explode: true });

        const path = this.templateURLComponent("/purchases")();

        const security = this.options$.oAuth2ClientCredentials
            ? { oAuth2ClientCredentials: this.options$.oAuth2ClientCredentials }
            : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.CreatePurchaseResponse$.inboundSchema.parse({
                ...responseFields,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.CreatePurchaseResponseBody$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.CreatePurchaseResponseBody(result);
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.CreatePurchasePurchasesResponseBody$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.CreatePurchasePurchasesResponseBody(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * List Purchases
     *
     * @remarks
     * This endpoint can be used to list all the successful purchases made between a given interval.
     */
    async listPurchases(
        input: operations.ListPurchasesRequest,
        options?: RequestOptions
    ): Promise<operations.ListPurchasesResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.ListPurchasesRequest$.outboundSchema.parse(input);
        const body = null;

        const path = this.templateURLComponent("/purchases")();

        const query = [
            enc$.encodeForm("after", payload.after, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("afterCursor", payload.afterCursor, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("afterDate", payload.afterDate, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("before", payload.before, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("beforeDate", payload.beforeDate, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("iccid", payload.iccid, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("limit", payload.limit, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const security = this.options$.oAuth2ClientCredentials
            ? { oAuth2ClientCredentials: this.options$.oAuth2ClientCredentials }
            : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, query, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.ListPurchasesResponse$.inboundSchema.parse({
                ...responseFields,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ListPurchasesResponseBody$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ListPurchasesResponseBody(result);
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ListPurchasesPurchasesResponseBody$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ListPurchasesPurchasesResponseBody(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Top-up eSIM
     *
     * @remarks
     * This endpoint is used to top-up an eSIM with the previously associated destination by providing an existing ICCID and the package details. The top-up is not feasible for eSIMs in "DELETED" or "ERROR" state.
     */
    async topUpeSIM(
        input: operations.TopUpeSIMRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.TopUpeSIMResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = operations.TopUpeSIMRequestBody$.outboundSchema.optional().parse(input);
        const body =
            payload === undefined ? null : enc$.encodeJSON("body", payload, { explode: true });

        const path = this.templateURLComponent("/purchases/topup")();

        const security = this.options$.oAuth2ClientCredentials
            ? { oAuth2ClientCredentials: this.options$.oAuth2ClientCredentials }
            : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.TopUpeSIMResponse$.inboundSchema.parse({
                ...responseFields,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.TopUpeSIMResponseBody$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.TopUpeSIMResponseBody(result);
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.TopUpeSIMPurchasesResponseBody$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.TopUpeSIMPurchasesResponseBody(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Edit Purchase
     *
     * @remarks
     * This endpoint allows you to modify the dates of an existing package with a future activation start time. Editing can only be performed for packages that have not been activated, and it cannot change the package size. The modification must not change the package duration category to ensure pricing consistency.
     */
    async editPurchase(
        input: operations.EditPurchaseRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.EditPurchaseResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = operations.EditPurchaseRequestBody$.outboundSchema.optional().parse(input);
        const body =
            payload === undefined ? null : enc$.encodeJSON("body", payload, { explode: true });

        const path = this.templateURLComponent("/purchases/edit")();

        const security = this.options$.oAuth2ClientCredentials
            ? { oAuth2ClientCredentials: this.options$.oAuth2ClientCredentials }
            : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.EditPurchaseResponse$.inboundSchema.parse({
                ...responseFields,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.EditPurchaseResponseBody$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.EditPurchaseResponseBody(result);
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.EditPurchasePurchasesResponseBody$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.EditPurchasePurchasesResponseBody(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get Purchase Consumption
     *
     * @remarks
     * This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.
     */
    async getPurchaseConsumption(
        purchaseId: string,
        options?: RequestOptions
    ): Promise<operations.GetPurchaseConsumptionResponse> {
        const input: operations.GetPurchaseConsumptionRequest = {
            purchaseId: purchaseId,
        };
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.GetPurchaseConsumptionRequest$.outboundSchema.parse(input);
        const body = null;

        const pathParams = {
            purchaseId: enc$.encodeSimple("purchaseId", payload.purchaseId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/purchases/{purchaseId}/consumption")(pathParams);

        const security = this.options$.oAuth2ClientCredentials
            ? { oAuth2ClientCredentials: this.options$.oAuth2ClientCredentials }
            : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetPurchaseConsumptionResponse$.inboundSchema.parse({
                ...responseFields,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetPurchaseConsumptionResponseBody$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.GetPurchaseConsumptionResponseBody(result);
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetPurchaseConsumptionPurchasesResponseBody$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.GetPurchaseConsumptionPurchasesResponseBody(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}