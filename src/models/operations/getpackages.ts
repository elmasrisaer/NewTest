/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../types";
import { z } from "zod";

export type GetPackagesRequest = {
    destination?: string | undefined;
    /**
     * Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
     */
    startDate?: RFCDate | undefined;
    /**
     * End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 60 days after Start date.
     */
    endDate?: RFCDate | undefined;
    afterCursor?: string | undefined;
    limit?: number | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    startTime?: number | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    endTime?: number | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    duration?: number | undefined;
};

export type Packages = {
    /**
     * ID of the package
     */
    id?: string | undefined;
    /**
     * ISO representation of the package's destination
     */
    destination?: string | undefined;
    /**
     * Size of the package in Bytes
     */
    dataLimitInBytes?: number | undefined;
    /**
     * Min number of days for the package
     */
    minDays?: number | undefined;
    /**
     * Max number of days for the package
     */
    maxDays?: number | undefined;
    /**
     * Price of the package in cents
     */
    priceInCents?: number | undefined;
};

/**
 * Successful Response
 */
export type GetPackagesResponseBody = {
    packages?: Array<Packages> | undefined;
    /**
     * The cursor value representing the end of the current page of results. Use this cursor value as the "afterCursor" parameter in your next request to retrieve the subsequent page of results. It ensures that you continue fetching data from where you left off, facilitating smooth pagination
     */
    afterCursor?: string | null | undefined;
};

export type GetPackagesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful Response
     */
    object?: GetPackagesResponseBody | undefined;
};

/** @internal */
export namespace GetPackagesRequest$ {
    export type Inbound = {
        destination?: string | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
        afterCursor?: string | undefined;
        limit?: number | undefined;
        startTime?: number | undefined;
        endTime?: number | undefined;
        duration?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetPackagesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            destination: z.string().optional(),
            startDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            endDate: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            afterCursor: z.string().optional(),
            limit: z.number().optional(),
            startTime: z.number().int().optional(),
            endTime: z.number().int().optional(),
            duration: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.destination === undefined ? null : { destination: v.destination }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.afterCursor === undefined ? null : { afterCursor: v.afterCursor }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.startTime === undefined ? null : { startTime: v.startTime }),
                ...(v.endTime === undefined ? null : { endTime: v.endTime }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
            };
        });

    export type Outbound = {
        destination?: string | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
        afterCursor?: string | undefined;
        limit?: number | undefined;
        startTime?: number | undefined;
        endTime?: number | undefined;
        duration?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPackagesRequest> = z
        .object({
            destination: z.string().optional(),
            startDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            endDate: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            afterCursor: z.string().optional(),
            limit: z.number().optional(),
            startTime: z.number().int().optional(),
            endTime: z.number().int().optional(),
            duration: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.destination === undefined ? null : { destination: v.destination }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.afterCursor === undefined ? null : { afterCursor: v.afterCursor }),
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.startTime === undefined ? null : { startTime: v.startTime }),
                ...(v.endTime === undefined ? null : { endTime: v.endTime }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
            };
        });
}

/** @internal */
export namespace Packages$ {
    export type Inbound = {
        id?: string | undefined;
        destination?: string | undefined;
        dataLimitInBytes?: number | undefined;
        minDays?: number | undefined;
        maxDays?: number | undefined;
        priceInCents?: number | undefined;
    };

    export const inboundSchema: z.ZodType<Packages, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            destination: z.string().optional(),
            dataLimitInBytes: z.number().optional(),
            minDays: z.number().optional(),
            maxDays: z.number().optional(),
            priceInCents: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.destination === undefined ? null : { destination: v.destination }),
                ...(v.dataLimitInBytes === undefined
                    ? null
                    : { dataLimitInBytes: v.dataLimitInBytes }),
                ...(v.minDays === undefined ? null : { minDays: v.minDays }),
                ...(v.maxDays === undefined ? null : { maxDays: v.maxDays }),
                ...(v.priceInCents === undefined ? null : { priceInCents: v.priceInCents }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        destination?: string | undefined;
        dataLimitInBytes?: number | undefined;
        minDays?: number | undefined;
        maxDays?: number | undefined;
        priceInCents?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Packages> = z
        .object({
            id: z.string().optional(),
            destination: z.string().optional(),
            dataLimitInBytes: z.number().optional(),
            minDays: z.number().optional(),
            maxDays: z.number().optional(),
            priceInCents: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.destination === undefined ? null : { destination: v.destination }),
                ...(v.dataLimitInBytes === undefined
                    ? null
                    : { dataLimitInBytes: v.dataLimitInBytes }),
                ...(v.minDays === undefined ? null : { minDays: v.minDays }),
                ...(v.maxDays === undefined ? null : { maxDays: v.maxDays }),
                ...(v.priceInCents === undefined ? null : { priceInCents: v.priceInCents }),
            };
        });
}

/** @internal */
export namespace GetPackagesResponseBody$ {
    export type Inbound = {
        packages?: Array<Packages$.Inbound> | undefined;
        afterCursor?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<GetPackagesResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            packages: z.array(z.lazy(() => Packages$.inboundSchema)).optional(),
            afterCursor: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.packages === undefined ? null : { packages: v.packages }),
                ...(v.afterCursor === undefined ? null : { afterCursor: v.afterCursor }),
            };
        });

    export type Outbound = {
        packages?: Array<Packages$.Outbound> | undefined;
        afterCursor?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPackagesResponseBody> = z
        .object({
            packages: z.array(z.lazy(() => Packages$.outboundSchema)).optional(),
            afterCursor: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.packages === undefined ? null : { packages: v.packages }),
                ...(v.afterCursor === undefined ? null : { afterCursor: v.afterCursor }),
            };
        });
}

/** @internal */
export namespace GetPackagesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetPackagesResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetPackagesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetPackagesResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: GetPackagesResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPackagesResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GetPackagesResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
