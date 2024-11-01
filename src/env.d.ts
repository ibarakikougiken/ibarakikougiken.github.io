/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
