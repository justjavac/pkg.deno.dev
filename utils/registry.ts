// via https://github.com/denoland/dotland/blob/54203e5025eb0b7537b621b42288bc223d5ac7d4/util/registry_utils.ts#L704-L729
export function getModulePath(
  name: string,
  version: string | undefined,
  path: string | undefined,
) {
  return `${name === "std" ? "" : "/x"}/${name}${
    version ? `@${encodeURIComponent(version)}` : ""
  }${path}`;
}
