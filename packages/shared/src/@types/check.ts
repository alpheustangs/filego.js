/** Result error of the `check` function. */
type CheckResultError = {
    /** Error message of the check. */
    message: string;
} & (
    | {
          /** Some of the chunks are missing to merge the file. */
          type: "missing";
          /** Missing chunk(s) to merge the file. */
          missing: number[];
      }
    | {
          /** The size of chunks do not match the `fileSize` parameter. */
          type: "size";
      }
);

/** Result of the `check` function. */
type CheckResult =
    | {
          /** Successful check. */
          success: true;
      }
    | {
          /** Failed check. */
          success: false;
          /** Error details of the check. */
          error: CheckResultError;
      };

export type { CheckResult, CheckResultError };
