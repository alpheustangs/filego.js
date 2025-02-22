import * as path from "node:path";

const cwd: string = process.cwd();
const root: string = path.resolve(cwd);

const isDev: boolean = process.env.NODE_ENV === "development";
const isPrd: boolean = !isDev;

const port: number = isDev ? 4001 : 4000;

const uploadRoot: string = path.join(root, ".media", "uploads");
const cacheRoot: string = path.join(root, ".media", "cache");

export { root, isDev, isPrd, port, uploadRoot, cacheRoot };
