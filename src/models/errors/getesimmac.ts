/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Unauthorized
 */
export type GeteSIMMacESIMResponseBodyData = {
    /**
     * Message of the error
     */
    message?: string | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Unauthorized
 */
export class GeteSIMMacESIMResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GeteSIMMacESIMResponseBodyData;

    constructor(err: GeteSIMMacESIMResponseBodyData, options?: ErrorOptions) {
        super("", options);
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "GeteSIMMacESIMResponseBody";
    }
}

/**
 * Bad Request
 */
export type GeteSIMMacResponseBodyData = {
    /**
     * Message of the error
     */
    message?: string | undefined;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;
};

/**
 * Bad Request
 */
export class GeteSIMMacResponseBody extends Error {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse?: Response | undefined;

    /** The original data that was passed to this error instance. */
    data$: GeteSIMMacResponseBodyData;

    constructor(err: GeteSIMMacResponseBodyData, options?: ErrorOptions) {
        super("", options);
        this.data$ = err;

        if (err.rawResponse != null) {
            this.rawResponse = err.rawResponse;
        }

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const { rawResponse, ...data } = err;
        const content = JSON.stringify(data);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "GeteSIMMacResponseBody";
    }
}

/** @internal */
export namespace GeteSIMMacESIMResponseBody$ {
    export type Inbound = {
        message?: string | undefined;
        RawResponse?: Response | undefined;
    };
    export type Outbound = {
        message?: string | undefined;
        rawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Inbound> = z
        .object({
            message: z.string().optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            };
        });
}

/** @internal */
export namespace GeteSIMMacResponseBody$ {
    export type Inbound = {
        message?: string | undefined;
        RawResponse?: Response | undefined;
    };
    export type Outbound = {
        message?: string | undefined;
        rawResponse?: Response | undefined;
    };

    export const inboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Inbound> = z
        .object({
            message: z.string().optional(),
            RawResponse: z.instanceof(Response).optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.RawResponse === undefined ? null : { rawResponse: v.RawResponse }),
            };
        });
}
