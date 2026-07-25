import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { E as Instagram, S as Mail, _ as Moon, i as Twitter, j as Facebook, o as Sun, p as Phone, t as X, w as Linkedin, x as MapPin, y as Menu } from "../_libs/lucide-react.mjs";
import { a as NAV_LINKS, i as FAQS, r as COMPANY } from "./site-data-B4-xSq8U.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$11 } from "./payment-DA9ZM6IN.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Vpq_3Hah.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-laEI0TxC.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function getInitialTheme() {
	if (typeof window === "undefined") return "dark";
	const stored = window.localStorage.getItem("vixe-theme");
	if (stored === "light" || stored === "dark") return stored;
	return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(theme) {
	if (typeof document === "undefined") return;
	document.documentElement.classList.toggle("dark", theme === "dark");
	window.localStorage.setItem("vixe-theme", theme);
}
function ThemeToggle() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const t = getInitialTheme();
		setTheme(t);
		applyTheme(t);
		setMounted(true);
	}, []);
	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		applyTheme(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggle,
		"aria-label": "Toggle theme",
		className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-elevated text-foreground transition-colors hover:bg-accent",
		children: mounted && theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 transition-all ${scrolled ? "glass shadow-elegant" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 font-semibold tracking-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-brand-foreground shadow-brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold",
							children: "V"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base",
						children: COMPANY.short
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						activeProps: { className: "text-brand" },
						inactiveProps: { className: "text-foreground/70 hover:text-foreground" },
						className: "rounded-md px-3 py-2 text-sm font-medium transition-colors",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/consultation",
							className: "hidden rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-brand-foreground shadow-brand transition-transform hover:scale-[1.02] sm:inline-flex",
							children: "Get Started"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(!open),
							className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border lg:hidden",
							"aria-label": "Toggle menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-surface-elevated lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container-x flex flex-col py-3",
				children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent",
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/payment",
					onClick: () => setOpen(false),
					className: "mt-2 rounded-md bg-gradient-brand px-3 py-2.5 text-center text-sm font-semibold text-brand-foreground",
					children: "Pay Now"
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-10 py-16 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-brand-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold",
								children: "V"
							})
						}), COMPANY.short]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground",
						children: [COMPANY.tagline, ". Building Africa's next generation of digital experiences."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: [
							Twitter,
							Linkedin,
							Instagram,
							Facebook
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "social",
							className: "grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 transition-colors hover:border-brand hover:text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Company",
					links: [
						["/about", "About"],
						["/portfolio", "Portfolio"],
						["/consultation", "Consultation"],
						["/contact", "Contact"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Services",
					links: [
						["/services", "All Services"],
						["/pricing", "Pricing"],
						["/payment", "Make Payment"],
						["/faq", "FAQ"]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-4 text-sm font-semibold",
					children: "Get in touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-brand" }), COMPANY.address]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${COMPANY.email}`,
								className: "hover:text-foreground",
								children: COMPANY.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${COMPANY.phone}`,
								className: "hover:text-foreground",
								children: COMPANY.phone
							})]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					COMPANY.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Terms & Conditions"
					})]
				})]
			})
		})]
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "mb-4 text-sm font-semibold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2 text-sm text-muted-foreground",
		children: links.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to,
			className: "hover:text-foreground",
			children: label
		}) }, to))
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-8xl font-bold text-gradient-brand",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-md text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-8 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-brand",
					children: "Back home"
				})
			]
		})]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "We hit an unexpected error. Try again or go home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-brand-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-input px-4 py-2 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Vixe Creatives Limited — Premium Technology Solutions in Abuja" },
			{
				name: "description",
				content: "Vixe Creatives builds websites, mobile apps, custom software, networking, cloud and branding solutions from Abuja, Nigeria."
			},
			{
				name: "author",
				content: "Vixe Creatives Limited"
			},
			{
				property: "og:site_name",
				content: "Vixe Creatives Limited"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#0a0a0a"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			}
		],
		scripts: [{ children: `(function(){try{var t=localStorage.getItem('vixe-theme');if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();` }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-background text-foreground",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-DudT20j9.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Vixe Creatives — Websites, Apps, Software & Cloud in Abuja" },
			{
				name: "description",
				content: "Premium technology solutions from Abuja: websites, mobile apps, custom software, cloud, networking, hardware and branding for ambitious businesses."
			},
			{
				property: "og:title",
				content: "Vixe Creatives — Premium Technology Solutions"
			},
			{
				property: "og:description",
				content: "We transform ideas into powerful digital solutions. Based in Abuja, serving Africa and the world."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-XB6kvlpP.mjs");
var Route$8 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Vixe Creatives — Our Story, Mission & Team" },
			{
				name: "description",
				content: "Vixe Creatives Limited is Abuja's premium technology partner. Learn our mission, vision and the values behind our work."
			},
			{
				property: "og:title",
				content: "About Vixe Creatives"
			},
			{
				property: "og:description",
				content: "Our story, mission, vision and leadership."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./certifications-DSNGre14.mjs");
var Route$7 = createFileRoute("/certifications")({
	head: () => ({
		meta: [
			{ title: "Registration & Certifications — Vixe Creatives" },
			{
				name: "description",
				content: "Vixe Creatives Limited registration, CAC, tax and professional certifications."
			},
			{
				property: "og:title",
				content: "Registration & Certifications — Vixe Creatives"
			},
			{
				property: "og:description",
				content: "Our registration and professional certifications."
			},
			{
				property: "og:url",
				content: "/certifications"
			}
		],
		links: [{
			rel: "canonical",
			href: "/certifications"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./consultation-Cv2Nn9SH.mjs");
var Route$6 = createFileRoute("/consultation")({
	head: () => ({
		meta: [
			{ title: "Book a Consultation — Vixe Creatives" },
			{
				name: "description",
				content: "Book a free virtual, phone or in-person consultation with Vixe Creatives. We reply within 24 hours."
			},
			{
				property: "og:title",
				content: "Book a Consultation — Vixe Creatives"
			},
			{
				property: "og:description",
				content: "Book a free consultation with our team in Abuja."
			},
			{
				property: "og:url",
				content: "/consultation"
			}
		],
		links: [{
			rel: "canonical",
			href: "/consultation"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-DSmJndCi.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Vixe Creatives — Get in Touch" },
			{
				name: "description",
				content: "Reach Vixe Creatives in Abuja by phone, email or WhatsApp. Business hours, address and quick contact form."
			},
			{
				property: "og:title",
				content: "Contact Vixe Creatives"
			},
			{
				property: "og:description",
				content: "Get in touch with our team in Abuja, Nigeria."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./faq-BKgJlHR1.mjs");
var Route$4 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "FAQ — Vixe Creatives" },
			{
				name: "description",
				content: "Answers to common questions about pricing, timelines, hosting, revisions, payments and support."
			},
			{
				property: "og:title",
				content: "FAQ — Vixe Creatives"
			},
			{
				property: "og:description",
				content: "Common questions answered."
			},
			{
				property: "og:url",
				content: "/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: FAQS.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./portfolio-D1Ji3zQO.mjs");
var Route$3 = createFileRoute("/portfolio")({
	head: () => ({
		meta: [
			{ title: "Portfolio — Vixe Creatives Selected Work" },
			{
				name: "description",
				content: "Selected work by Vixe Creatives: websites, mobile apps, custom software, cloud, networking and branding projects."
			},
			{
				property: "og:title",
				content: "Portfolio — Vixe Creatives"
			},
			{
				property: "og:description",
				content: "A look at recent websites, apps, software and infrastructure projects."
			},
			{
				property: "og:url",
				content: "/portfolio"
			}
		],
		links: [{
			rel: "canonical",
			href: "/portfolio"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./pricing-BrDi-JXT.mjs");
var Route$2 = createFileRoute("/pricing")({
	head: () => ({
		meta: [
			{ title: "Pricing — Vixe Creatives Website Packages" },
			{
				name: "description",
				content: "Transparent website packages from Vixe Creatives — landing pages, corporate sites, e-commerce, enterprise platforms and more."
			},
			{
				property: "og:title",
				content: "Pricing — Vixe Creatives"
			},
			{
				property: "og:description",
				content: "Fixed-price packages and custom quotations for websites, apps and software."
			},
			{
				property: "og:url",
				content: "/pricing"
			}
		],
		links: [{
			rel: "canonical",
			href: "/pricing"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-BL1osRR1.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Services — Vixe Creatives (Web, Mobile, Software, Cloud)" },
			{
				name: "description",
				content: "Full-service technology solutions: websites, mobile apps, custom software, UI/UX, branding, networking, hardware, cloud, IT support and digital marketing."
			},
			{
				property: "og:title",
				content: "Vixe Creatives — Services"
			},
			{
				property: "og:description",
				content: "Websites, mobile apps, software, cloud, networking, hardware and branding."
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var BASE_URL = "";
var Route = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/services",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/portfolio",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/pricing",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/consultation",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/certifications",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/faq",
				changefreq: "monthly",
				priority: "0.6"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	AboutRoute: Route$8.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$10
	}),
	CertificationsRoute: Route$7.update({
		id: "/certifications",
		path: "/certifications",
		getParentRoute: () => Route$10
	}),
	ConsultationRoute: Route$6.update({
		id: "/consultation",
		path: "/consultation",
		getParentRoute: () => Route$10
	}),
	ContactRoute: Route$5.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$10
	}),
	FaqRoute: Route$4.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$10
	}),
	PaymentRoute: Route$11.update({
		id: "/payment",
		path: "/payment",
		getParentRoute: () => Route$10
	}),
	PortfolioRoute: Route$3.update({
		id: "/portfolio",
		path: "/portfolio",
		getParentRoute: () => Route$10
	}),
	PricingRoute: Route$2.update({
		id: "/pricing",
		path: "/pricing",
		getParentRoute: () => Route$10
	}),
	ServicesRoute: Route$1.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$10
	}),
	SitemapDotxmlRoute: Route.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
