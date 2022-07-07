import { Handlers } from "$fresh/server.ts";
import type { RouteConfig } from "$fresh/server.ts";
import { handler as xHandler } from "./x/module.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    ctx.params.name = "std";
    if (ctx.params.version?.startsWith("v")) {
      ctx.params.version = ctx.params.version.slice(1);
    }
    return xHandler.GET!(req, ctx);
  },
};

export const config: RouteConfig = { routeOverride: "/std{@:version}?/:path*" };
