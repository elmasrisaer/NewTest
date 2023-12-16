/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Esim extends ClientSDK {
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
     * Get eSIM Status
     */
    async geteSIM(iccid: string, options?: RequestOptions): Promise<operations.GeteSIMResponse> {
        const input$: operations.GeteSIMRequest = {
            iccid: iccid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GeteSIMRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/esim")();

        const query$ = [
            enc$.encodeForm("iccid", payload$.iccid, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.oAuth2ClientCredentials === "function") {
            security$ = { oAuth2ClientCredentials: await this.options$.oAuth2ClientCredentials() };
        } else if (this.options$.oAuth2ClientCredentials) {
            security$ = { oAuth2ClientCredentials: this.options$.oAuth2ClientCredentials };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GeteSIMResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GeteSIMResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GeteSIMESIMResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get eSIM Device
     */
    async geteSIMDevice(
        iccid: string,
        options?: RequestOptions
    ): Promise<operations.GeteSIMDeviceResponse> {
        const input$: operations.GeteSIMDeviceRequest = {
            iccid: iccid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GeteSIMDeviceRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            iccid: enc$.encodeSimple("iccid", payload$.iccid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/esim/{iccid}/device")(pathParams$);

        let security$;
        if (typeof this.options$.oAuth2ClientCredentials === "function") {
            security$ = { oAuth2ClientCredentials: await this.options$.oAuth2ClientCredentials() };
        } else if (this.options$.oAuth2ClientCredentials) {
            security$ = { oAuth2ClientCredentials: this.options$.oAuth2ClientCredentials };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GeteSIMDeviceResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GeteSIMDeviceResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GeteSIMDeviceESIMResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get eSIM History
     */
    async geteSIMHistory(
        iccid: string,
        options?: RequestOptions
    ): Promise<operations.GeteSIMHistoryResponse> {
        const input$: operations.GeteSIMHistoryRequest = {
            iccid: iccid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GeteSIMHistoryRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            iccid: enc$.encodeSimple("iccid", payload$.iccid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/esim/{iccid}/history")(pathParams$);

        let security$;
        if (typeof this.options$.oAuth2ClientCredentials === "function") {
            security$ = { oAuth2ClientCredentials: await this.options$.oAuth2ClientCredentials() };
        } else if (this.options$.oAuth2ClientCredentials) {
            security$ = { oAuth2ClientCredentials: this.options$.oAuth2ClientCredentials };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GeteSIMHistoryResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GeteSIMHistoryResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GeteSIMHistoryESIMResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get eSIM MAC
     */
    async geteSIMMac(
        iccid: string,
        options?: RequestOptions
    ): Promise<operations.GeteSIMMacResponse> {
        const input$: operations.GeteSIMMacRequest = {
            iccid: iccid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GeteSIMMacRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            iccid: enc$.encodeSimple("iccid", payload$.iccid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/esim/{iccid}/mac")(pathParams$);

        let security$;
        if (typeof this.options$.oAuth2ClientCredentials === "function") {
            security$ = { oAuth2ClientCredentials: await this.options$.oAuth2ClientCredentials() };
        } else if (this.options$.oAuth2ClientCredentials) {
            security$ = { oAuth2ClientCredentials: this.options$.oAuth2ClientCredentials };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GeteSIMMacResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GeteSIMMacResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 401, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GeteSIMMacESIMResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
