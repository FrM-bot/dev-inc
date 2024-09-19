/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_STATUS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
