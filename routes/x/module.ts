import { Handlers } from "$fresh/server.ts";
import type { RouteConfig } from "$fresh/server.ts";
import { accepts } from "oak_commons";
import * as semver from "semver";
import versionInfo from "version_info";

import { getModulePath } from "@utils/registry.ts";

type Params = {
  name: string;
  version?: string;
  path: string;
};

export const handler: Handlers = {
  async GET(req, ctx) {
    const version = decodeURIComponent(ctx.params.version);
    const { name, path: maybePath } = ctx.params as Params;
    const path = maybePath ? "/" + maybePath : "";

    const url = new URL(req.url);
    const isHTML = accepts(req, "application/*", "text/html") === "text/html";

    const versions = await versionInfo(name);

    if (!version) {
      if (!versions?.latest) {
        return new Response(`The module '${name}' has no latest version`, {
          status: 404,
          headers: {
            "content-type": "text/plain",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }

      return new Response(undefined, {
        headers: {
          Location: getModulePath(name, versions.latest, path),
          "x-deno-warning": `Implicitly using latest version (${
            versions!.latest
          }) for ${url.href}`,
          "Access-Control-Allow-Origin": "*",
        },
        status: 302,
      });
    }

    const v = versions?.versions
      .filter((x) => semver.satisfies(x, version))
      .sort(semver.compare)[0];

    if (!v) {
      return new Response(`The module '${name}@${version}' has not exist`, {
        status: 404,
        headers: {
          "content-type": "text/plain",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    if (v !== version) {
      return new Response(undefined, {
        headers: {
          Location: getModulePath(name, v, path),
          "x-deno-warning": `Implicitly using version (${v}) for ${url.href}`,
          "Access-Control-Allow-Origin": "*",
        },
        status: 302,
      });
    }

    const response = await fetch(
      `https://deno.land/${name === "std" ? "" : "x/"}${name}@${v}${path}`
    );

    if (isHTML) {
      return new Response(response.body, {
        headers: {
          "content-type": "text/plain",
        },
      });
    }

    return fetch(
      `https://deno.land/${name === "std" ? "" : "x/"}${name}@${v}${path}`
    );
  },
};

export const config: RouteConfig = {
  routeOverride: "/x/:name{@:version}?/:path*",
};
