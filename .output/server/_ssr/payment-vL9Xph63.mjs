import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as LoaderCircle, I as CircleX, L as CircleCheck, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { d as formatNaira, u as WEB_PACKAGES } from "./site-data-B4-xSq8U.mjs";
import { t as Section } from "./section-CFFPWMY7.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-CEBS3BWt.mjs";
import { a as objectType, i as numberType, o as stringType, r as literalType } from "../_libs/zod.mjs";
import { t as Route } from "./payment-DA9ZM6IN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-vL9Xph63.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var InitSchema = objectType({
	email: stringType().trim().email(),
	fullName: stringType().trim().min(2).max(120),
	phone: stringType().trim().max(30).optional().or(literalType("")),
	packageName: stringType().trim().min(2).max(120),
	amount: numberType().int().positive().max(1e10)
});
var initializePaystack = createServerFn({ method: "POST" }).inputValidator((data) => InitSchema.parse(data)).handler(createSsrRpc("4be9ea1325ea6f874d708a9f6a3bb3a4a9555b46a12e71de7a909d1ba030ca33"));
var VerifySchema = objectType({ reference: stringType().trim().min(4).max(120) });
var verifyPaystack = createServerFn({ method: "POST" }).inputValidator((data) => VerifySchema.parse(data)).handler(createSsrRpc("95a22720f770d48d5a013999e5377dad1e77ac8e4583dafdb551f1ef5f4198e7"));
function PaymentPage() {
	const search = Route.useSearch();
	const navigate = Route.useNavigate();
	const init = useServerFn(initializePaystack);
	const verify = useServerFn(verifyPaystack);
	const [state, setState] = (0, import_react.useState)({ phase: "form" });
	(0, import_react.useEffect)(() => {
		const ref = search.reference || search.trxref;
		if (!ref || state.phase !== "form") return;
		setState({ phase: "verifying" });
		verify({ data: { reference: ref } }).then((r) => {
			if (r.success) setState({
				phase: "success",
				ref,
				amountKobo: r.amountKobo
			});
			else setState({
				phase: "failed",
				ref,
				reason: r.status
			});
		}).catch((e) => setState({
			phase: "failed",
			ref,
			reason: e?.message
		}));
	}, []);
	const onSubmit = async (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const packageName = String(fd.get("packageName") || search.pkg || "Custom Package");
		const amount = Number(fd.get("amount") || search.amount || 0);
		if (!amount || amount < 100) {
			setState({
				phase: "form",
				error: "Enter a valid amount (min ₦100)."
			});
			return;
		}
		setState({ phase: "loading" });
		try {
			const res = await init({ data: {
				email: String(fd.get("email") || ""),
				fullName: String(fd.get("fullName") || ""),
				phone: String(fd.get("phone") || ""),
				packageName,
				amount
			} });
			window.location.href = res.authorizationUrl;
		} catch (err) {
			setState({
				phase: "form",
				error: err?.message || "Could not start payment."
			});
		}
	};
	if (state.phase === "verifying") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		title: "Verifying your payment…",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto h-10 w-10 animate-spin text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted-foreground",
			children: "Please wait while we confirm your transaction."
		})]
	});
	if (state.phase === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		title: "Payment successful",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-16 w-16 text-brand" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-2xl font-bold",
				children: "Thank you!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted-foreground",
				children: [
					"Your payment of ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: formatNaira(state.amountKobo / 100)
					}),
					" is confirmed."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: ["Ref: ", state.ref]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground",
					children: "Back home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setState({ phase: "form" });
						navigate({ search: {} });
					},
					className: "rounded-full border border-border px-6 py-3 text-sm font-semibold",
					children: "Another payment"
				})]
			})
		]
	});
	if (state.phase === "failed") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		title: "Payment not completed",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mx-auto h-16 w-16 text-destructive" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted-foreground",
				children: [
					"We couldn't verify your transaction ",
					state.reason ? `(${state.reason})` : "",
					". No charge is final until we confirm it."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: ["Ref: ", state.ref]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setState({ phase: "form" });
						navigate({ search: {} });
					},
					className: "rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground",
					children: "Try again"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "rounded-full border border-border px-6 py-3 text-sm font-semibold",
					children: "Contact support"
				})]
			})
		]
	});
	const initialPkg = search.pkg ?? "";
	const initialAmount = search.amount ?? "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-hero py-16 text-center sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand",
					children: "Payment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 text-4xl font-bold sm:text-5xl",
					children: [
						"Secure ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "Paystack"
						}),
						" checkout"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-xl text-muted-foreground",
					children: "Pay for a fixed package or fund a custom quotation. Cards, bank transfer, USSD."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-2xl gap-6 rounded-3xl border border-border bg-card p-8 shadow-elegant",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium",
						children: "Package"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						name: "packageName",
						defaultValue: initialPkg,
						className: "rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:ring-2 focus:ring-brand/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "— Custom quotation —"
						}), WEB_PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: p.name,
							children: [
								p.name,
								" — ",
								formatNaira(p.price)
							]
						}, p.name))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium",
						children: "Amount (₦)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 100,
						required: true,
						name: "amount",
						defaultValue: initialAmount || "",
						className: "rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:ring-2 focus:ring-brand/20",
						placeholder: "e.g. 500000"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							name: "fullName",
							label: "Full name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							name: "phone",
							label: "Phone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								name: "email",
								label: "Email",
								type: "email",
								required: true
							})
						})
					]
				}),
				"error" in state && state.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive",
					children: state.error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: state.phase === "loading",
					className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand disabled:opacity-60",
					children: [state.phase === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), state.phase === "loading" ? "Redirecting to Paystack…" : "Pay securely with Paystack"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center justify-center gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), " Payments processed by Paystack. We never store your card details."]
				})
			]
		})
	}) })] });
}
function TextField({ name, label, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "text-sm font-medium",
			htmlFor: name,
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-brand",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			type,
			required,
			className: "rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:ring-2 focus:ring-brand/20"
		})]
	});
}
function PageShell({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Payment",
		title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-lg rounded-3xl border border-border bg-card p-10 text-center shadow-elegant",
			children
		})
	});
}
//#endregion
export { PaymentPage as component };
