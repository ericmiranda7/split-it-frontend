export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icon.svg","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.F3i6Z4V1.js","app":"_app/immutable/entry/app.HJClLpxA.js","imports":["_app/immutable/entry/start.F3i6Z4V1.js","_app/immutable/chunks/entry.vpqrxGxX.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/entry/app.HJClLpxA.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.cybqkRHa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":true},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
