import * as path from "node:path";

import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { ROOT } from "#/configs";
import { router } from "#/router";

const app: Hono = new Hono();

app.use(cors());

app.route("/", router);

app.use(
    "*",
    serveStatic({ root: path.relative(ROOT, path.join(ROOT, "public")) }),
);

export default app;
