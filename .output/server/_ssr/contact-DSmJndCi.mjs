import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as Mail, p as Phone, v as MessageCircle, x as MapPin } from "../_libs/lucide-react.mjs";
import { r as COMPANY } from "./site-data-B4-xSq8U.mjs";
import { t as Section } from "./section-CFFPWMY7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DSmJndCi.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-hero py-20 text-center sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 text-4xl font-bold sm:text-5xl",
					children: ["Let's ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "talk"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-muted-foreground",
					children: "We usually reply within a few hours during business hours."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
					icon: MapPin,
					title: "Visit us",
					body: COMPANY.address
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
					icon: Mail,
					title: "Email",
					body: COMPANY.email,
					href: `mailto:${COMPANY.email}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
					icon: Phone,
					title: "Phone",
					body: COMPANY.phone,
					href: `tel:${COMPANY.phone}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
					icon: MessageCircle,
					title: "WhatsApp",
					body: "Chat with us instantly",
					href: `https://wa.me/${COMPANY.whatsapp}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-semibold",
							children: "Business hours"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: COMPANY.hours
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Saturday: 10:00 – 14:00 (by appointment)"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-3xl border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Vixe Creatives Location",
				src: "https://www.google.com/maps?q=Abuja%2C%20Nigeria&output=embed",
				width: "100%",
				height: "100%",
				style: {
					minHeight: 460,
					border: 0
				},
				loading: "lazy",
				referrerPolicy: "no-referrer-when-downgrade"
			})
		})]
	}) })] });
}
function ContactCard({ icon: Icon, title, body, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(href ? "a" : "div", {
		href,
		className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-brand text-brand-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
			className: "font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: body
		})] })]
	});
}
//#endregion
export { ContactPage as component };
