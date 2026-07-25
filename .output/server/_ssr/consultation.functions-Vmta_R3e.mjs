import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as objectType, n as enumType, o as stringType, r as literalType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consultation.functions-Vmta_R3e.js
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
var bookConsultation_createServerFn_handler = createServerRpc({
	id: "1369b9ba56477f0c717a25af5e91197adc1d22b919e0a2b4ba443a291044f7eb",
	name: "bookConsultation",
	filename: "src/lib/consultation.functions.ts"
}, (opts) => bookConsultation.__executeServer(opts));
var bookConsultation = createServerFn({ method: "POST" }).inputValidator((data) => ConsultationSchema.parse(data)).handler(bookConsultation_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { error } = await supabaseAdmin.from("consultations").insert({
		full_name: data.fullName,
		company_name: data.companyName || null,
		email: data.email,
		phone: data.phone,
		service: data.service,
		budget: data.budget || null,
		preferred_date: data.preferredDate,
		preferred_time: data.preferredTime,
		meeting_type: data.meetingType,
		project_description: data.projectDescription
	});
	if (error) {
		console.error("[consultation] insert failed:", error);
		throw new Error("Could not save your booking. Please try again.");
	}
	return { ok: true };
});
//#endregion
export { bookConsultation_createServerFn_handler };
