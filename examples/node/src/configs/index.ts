import * as path from "node:path";

export const ROOT: string = path.resolve(process.cwd());

export const IS_DEV: boolean = process.env.NODE_ENV === "development";
export const IS_PRD: boolean = process.env.NODE_ENV === "production";

export const PORT: number = IS_DEV ? 4001 : 4000;

export const ROOT_UPLOAD: string = path.join(ROOT, ".media", "uploads");
export const ROOT_CACHE: string = path.join(ROOT, ".media", "cache");
