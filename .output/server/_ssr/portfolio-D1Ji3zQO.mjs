import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { M as ExternalLink } from "../_libs/lucide-react.mjs";
import { o as PORTFOLIO } from "./site-data-B4-xSq8U.mjs";
import { t as Section } from "./section-CFFPWMY7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-D1Ji3zQO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"All",
	"Websites",
	"Mobile Apps",
	"Software",
	"UI/UX",
	"Branding",
	"Networking",
	"Cloud Projects",
	"Graphics"
];
var GRADS = {
	"grad-1": "from-red-500/80 to-black",
	"grad-2": "from-black to-red-700/80",
	"grad-3": "from-red-600/70 to-red-950",
	"grad-4": "from-neutral-800 to-red-500/70",
	"grad-5": "from-red-500/60 to-neutral-900",
	"grad-6": "from-red-700 to-neutral-950",
	"grad-7": "from-neutral-900 to-red-500/60",
	"grad-8": "from-red-500 to-neutral-800",
	"grad-9": "from-red-950 to-red-500/50"
};
function PortfolioPage() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const items = cat === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-hero py-20 text-center sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand",
					children: "Portfolio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl",
					children: ["Work we're ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "proud of"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg",
					children: "A snapshot of recent projects across web, mobile, software and infrastructure."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-10 flex flex-wrap justify-center gap-2",
		children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setCat(c),
			className: `rounded-full px-4 py-2 text-xs font-medium transition-colors ${cat === c ? "bg-gradient-brand text-brand-foreground shadow-brand" : "border border-border hover:border-brand hover:text-brand"}`,
			children: c
		}, c))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-brand",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `relative aspect-[4/3] bg-gradient-to-br ${GRADS[p.cover]}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-end p-6 opacity-0 transition-opacity group-hover:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-foreground",
						children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium text-brand",
						children: p.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-semibold",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 text-sm text-muted-foreground",
						children: [
							p.client,
							" · ",
							p.date
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-1.5",
						children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground",
							children: t
						}, t))
					})
				]
			})]
		}, p.id))
	})] })] });
}
//#endregion
export { PortfolioPage as component };
