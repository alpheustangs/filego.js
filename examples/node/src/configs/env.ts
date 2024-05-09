import * as path from "node:path";

const port: number = Number(process.env.PORT);

const isDev: boolean = process.env.NODE_ENV === "development";
const isPrd: boolean = process.env.NODE_ENV === "production";

const cwd: string = process.cwd();
const root: string = path.resolve(cwd);

const uploadRoot: string = path.join(root, ".media", "uploads");
const cacheRoot: string = path.join(root, ".media", "cache");

export { port, isDev, isPrd, root, uploadRoot, cacheRoot };
