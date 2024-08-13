import type { CheckResult } from "#/@types/check";
import type { FileChunk } from "#/@types/chunk";

import { isTypeOfFileChunks, sortFileChunks } from "#/functions/chunks";

const shared = {
    isTypeOfFileChunks,
    sortFileChunks,
};

export default shared;
export type { FileChunk, CheckResult };
export { isTypeOfFileChunks, sortFileChunks };
