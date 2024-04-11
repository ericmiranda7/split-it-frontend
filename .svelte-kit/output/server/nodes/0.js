

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ncMrnIM5.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.cybqkRHa.js"];
export const stylesheets = ["_app/immutable/assets/0.RxHDiVyp.css"];
export const fonts = [];
