import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-CFFPWMY7.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ eyebrow, title, description, children, className = "", align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `container-x py-20 sm:py-24 ${className}`,
		children: [(eyebrow || title || description) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`,
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand",
					children: eyebrow
				}),
				title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-bold sm:text-4xl md:text-5xl",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base text-muted-foreground sm:text-lg",
					children: description
				})
			]
		}), children]
	});
}
//#endregion
export { Section as t };
