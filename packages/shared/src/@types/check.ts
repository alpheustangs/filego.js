type CheckResult = {
    /**
     * success or not
     */
    status: "success" | "error";
    /**
     * error:
     * - `size` - the size of chunks is not equal to `fileSize` parameter
     * - `missing` - missing chunk(s)
     */
    error?: "size" | "missing";
    /**
     * missing index(s)
     */
    missing?: number[];
};

export type { CheckResult };
