import {
  Globe, Smartphone, Code2, PenTool, Palette, Image as ImageIcon,
  Network, Server, ShieldCheck, LifeBuoy, Cloud, Megaphone,
} from "lucide-react";

export const COMPANY = {
  name: "Vixe Creatives Limited",
  logo: "/vixelogo.png",
  short: "/vixename1.png",
  shortDark: "/vixename2.png",
  tagline: "Transforming Ideas Into Powerful Digital Solutions",
  location: "Abuja, Nigeria",
  address: "Abuja, FCT, Nigeria",
  email: "vixe.xed@gmail.com",
  phone: "+234 807 465 7635",
  whatsapp: "2348074657635",
  hours: "Mon – Fri · 9:00 – 18:00 WAT",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/consultation", label: "Consultation" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "100+", label: "Happy Clients" },
  { value: "25+", label: "Business Partners" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Technical Support" },
];

export const SERVICES = [
  {
    icon: Globe, slug: "web", title: "Website Development",
    description: "Blazing-fast, SEO-first websites engineered to convert visitors into customers.",
    from: 180000,
    features: ["Custom design", "SEO ready", "Mobile-first", "Analytics"],
  },
  {
    icon: Smartphone, slug: "mobile", title: "Mobile Applications",
    description: "Android, iOS and cross-platform apps built for scale and delightful UX.",
    from: 1500000,
    features: ["iOS & Android", "Offline support", "Push notifications", "App Store publishing"],
  },
  {
    icon: Code2, slug: "software", title: "Custom Software",
    description: "ERP, CRM, HR, POS, hospital & school systems tailored to your operations.",
    from: 2500000,
    features: ["Bespoke modules", "Role-based access", "Reports & analytics", "Integrations"],
  },
  {
    icon: PenTool, slug: "uiux", title: "UI/UX Design",
    description: "Human-centred interfaces designed to be beautiful, fast and unmistakable.",
    from: 250000,
    features: ["User research", "Wireframes", "Prototypes", "Design systems"],
  },
  {
    icon: Palette, slug: "branding", title: "Branding",
    description: "Distinctive brand identities, guidelines and stationery that command trust.",
    from: 300000,
    features: ["Logo suite", "Brand guidelines", "Stationery", "Marketing assets"],
  },
  {
    icon: ImageIcon, slug: "graphics", title: "Graphics Design",
    description: "Flyers, brochures, company profiles and social designs that stop the scroll.",
    from: 50000,
    features: ["Flyers & brochures", "Company profiles", "Presentation decks", "Social kits"],
  },
  {
    icon: Network, slug: "networking", title: "Networking Solutions",
    description: "Office & enterprise networking, structured cabling and secure Wi-Fi at scale.",
    from: 800000,
    features: ["Structured cabling", "Wi-Fi deployment", "Network security", "Server rooms"],
  },
  {
    icon: Server, slug: "hardware", title: "Hardware Solutions",
    description: "Workstations, servers, POS, printers — procurement, install and maintenance.",
    from: 500000,
    features: ["Procurement", "Installation", "Maintenance", "Warranty support"],
  },
  {
    icon: ShieldCheck, slug: "security", title: "CCTV & Security",
    description: "CCTV, access control and intercoms for smart, safer premises.",
    from: 600000,
    features: ["HD CCTV", "Access control", "Intercom", "Smart office"],
  },
  {
    icon: LifeBuoy, slug: "support", title: "IT Support",
    description: "Preventive maintenance and 24/7 remote support to keep you running.",
    from: 150000,
    features: ["Remote support", "AMC contracts", "Server maintenance", "Onsite visits"],
  },
  {
    icon: Cloud, slug: "cloud", title: "Cloud Solutions",
    description: "Microsoft 365, Google Workspace, hosting, backup and cloud migration.",
    from: 100000,
    features: ["M365 / Workspace", "Hosting & domains", "SSL", "Cloud migration"],
  },
  {
    icon: Megaphone, slug: "marketing", title: "Digital Marketing",
    description: "SEO, Google & Meta Ads, and content that puts your brand in front of buyers.",
    from: 250000,
    features: ["SEO", "Paid ads", "Email marketing", "Social management"],
  },
];

export const WEB_PACKAGES = [
  { name: "Landing Page", price: 180000, delivery: "5 days", revisions: "2 rounds", support: "1 month" },
  { name: "Portfolio Website", price: 250000, delivery: "7 days", revisions: "3 rounds", support: "1 month" },
  { name: "Personal Website", price: 350000, delivery: "10 days", revisions: "3 rounds", support: "2 months" },
  { name: "NGO Website", price: 600000, delivery: "3 weeks", revisions: "4 rounds", support: "3 months", highlight: false },
  { name: "E-commerce Website", price: 800000, delivery: "4 weeks", revisions: "4 rounds", support: "3 months" },
  { name: "Company Website", price: 900000, delivery: "3 weeks", revisions: "4 rounds", support: "3 months", highlight: true },
  { name: "School Website", price: 1000000, delivery: "4 weeks", revisions: "4 rounds", support: "3 months" },
  { name: "Hospital Website", price: 1200000, delivery: "5 weeks", revisions: "5 rounds", support: "3 months" },
  { name: "Membership Website", price: 1200000, delivery: "5 weeks", revisions: "5 rounds", support: "3 months" },
  { name: "Booking System", price: 1300000, delivery: "6 weeks", revisions: "5 rounds", support: "6 months" },
  { name: "Real Estate Website", price: 1500000, delivery: "6 weeks", revisions: "5 rounds", support: "6 months" },
  { name: "Marketplace Platform", price: 2500000, delivery: "8 weeks", revisions: "6 rounds", support: "6 months" },
  { name: "Enterprise Website", price: 3500000, delivery: "10+ weeks", revisions: "Unlimited", support: "12 months" },
];

export const PORTFOLIO = [
  { id: 1, category: "Websites", title: "Zenith Corporate Site", client: "Zenith Group", tech: ["Next.js", "Tailwind"], date: "2025", cover: "grad-1" },
  { id: 2, category: "Mobile Apps", title: "PaySwift Wallet", client: "PaySwift NG", tech: ["React Native", "Node"], date: "2025", cover: "grad-2" },
  { id: 3, category: "Software", title: "MediCore HMS", client: "St. Anne Hospital", tech: ["Laravel", "MySQL"], date: "2024", cover: "grad-3" },
  { id: 4, category: "Branding", title: "Nova Coffee Rebrand", client: "Nova Coffee", tech: ["Identity", "Print"], date: "2024", cover: "grad-4" },
  { id: 5, category: "UI/UX", title: "FinPeak Dashboard", client: "FinPeak", tech: ["Figma", "Design System"], date: "2025", cover: "grad-5" },
  { id: 6, category: "Networking", title: "HQ Structured Cabling", client: "Delta Energy", tech: ["Cat6", "Fiber"], date: "2024", cover: "grad-6" },
  { id: 7, category: "Cloud Projects", title: "M365 Migration — 400 seats", client: "Prime Realty", tech: ["Microsoft 365"], date: "2025", cover: "grad-7" },
  { id: 8, category: "Websites", title: "Kairos E-commerce", client: "Kairos Store", tech: ["Shopify", "React"], date: "2025", cover: "grad-8" },
  { id: 9, category: "Graphics", title: "Annual Report 2024", client: "AbujaCo", tech: ["InDesign"], date: "2024", cover: "grad-9" },
];

export const TESTIMONIALS = [
  { name: "Adaeze O.", role: "CEO, Zenith Group", quote: "Vixe rebuilt our web presence and doubled our inbound leads inside 60 days. Ridiculously professional team.", rating: 5 },
  { name: "Ibrahim S.", role: "CTO, PaySwift NG", quote: "They shipped our fintech app faster and cleaner than any team we'd worked with. Full stop.", rating: 5 },
  { name: "Dr. Chidera N.", role: "Director, St. Anne Hospital", quote: "MediCore has transformed how we run patient records. Support is exceptional.", rating: 5 },
  { name: "Tomiwa A.", role: "Founder, Nova Coffee", quote: "Our new brand feels like us — only ten times sharper. Customers notice.", rating: 5 },
];

export const CLIENTS = ["Zenith Group","PaySwift","MediCore","Nova Coffee","FinPeak","Delta Energy","Prime Realty","Kairos","AbujaCo","Sahara Bank"];

export const FAQS = [
  { q: "How long does a typical project take?", a: "Landing pages 5–7 days, corporate sites 3–4 weeks, enterprise platforms 8–12 weeks. You'll get a precise timeline after consultation." },
  { q: "Do you offer payment plans?", a: "Yes — 50% deposit to start, 50% on delivery. Enterprise projects use milestone-based schedules." },
  { q: "Do you provide hosting and domains?", a: "We do. We handle domain registration, SSL, managed hosting and email — or we can deploy to your existing setup." },
  { q: "How many revisions are included?", a: "Every package includes multiple revision rounds. Additional rounds are billed at a fixed hourly rate." },
  { q: "Do you offer maintenance after launch?", a: "Yes. All projects include a support window; we also offer monthly and annual maintenance contracts." },
  { q: "Where are you based?", a: `We are headquartered in ${COMPANY.location} and serve clients across Nigeria, Africa and internationally.` },
  { q: "How do payments work?", a: "We accept card, transfer and Paystack. You can pay for fixed packages online or fund a custom quotation directly on our Payment page." },
  { q: "Can I book a free consultation?", a: "Absolutely. Book a virtual, phone or in-person slot on our Consultation page and we'll get back within 24 hours." },
];

export const CERTIFICATIONS = [
  { title: "Certificate of Incorporation", authority: "Corporate Affairs Commission", date: "2022", verified: true },
  { title: "CAC Status Report", authority: "Corporate Affairs Commission", date: "2024", verified: true },
  { title: "Tax Identification Number", authority: "Federal Inland Revenue Service", date: "2022", verified: true },
  { title: "Tax Clearance Certificate", authority: "FIRS", date: "2024", verified: true },
  { title: "Business Premises Permit", authority: "FCT Administration", date: "2024", verified: true },
  { title: "Microsoft Partner", authority: "Microsoft", date: "2024", verified: true },
];

export const formatNaira = (kobo: number) => `₦${kobo.toLocaleString("en-NG")}`;
