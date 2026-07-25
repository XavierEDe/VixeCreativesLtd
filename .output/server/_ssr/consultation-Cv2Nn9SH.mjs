import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as LoaderCircle, L as CircleCheck, n as Video, p as Phone, x as MapPin } from "../_libs/lucide-react.mjs";
import { s as SERVICES } from "./site-data-B4-xSq8U.mjs";
import { t as Section } from "./section-CFFPWMY7.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-CEBS3BWt.mjs";
import { a as objectType, n as enumType, o as stringType, r as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consultation-Cv2Nn9SH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ConsultationSchema = objectType({
	fullName: stringType().trim().min(2).max(120),
	companyName: stringType().trim().max(160).optional().or(literalType("")),
	email: stringType().trim().email().max(255),
	phone: stringType().trim().min(6).max(30),
	service: stringType().trim().min(2).max(120),
	budget: stringType().trim().max(60).optional().or(literalType("")),
	preferredDate: stringType().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
	preferredTime: stringType().trim().min(1).max(20),
	meetingType: enumType([
		"virtual",
		"physical",
		"phone"
	]),
	projectDescription: stringType().trim().min(10).max(4e3)
});
var bookConsultation = createServerFn({ method: "POST" }).inputValidator((data) => ConsultationSchema.parse(data)).handler(createSsrRpc("1369b9ba56477f0c717a25af5e91197adc1d22b919e0a2b4ba443a291044f7eb"));
var TIME_SLOTS = [
	"09:00",
	"10:00",
	"11:00",
	"12:00",
	"14:00",
	"15:00",
	"16:00",
	"17:00"
];
var BUDGETS = [
	"Under ₦500,000",
	"₦500,000 – ₦2,000,000",
	"₦2,000,000 – ₦5,000,000",
	"₦5,000,000+"
];
function ConsultationPage() {
	const submit = useServerFn(bookConsultation);
	const [state, setState] = (0, import_react.useState)({
		loading: false,
		ok: false
	});
	const [meetingType, setMeetingType] = (0, import_react.useState)("virtual");
	const onSubmit = async (e) => {
		e.preventDefault();
		setState({
			loading: true,
			ok: false
		});
		const fd = new FormData(e.currentTarget);
		try {
			await submit({ data: {
				fullName: String(fd.get("fullName") || ""),
				companyName: String(fd.get("companyName") || ""),
				email: String(fd.get("email") || ""),
				phone: String(fd.get("phone") || ""),
				service: String(fd.get("service") || ""),
				budget: String(fd.get("budget") || ""),
				preferredDate: String(fd.get("preferredDate") || ""),
				preferredTime: String(fd.get("preferredTime") || ""),
				meetingType,
				projectDescription: String(fd.get("projectDescription") || "")
			} });
			setState({
				loading: false,
				ok: true
			});
			e.target.reset();
		} catch (err) {
			setState({
				loading: false,
				ok: false,
				error: err?.message || "Something went wrong."
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-hero py-20 text-center sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand",
					children: "Consultation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-6 text-4xl font-bold sm:text-5xl",
					children: ["Book a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "free consultation"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg",
					children: "Virtual, phone or in-person in Abuja. We'll respond within 24 hours."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-4xl gap-8 rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-10",
		children: state.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-16 w-16 text-brand" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl font-bold",
					children: "Booking received!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "We'll email you within 24 hours to confirm your slot."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setState({
						loading: false,
						ok: false
					}),
					className: "mt-6 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground",
					children: "Book another"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "grid gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium",
						children: "Meeting type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							{
								v: "virtual",
								label: "Virtual",
								Icon: Video
							},
							{
								v: "physical",
								label: "In-person (Abuja)",
								Icon: MapPin
							},
							{
								v: "phone",
								label: "Phone call",
								Icon: Phone
							}
						].map(({ v, label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMeetingType(v),
							className: `flex items-center gap-2 rounded-xl border p-3 text-sm font-medium transition-colors ${meetingType === v ? "border-brand bg-brand/10 text-brand" : "border-border hover:border-brand/40"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }),
								" ",
								label
							]
						}, v))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "fullName",
							label: "Full name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "companyName",
							label: "Company (optional)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "email",
							label: "Email",
							type: "email",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "phone",
							label: "Phone number",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							name: "service",
							label: "Service",
							required: true,
							options: SERVICES.map((s) => s.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							name: "budget",
							label: "Budget",
							options: BUDGETS
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "preferredDate",
							label: "Preferred date",
							type: "date",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							name: "preferredTime",
							label: "Preferred time",
							required: true,
							options: TIME_SLOTS
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-medium",
						htmlFor: "projectDescription",
						children: ["Project description ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "*"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "projectDescription",
						id: "projectDescription",
						required: true,
						minLength: 10,
						maxLength: 4e3,
						rows: 5,
						className: "rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
						placeholder: "Tell us what you'd like to build…"
					})]
				}),
				state.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive",
					children: state.error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: state.loading,
					className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand disabled:opacity-60",
					children: [
						state.loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
						" ",
						state.loading ? "Sending…" : "Book Consultation"
					]
				})
			]
		})
	}) })] });
}
function Field({ name, label, type = "text", required }) {
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
			className: "rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
		})]
	});
}
function SelectField({ name, label, options, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "text-sm font-medium",
			htmlFor: name,
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-brand",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			id: name,
			name,
			required,
			className: "rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "Select…"
			}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))]
		})]
	});
}
//#endregion
export { ConsultationPage as component };
