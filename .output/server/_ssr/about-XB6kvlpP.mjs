import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { O as Heart, a as Target, f as Rocket, r as Users } from "../_libs/lucide-react.mjs";
import { c as STATS, r as COMPANY } from "./site-data-B4-xSq8U.mjs";
import { t as Section } from "./section-CFFPWMY7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-XB6kvlpP.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-20 text-center sm:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand",
						children: "About us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl",
						children: ["Africa's most trusted ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "technology partner"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg",
						children: [
							"Founded in ",
							COMPANY.location,
							", Vixe Creatives Limited exists to give ambitious businesses across Africa and beyond the digital tools and infrastructure they need to lead their industries."
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Our story",
			title: "From a small studio to a full-service technology company",
			align: "left",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground leading-relaxed",
					children: "What started as a small design studio in Abuja has grown into a multi-disciplinary technology company delivering websites, mobile apps, enterprise software, networking, cloud and branding. Along the way we've built for banks, hospitals, schools, retailers, NGOs and government-adjacent teams — always with the same obsession for craft."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground leading-relaxed",
					children: "Today, Vixe Creatives Limited is a registered Nigerian company (CAC) with clients across West Africa and internationally. Our team blends senior engineers, designers and network specialists into one delivery unit — so nothing falls between the cracks."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueCard, {
						icon: Target,
						title: "Mission",
						body: "Deliver innovative technology solutions that empower businesses through digital transformation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueCard, {
						icon: Rocket,
						title: "Vision",
						body: "Become Africa's most trusted technology solutions company."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueCard, {
						icon: Heart,
						title: "Values",
						body: "Craft, honesty, speed, and long-term partnership. We stay past launch."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "By the numbers",
			title: "Trusted work, measured in outcomes",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-6 md:grid-cols-5",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl font-bold text-gradient-brand",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-xs text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Leadership",
			title: "A team you can call by name",
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					["Managing Director", "Leads company strategy and client relations."],
					["Head of Engineering", "Owns our software delivery and technical standards."],
					["Head of Design", "Champions brand and product craft."],
					["Head of Infrastructure", "Runs networking, hardware and cloud."]
				].map(([role, bio]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-brand-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-semibold",
							children: role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: bio
						})
					]
				}, role))
			})
		})
	] });
}
function ValueCard({ icon: Icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-xl font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: body
			})
		]
	});
}
//#endregion
export { AboutPage as component };
