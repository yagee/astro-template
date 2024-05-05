/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.json' {
  const src: string;
  export default src;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}
