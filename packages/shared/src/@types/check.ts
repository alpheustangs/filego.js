type CheckResultError =
    | {
          /**
           * error:
           * - `size` - the size of chunks is not equal to `fileSize` parameter
           */
          type: "size";
          /** error message */
          message: string;
      }
    | {
          /**
           * error:
           * - `missing` - missing chunk(s)
           */
          type: "missing";
          /** error message */
          message: string;
          /** missing chunk(s) */
          missing: number[];
      };

type CheckResult =
    | {
          /** success */
          success: true;
      }
    | {
          /** failed */
          success: false;
          /** error */
          error: CheckResultError;
      };

export type { CheckResult, CheckResultError };
