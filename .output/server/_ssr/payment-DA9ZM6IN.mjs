import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as objectType, o as stringType, t as coerce } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-DA9ZM6IN.js
var $$splitComponentImporter = () => import("./payment-vL9Xph63.mjs");
var searchSchema = objectType({
	pkg: stringType().optional(),
	amount: coerce.number().optional(),
	reference: stringType().optional(),
	trxref: stringType().optional()
});
var Route = createFileRoute("/payment")({
	validateSearch: (s) => searchSchema.parse(s),
	head: () => ({
		meta: [
			{ title: "Make a Payment — Vixe Creatives (Paystack Secure)" },
			{
				name: "description",
				content: "Securely pay for your Vixe Creatives package or custom quotation via Paystack."
			},
			{
				property: "og:title",
				content: "Make a Payment — Vixe Creatives"
			},
			{
				property: "og:description",
				content: "Secure card and bank transfer via Paystack."
			},
			{
				property: "og:url",
				content: "/payment"
			}
		],
		links: [{
			rel: "canonical",
			href: "/payment"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
