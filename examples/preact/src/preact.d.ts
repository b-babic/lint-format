// eslint-disable-next-line @typescript-eslint/no-unused-vars
import JSX = preact.JSX;

// TODO: Fix typescript error for plugin vite-plugin-svgr
// Can be removed if vite-plugin-svgr isn't used
declare module "*.svg" {
  import type * as React from "react";

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

  const src: string;
  export default src;
}
