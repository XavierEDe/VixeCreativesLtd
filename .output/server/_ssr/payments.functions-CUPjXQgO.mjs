import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as objectType, i as numberType, o as stringType, r as literalType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/payments.functions-CUPjXQgO.js
var InitSchema = objectType({
	email: stringType().trim().email(),
	fullName: stringType().trim().min(2).max(120),
	phone: stringType().trim().max(30).optional().or(literalType("")),
	packageName: stringType().trim().min(2).max(120),
	amount: numberType().int().positive().max(1e10)
});
var initializePaystack_createServerFn_handler = createServerRpc({
	id: "4be9ea1325ea6f874d708a9f6a3bb3a4a9555b46a12e71de7a909d1ba030ca33",
	name: "initializePaystack",
	filename: "src/lib/payments.functions.ts"
}, (opts) => initializePaystack.__executeServer(opts));
var initializePaystack = createServerFn({ method: "POST" }).inputValidator((data) => InitSchema.parse(data)).handler(initializePaystack_createServerFn_handler, async ({ data }) => {
	const secretKey = processModule.env.PAYSTACK_SECRET_KEY;
	if (!secretKey) throw new Error("Payments are temporarily unavailable. Please try again shortly.");
	const amountKobo = data.amount * 100;
	const json = await (await fetch("https://api.paystack.co/transaction/initialize", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${secretKey}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			email: data.email,
			amount: amountKobo,
			currency: "NGN",
			metadata: {
				full_name: data.fullName,
				phone: data.phone || null,
				package_name: data.packageName
			}
		})
	})).json();
	if (!json.status || !json.data) {
		console.error("[paystack] init failed:", json);
		throw new Error(json.message || "Could not initialize payment.");
	}
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	await supabaseAdmin.from("payments").insert({
		reference: json.data.reference,
		customer_email: data.email,
		customer_name: data.fullName,
		customer_phone: data.phone || null,
		package_name: data.packageName,
		amount_kobo: amountKobo,
		currency: "NGN",
		status: "pending"
	});
	return {
		authorizationUrl: json.data.authorization_url,
		reference: json.data.reference
	};
});
var VerifySchema = objectType({ reference: stringType().trim().min(4).max(120) });
var verifyPaystack_createServerFn_handler = createServerRpc({
	id: "95a22720f770d48d5a013999e5377dad1e77ac8e4583dafdb551f1ef5f4198e7",
	name: "verifyPaystack",
	filename: "src/lib/payments.functions.ts"
}, (opts) => verifyPaystack.__executeServer(opts));
var verifyPaystack = createServerFn({ method: "POST" }).inputValidator((data) => VerifySchema.parse(data)).handler(verifyPaystack_createServerFn_handler, async ({ data }) => {
	const secretKey = processModule.env.PAYSTACK_SECRET_KEY;
	if (!secretKey) throw new Error("Payments unavailable.");
	const json = await (await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(data.reference)}`, { headers: { Authorization: `Bearer ${secretKey}` } })).json();
	if (!json.status || !json.data) throw new Error(json.message || "Verification failed.");
	const paid = json.data.status === "success";
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	await supabaseAdmin.from("payments").update({
		status: paid ? "success" : json.data.status,
		paystack_response: json.data,
		paid_at: paid ? json.data.paid_at ?? (/* @__PURE__ */ new Date()).toISOString() : null
	}).eq("reference", data.reference);
	return {
		success: paid,
		status: json.data.status,
		amountKobo: json.data.amount,
		email: json.data.customer?.email ?? null,
		paidAt: json.data.paid_at ?? null
	};
});
//#endregion
export { initializePaystack_createServerFn_handler, verifyPaystack_createServerFn_handler };
