import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { port } from "#/configs";
import { router } from "#/router";

const app = new Hono();

app.use(cors());

app.route("/", router);

serve({
    fetch: app.fetch,
    port,
});

console.log(`Server running on port: ${port}`);
