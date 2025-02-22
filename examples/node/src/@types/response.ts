import type { ContentfulStatusCode } from "hono/utils/http-status";

type ServiceResponse<D = unknown> = [
    ContentfulStatusCode,
    {
        success: boolean;
        data?: D;
        error?: {
            code: string;
            field?: string;
            message: string;
        };
    },
];

export type { ServiceResponse };
