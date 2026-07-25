import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as FileText, N as Download, t as X, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as CERTIFICATIONS } from "./site-data-B4-xSq8U.mjs";
import { t as Section } from "./section-CFFPWMY7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/certifications-DSNGre14.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CertPage() {
	const [open, setOpen] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-hero py-20 text-center sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand",
						children: "Certifications"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-4xl font-bold sm:text-5xl",
						children: "Our registration & certifications"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-muted-foreground",
						children: "A fully registered Nigerian company with all statutory compliance and professional certifications."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: CERTIFICATIONS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group overflow-hidden rounded-2xl border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/3] bg-gradient-to-br from-red-500/20 via-neutral-900 to-black",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-16 w-16 text-brand/70" })
					}), c.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand px-2 py-1 text-[10px] font-semibold text-brand-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), " Verified"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								c.authority,
								" · ",
								c.date
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setOpen(i),
								className: "flex-1 rounded-full bg-gradient-brand px-3 py-2 text-xs font-semibold text-brand-foreground",
								children: "View"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex-1 rounded-full border border-border px-3 py-2 text-xs font-semibold hover:border-brand hover:text-brand inline-flex items-center justify-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3 w-3" }), " PDF"]
							})]
						})
					]
				})]
			}, c.title))
		}) }),
		open !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm",
			onClick: () => setOpen(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-2xl rounded-2xl border border-border bg-card p-8",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(null),
						className: "absolute right-4 top-4 rounded-full border border-border p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid aspect-[4/3] place-items-center rounded-xl bg-gradient-to-br from-red-500/20 via-neutral-900 to-black",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-24 w-24 text-brand/70" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-xl font-bold",
						children: CERTIFICATIONS[open].title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							CERTIFICATIONS[open].authority,
							" · Issued ",
							CERTIFICATIONS[open].date
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { CertPage as component };
