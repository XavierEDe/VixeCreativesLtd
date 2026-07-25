//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-DDcbm2kS.js
var manifest = {
	"1369b9ba56477f0c717a25af5e91197adc1d22b919e0a2b4ba443a291044f7eb": {
		functionName: "bookConsultation_createServerFn_handler",
		importer: () => import("./_ssr/consultation.functions-Vmta_R3e.mjs")
	},
	"4be9ea1325ea6f874d708a9f6a3bb3a4a9555b46a12e71de7a909d1ba030ca33": {
		functionName: "initializePaystack_createServerFn_handler",
		importer: () => import("./_ssr/payments.functions-CUPjXQgO.mjs")
	},
	"95a22720f770d48d5a013999e5377dad1e77ac8e4583dafdb551f1ef5f4198e7": {
		functionName: "verifyPaystack_createServerFn_handler",
		importer: () => import("./_ssr/payments.functions-CUPjXQgO.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
