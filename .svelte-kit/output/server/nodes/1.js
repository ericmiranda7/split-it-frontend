

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.TNV_6jA8.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.cybqkRHa.js","_app/immutable/chunks/entry.vpqrxGxX.js"];
export const stylesheets = [];
export const fonts = [];
