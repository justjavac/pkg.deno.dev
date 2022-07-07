/** @jsx h */
import { h } from "preact";
import { tw } from "@utils/twind.ts";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <header
        class={tw
          `relative section-x-inset-sm pt-10 pb-20 flex flex-col items-center`}
      >
        <h1
          class={tw
            `font-extrabold text-5xl leading-10 tracking-tight text-gray-900`}
        >
          Deno PKG
        </h1>
        <h2
          class={tw
            `mt-6 sm:mt-8 font-light text-2xl text-center leading-tight text-gray-900`}
        >
          A <strong class={tw`font-semibold`}>version semantic</strong> and{" "}
          <strong class={tw`font-semibold`}>fast</strong>{" "}
          package delivery network for Deno.
        </h2>
      </header>
      <h3 class={tw`font-bold text-xl`}>Examples</h3>
      <p class={tw`py-2 mt-4`}>
        Using a <strong class={tw`font-semibold`}>fixed</strong> version:
      </p>
      <ul class={tw`ml-8 list-disc`}>
        <li>
          <a
            href="/std@0.147.0/fs/mod.ts"
            class={tw`text-blue-500 hover:underline`}
            target="_blank"
          >
            https://pkg.deno.dev/std@0.147.0/fs/mod.ts
          </a>
        </li>
        <li>
          <a
            href="/x/oak@v10.6.0/mod.ts"
            class={tw`text-blue-500 hover:underline`}
            target="_blank"
          >
            https://pkg.deno.dev/x/oak@v10.6.0/mod.ts
          </a>
        </li>
      </ul>
      <p class={tw`py-2 mt-4`}>
        Using a <strong class={tw`font-semibold`}>semver range</strong> version:
      </p>
      <ul class={tw`ml-8 list-disc`}>
        <li>
          <a
            href="/std@>=0.147/fs/mod.ts"
            class={tw`text-blue-500 hover:underline`}
            target="_blank"
          >
            {"https://pkg.deno.dev/std@>=0.147.0/fs/mod.ts"}
          </a>
        </li>
        <li>
          <a
            href="/std@^0.147/fs/mod.ts"
            class={tw`text-blue-500 hover:underline`}
            target="_blank"
          >
            https://pkg.deno.dev/std@^0.147/fs/mod.ts
          </a>
        </li>
        <li>
          <a
            href="/x/oak@v10/mod.ts"
            class={tw`text-blue-500 hover:underline`}
            target="_blank"
          >
            https://pkg.deno.dev/x/oak@v10/mod.ts
          </a>
        </li>
      </ul>
      <p class={tw`py-2 mt-4`}>
        Using a <strong class={tw`font-semibold`}>tag</strong> (only support
        {" "}
        <code class={tw`py-1 px-2 font-mono bg-gray-100 text-sm break-word`}>
          latest
        </code>):
      </p>
      <ul class={tw`ml-8 list-disc`}>
        <li>
          <a
            href="/std@latest/fs/mod.ts"
            class={tw`text-blue-500 hover:underline`}
            target="_blank"
          >
            https://pkg.deno.dev/std@latest/fs/mod.ts
          </a>
        </li>
        <li>
          <a
            href="/x/oak/mod.ts"
            class={tw`text-blue-500 hover:underline`}
            target="_blank"
          >
            https://pkg.deno.dev/x/oak/mod.ts
          </a>
        </li>
      </ul>
    </div>
  );
}
