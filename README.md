# Deno PKG

A **version semantic** and **fast** package delivery network for Deno.

## Examples

Using a **fixed** version:

- https://pkg.deno.dev/std@0.147.0/fs/mod.ts
- https://pkg.deno.dev/x/oak@v10.6.0/mod.ts

Using a **semver range** version:

- https://pkg.deno.dev/std@>=0.147.0/fs/mod.ts
- https://pkg.deno.dev/std@^0.147/fs/mod.ts
- https://pkg.deno.dev/x/oak@v10/mod.ts
- https://pkg.deno.dev/x/oak@10/mod.ts

Using a **tag** (only support `latest`):

- https://pkg.deno.dev/std@latest/fs/mod.ts
- https://pkg.deno.dev/x/oak/mod.ts

## TODO

- [ ] https://pkg.deno.dev/gh/user/repo@version/path
- [ ] https://pkg.deno.dev/npm/user/repo@version/path
