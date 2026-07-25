import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Sparkles, z as Check } from "../_libs/lucide-react.mjs";
import { d as formatNaira, u as WEB_PACKAGES } from "./site-data-B4-xSq8U.mjs";
import { t as Section } from "./section-CFFPWMY7.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-BrDi-JXT.js
var import_jsx_runtime = require_jsx_runtime();
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-hero py-20 text-center sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand",
					children: "Pricing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl",
					children: ["Fair pricing. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "Serious craft."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg",
					children: "Transparent packages for every stage. Prices in Nigerian Naira (₦), 50% deposit to start."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: WEB_PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 ${p.highlight ? "border-brand bg-gradient-brand text-brand-foreground shadow-brand" : "border-border bg-card hover:border-brand/40 hover:shadow-brand"}`,
			children: [
				p.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-background px-3 py-1 text-xs font-semibold text-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Most popular"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 text-4xl font-bold",
					children: formatNaira(p.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
								" Delivery: ",
								p.delivery
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
								" Revisions: ",
								p.revisions
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
								" Support: ",
								p.support
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " Hosting setup & SSL"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " SEO foundation"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/consultation",
						className: `flex-1 rounded-full px-4 py-2 text-center text-xs font-semibold ${p.highlight ? "bg-background text-foreground" : "border border-border hover:border-brand hover:text-brand"}`,
						children: "Book Package"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/payment",
						search: {
							pkg: p.name,
							amount: p.price
						},
						className: `flex-1 rounded-full px-4 py-2 text-center text-xs font-semibold ${p.highlight ? "bg-foreground text-background" : "bg-gradient-brand text-brand-foreground shadow-brand"}`,
						children: "Pay Now"
					})]
				})
			]
		}, p.name))
	}) })] });
}
//#endregion
export { PricingPage as component };
