import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/++layout.server.ts";
export const imports = ["_app/immutable/nodes/2.IDjHuI9w.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.cybqkRHa.js"];
export const stylesheets = [];
export const fonts = [];
