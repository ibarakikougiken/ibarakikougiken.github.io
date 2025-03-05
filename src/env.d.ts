/// <reference path="../.astro/types.d.ts" />

/**
 * @see https://pagefind.app/docs/ui/
 */
declare module "@pagefind/default-ui" {
  declare class PagefindUI {
    constructor(opts: { element?: string | HTMLElement });
  }
}
