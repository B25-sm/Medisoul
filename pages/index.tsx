import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import ProductCarousel from "@/components/ProductCarousel";

/**
 * Premium Tyent-style site replica (Medisoul)
 * - Added premium sections matching the reference nav (without copying):
 *   Top Info Bar, Home, About, Products, Benefits, Why Brand, Why Water Ionizer,
 *   Certifications, Blogs, Testimonials, Contact, Footer
 * - Kept shadcn/ui + Tailwind + Framer Motion
 * - No external icon CDN. Inline SVGs only.
 * - Fixed JSX (no stray braces) and kept existing tests intact.
 * - Added MORE tests for new sections (at bottom) without changing existing ones.
 */

/**********************
 * Inline SVG Icons   *
 **********************/
const base = "h-6 w-6";
const merge = (a?: string) => [base, a].filter(Boolean).join(" ");

export function WaterIcon({ className }: { className?: string }) {
  return (
    <svg className={merge(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2c-3 4.5-7 8.2-7 12a7 7 0 1 0 14 0c0-3.8-4-7.5-7-12z"/>
    </svg>
  );
}

export function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={merge(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"/>
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={merge(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.8 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={merge(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={merge(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.92 4.2 2 2 0 0 1 4.92 2h2a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.02a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={merge(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={merge(className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 12.39A2 2 0 0 0 9.62 15h8.76a2 2 0 0 0 2-1.61L22 8H6"/>
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={merge(className)} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5,3 19,12 5,21"/>
    </svg>
  );
}

/**********************
 * Inline SVG Illustrations (local)
 **********************/
function HeroWaveSVG() {
  return (
    <svg viewBox="0 0 600 450" role="img" aria-label="Water waves" className="w-full h-auto rounded-3xl shadow-xl ring-1 ring-black/5">
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#bfdbfe"/>
          <stop offset="100%" stopColor="#ffffff"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="600" height="450" fill="url(#g1)"/>
      <g fill="none" stroke="#3b82f6" strokeWidth="3" opacity="0.6">
        <path d="M0 320 C 80 300, 120 360, 200 340 S 320 300, 400 330 520 360, 600 330"/>
        <path d="M0 360 C 80 340, 120 400, 200 380 S 320 340, 400 370 520 400, 600 370" opacity="0.4"/>
        <path d="M0 280 C 80 260, 120 320, 200 300 S 320 260, 400 290 520 320, 600 290" opacity="0.3"/>
      </g>
      <g>
        <rect x="380" y="120" rx="14" width="120" height="160" fill="#ffffff" stroke="#93c5fd"/>
        <rect x="395" y="140" rx="8" width="90" height="80" fill="#e0f2fe"/>
        <rect x="410" y="230" rx="6" width="60" height="14" fill="#93c5fd"/>
        <circle cx="505" cy="140" r="8" fill="#3b82f6"/>
      </g>
    </svg>
  );
}

function IonizerSVG({ label = "Ionizer" }: { label?: string }) {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" role="img" aria-label={label} data-testid="product-illustration">
      <defs>
        <linearGradient id="panel" x1="0" x2="1">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#e5f0ff"/>
        </linearGradient>
      </defs>
      <rect x="16" y="24" width="200" height="180" rx="16" fill="url(#panel)" stroke="#c7d2fe"/>
      <rect x="36" y="44" width="160" height="90" rx="10" fill="#dbeafe"/>
      <rect x="60" y="150" width="112" height="16" rx="8" fill="#93c5fd"/>
      <circle cx="186" cy="54" r="6" fill="#3b82f6"/>
      <g stroke="#64748b" strokeWidth="6" fill="none">
        <path d="M216 64 C 260 64, 260 110, 300 110"/>
      </g>
      <rect x="260" y="96" width="12" height="40" rx="6" fill="#334155"/>
      <circle cx="266" cy="142" r="6" fill="#38bdf8"/>
    </svg>
  );
}

function FaucetUnderCounterSVG() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" role="img" aria-label="Under-counter faucet" data-testid="product-illustration">
      <rect x="20" y="160" width="280" height="40" rx="8" fill="#e2e8f0"/>
      <g stroke="#475569" strokeWidth="10" fill="none">
        <path d="M70 160 v-70 a40 40 0 0 1 40 -40 h80"/>
      </g>
      <circle cx="70" cy="160" r="8" fill="#0ea5e9"/>
      <rect x="220" y="38" width="24" height="16" rx="4" fill="#38bdf8"/>
    </svg>
  );
}

function HydrogenSVG() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" role="img" aria-label="Hydrogen generator" data-testid="product-illustration">
      <rect x="40" y="40" width="160" height="160" rx="16" fill="#ecfeff" stroke="#99f6e4"/>
      <circle cx="120" cy="120" r="46" fill="#a7f3d0"/>
      <text x="120" y="126" textAnchor="middle" fontSize="28" fill="#134e4a">H₂</text>
      <circle cx="230" cy="120" r="30" fill="#bae6fd"/>
    </svg>
  );
}

function IndustrialSVG() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" role="img" aria-label="Industrial system" data-testid="product-illustration">
      <rect x="24" y="60" width="120" height="120" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
      <rect x="160" y="60" width="120" height="120" rx="8" fill="#e2e8f0" stroke="#cbd5e1"/>
      <rect x="44" y="80" width="80" height="16" rx="4" fill="#94a3b8"/>
      <rect x="44" y="104" width="80" height="16" rx="4" fill="#94a3b8"/>
      <rect x="44" y="128" width="80" height="16" rx="4" fill="#94a3b8"/>
      <rect x="180" y="86" width="40" height="68" rx="6" fill="#60a5fa"/>
    </svg>
  );
}

function illustrationForProduct(tag: string, name: string) {
  const key = (tag + " " + name).toLowerCase();
  if (key.includes("under")) return <FaucetUnderCounterSVG/>;
  if (key.includes("hydrogen")) return <HydrogenSVG/>;
  if (key.includes("industrial")) return <IndustrialSVG/>;
  return <IonizerSVG label={name}/>;
}

/**********************
 * Data Models        *
 **********************/
const features = [
  {
    icon: <WaterIcon className="h-6 w-6" />,
    title: "Hydrogen-Rich Water",
    desc: "Electrolysis infuses molecular hydrogen (H₂) for selective antioxidant action.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Dual Ultra Filtration",
    desc: "Multi-stage filters with carbon, ceramic & vitamin-C media to reduce chlorine, sediments, heavy metals.",
  },
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "Adjustable pH & ORP",
    desc: "Drinking pH 8.5-9.5, cleaning up to pH 10; strong acidic stream for hygiene around pH ≤2.7.",
  },
  {
    icon: <CheckIcon className="h-6 w-6" />,
    title: "Micro-Clustering",
    desc: "Smaller water clusters improve hydration and nutrient transport.",
  },
];

const products = [
  // MSL Series (Residential) - Black Variants
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-5",
    name: "MSL-5 Ionizer",
    color: "Black",
    installation: "Counter Top",
    plates: "5 XL Matrix GRID Plates",
    power: "249 Watts",
    pH_range: "3.0 - 9.8",
    max_orp: "-507",
    orp_at_drinkable: "-213 at 9.5 pH",
    warranty: "7 Year",
    bullets: ["5 XL Matrix GRID Plates", "pH Range: 3.0 - 9.8", "Max ORP: -507", "Counter Top Installation"],
    image: "/images/5.jpg"
  },
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-7",
    name: "MSL-7 Ionizer",
    color: "Black",
    installation: "Counter Top or Under Counter",
    plates: "7 XL Matrix GRID Plates",
    power: "450 Watts",
    pH_range: "2.5 - 11.0",
    max_orp: "-705",
    orp_at_drinkable: "-307 at 9.5 pH",
    warranty: "10 Year Parts | Lifetime Labor",
    bullets: ["7 XL Matrix GRID Plates", "pH Range: 2.5 - 11.0", "Max ORP: -705", "450W Power"],
    image: "/images/7.jpg"
  },
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-9",
    name: "MSL-9 Ionizer",
    color: "Black",
    installation: "Counter Top or Under Counter",
    plates: "9 XL Matrix GRID Plates",
    power: "504 Watts",
    pH_range: "2.0 - 11.5",
    max_orp: "-811",
    orp_at_drinkable: "-411 at 9.5 pH",
    warranty: "Lifetime",
    bullets: ["9 XL Matrix GRID Plates", "pH Range: 2.0 - 11.5", "Max ORP: -811", "Lifetime Warranty"],
    image: "/images/9.jpg"
  },
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-11",
    name: "MSL-11 Ionizer",
    color: "Black",
    installation: "Counter Top or Under Counter",
    plates: "11 XL Matrix GRID Plates",
    power: "800 Watts",
    pH_range: "2.0 - 12.0",
    max_orp: "-880",
    orp_at_drinkable: "-559 at 9.5 pH",
    warranty: "Lifetime Labor",
    bullets: ["11 XL Matrix GRID Plates", "pH Range: 2.0 - 12.0", "Max ORP: -880", "800W Power"],
    image: "/images/11.jpg"
  },
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-13",
    name: "MSL-13 Ionizer",
    color: "Black",
    installation: "Counter Top or Under Counter",
    plates: "13 XL Matrix GRID Plates",
    power: "800 Watts",
    pH_range: "1.7 - 12.2",
    max_orp: "-903",
    orp_at_drinkable: "-616 at 9.5 pH",
    warranty: "Lifetime Labor",
    bullets: ["13 XL Matrix GRID Plates", "pH Range: 1.7 - 12.2", "Max ORP: -903", "Advanced Performance"],
    image: "/images/13.jpg"
  },
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-15",
    name: "MSL-15 Ionizer",
    color: "Black",
    installation: "Counter Top or Under Counter",
    plates: "15 XL Matrix GRID Plates",
    power: "800 Watts",
    pH_range: "1.7 - 12.2",
    max_orp: "-1003",
    orp_at_drinkable: "-966 at 9.5 pH",
    warranty: "Lifetime Labor",
    bullets: ["15 XL Matrix GRID Plates", "pH Range: 1.7 - 12.2", "Max ORP: -1003", "Premium Performance"],
    image: "/images/15.jpg"
  },
  // MSL Series (Residential) - White Variants
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-5",
    name: "MSL-5 Ionizer",
    color: "White",
    installation: "Counter Top",
    plates: "5 XL Matrix GRID Plates",
    power: "249 Watts",
    pH_range: "3.0 - 9.8",
    max_orp: "-507",
    orp_at_drinkable: "-213 at 9.5 pH",
    warranty: "7 Year",
    bullets: ["5 XL Matrix GRID Plates", "pH Range: 3.0 - 9.8", "Max ORP: -507", "Counter Top Installation"],
    image: "/images/5-white.jpg"
  },
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-7",
    name: "MSL-7 Ionizer",
    color: "White",
    installation: "Counter Top or Under Counter",
    plates: "7 XL Matrix GRID Plates",
    power: "450 Watts",
    pH_range: "2.5 - 11.0",
    max_orp: "-705",
    orp_at_drinkable: "-307 at 9.5 pH",
    warranty: "10 Year Parts | Lifetime Labor",
    bullets: ["7 XL Matrix GRID Plates", "pH Range: 2.5 - 11.0", "Max ORP: -705", "450W Power"],
    image: "/images/7-white.jpg"
  },
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-9",
    name: "MSL-9 Ionizer",
    color: "White",
    installation: "Counter Top or Under Counter",
    plates: "9 XL Matrix GRID Plates",
    power: "504 Watts",
    pH_range: "2.0 - 11.5",
    max_orp: "-811",
    orp_at_drinkable: "-411 at 9.5 pH",
    warranty: "Lifetime",
    bullets: ["9 XL Matrix GRID Plates", "pH Range: 2.0 - 11.5", "Max ORP: -811", "Lifetime Warranty"],
    image: "/images/9-white.jpg"
  },
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-11",
    name: "MSL-11 Ionizer",
    color: "White",
    installation: "Counter Top or Under Counter",
    plates: "11 XL Matrix GRID Plates",
    power: "800 Watts",
    pH_range: "2.0 - 12.0",
    max_orp: "-880",
    orp_at_drinkable: "-559 at 9.5 pH",
    warranty: "Lifetime Labor",
    bullets: ["11 XL Matrix GRID Plates", "pH Range: 2.0 - 12.0", "Max ORP: -880", "800W Power"],
    image: "/images/11-white.jpg"
  },
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-13",
    name: "MSL-13 Ionizer",
    color: "White",
    installation: "Counter Top or Under Counter",
    plates: "13 XL Matrix GRID Plates",
    power: "800 Watts",
    pH_range: "1.7 - 12.2",
    max_orp: "-903",
    orp_at_drinkable: "-616 at 9.5 pH",
    warranty: "Lifetime Labor",
    bullets: ["13 XL Matrix GRID Plates", "pH Range: 1.7 - 12.2", "Max ORP: -903", "Advanced Performance"],
    image: "/images/13-white.jpg"
  },
  {
    tag: "Residential",
    series: "MSL",
    model: "MSL-15",
    name: "MSL-15 Ionizer",
    color: "White",
    installation: "Counter Top or Under Counter",
    plates: "15 XL Matrix GRID Plates",
    power: "800 Watts",
    pH_range: "1.7 - 12.2",
    max_orp: "-1003",
    orp_at_drinkable: "-966 at 9.5 pH",
    warranty: "Lifetime Labor",
    bullets: ["15 XL Matrix GRID Plates", "pH Range: 1.7 - 12.2", "Max ORP: -1003", "Premium Performance"],
    image: "/images/15-white.jpg"
  },
  // Tycoon Series (Commercial)
  {
    tag: "Commercial",
    series: "TYCOON",
    model: "TYCOON-30",
    name: "Tycoon 30 Ionizer",
    color: "Black",
    installation: "Counter Top",
    plates: "30 XL Matrix GRID Plates",
    power: "1000 Watts",
    pH_range: "2.0 - 12.2",
    max_orp: "-1005",
    orp_at_drinkable: "N/A",
    warranty: "Lifetime Parts | 5 Year Labor",
    bullets: ["30 XL Matrix GRID Plates", "1000W Industrial Power", "Max ORP: -1005", "Commercial Scale"],
    image: "/images/tycoon-30.jpg"
  },
  {
    tag: "Commercial",
    series: "TYCOON",
    model: "TYCOON-60",
    name: "Tycoon 60 Ionizer",
    color: "Black",
    installation: "Counter Top",
    plates: "60 XL Matrix GRID Plates",
    power: "1500 Watts",
    pH_range: "2.0 - 12.2",
    max_orp: "-1193",
    orp_at_drinkable: "N/A",
    warranty: "Lifetime Parts | 5 Year Labor",
    bullets: ["60 XL Matrix GRID Plates", "1500W Heavy Duty", "Max ORP: -1193", "Large Scale Operations"],
    image: "/images/tycoon-60.jpg"
  },
  {
    tag: "Commercial",
    series: "TYCOON",
    model: "TYCOON-90",
    name: "Tycoon 90 Ionizer",
    color: "Black",
    installation: "Counter Top",
    plates: "90 XL Matrix GRID Plates",
    power: "2000 Watts",
    pH_range: "2.0 - 12.2",
    max_orp: "-1193",
    orp_at_drinkable: "N/A",
    warranty: "Lifetime Parts | 5 Year Labor",
    bullets: ["90 XL Matrix GRID Plates", "2000W Maximum Power", "Max ORP: -1193", "Industrial Grade"],
    image: "/images/tycoon-90.jpg"
  },
];

const faqs = [
  { q: "Is this a replacement for RO?", a: "If your TDS is extremely high, keep pre-filtration. Otherwise, the built-in dual filtration suits many municipal sources." },
  { q: "What pH should I drink?", a: "Start at pH 8.5 for 1–2 weeks, then 9.0, then 9.5 as comfortable." },
  { q: "Does it kill bacteria?", a: "The acidic stream (around pH ≤2.7) is used for hygiene/cleaning; drinking stream is alkaline." },
  { q: "How often to change filters?", a: "Typically every 6–12 months depending on source water and usage." },
];

const badges = ["GMP", "KFDA", "ISO 13485", "BPA-Free", "Medical-Grade"];

const certs = [
  { code: "ISO 13485", title: "Medical Devices QMS", note: "Consistent quality & safety processes." },
  { code: "KFDA", title: "Korean FDA", note: "Compliance with Korean health standards." },
  { code: "GMP", title: "Good Manufacturing", note: "Controlled, validated manufacturing." },
  { code: "BPA-Free", title: "Material Safety", note: "Food-grade, BPA-free components." },
];

const blogTeasers = [
  { title: "Alkaline vs RO: What’s Right for You?", excerpt: "Understand TDS, minerals, and ORP in simple terms.", tag: "Education" },
  { title: "How to choose an Ionizer in India", excerpt: "Plates, power, filtration—what actually matters.", tag: "Buying Guide" },
  { title: "Hydrogen Water & Recovery", excerpt: "What early research suggests about H₂.", tag: "Wellness" },
];

const testimonials = [
  { quote: "Water tastes noticeably smoother; tea & coffee flavor really improved.", author: "Priya S., Bengaluru" },
  { quote: "Installation was quick and support is responsive. Hydration feels better after workouts.", author: "Rahul K., Pune" },
  { quote: "Our family moved from bottled water to the ionizer—convenient and cost-effective.", author: "Anita & Vikram, Hyderabad" },
];

/**********************
 * Component          *
 **********************/
export default function TyentStyleLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Info Bar */}
      <div className="w-full bg-[#0d8dcf] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs md:text-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span>86+ Countries</span>
            <span className="hidden md:inline">|</span>
            <span>3 years warranty on ionizer & 15 years on plates</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#login" className="inline-flex items-center gap-1 opacity-90 hover:opacity-100"><UserIcon className="h-4 w-4"/> Login</a>
            <a href="#cart" className="relative inline-flex items-center gap-1 opacity-90 hover:opacity-100">
              <CartIcon className="h-4 w-4"/>
              <span>0</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Image src="/medisoul-logo.png" alt="Medisoul Logo" width={240} height={80} className="h-20 w-auto object-contain" priority />
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#about" className="hover:text-blue-700">About Us</a>
            <a href="#products" className="hover:text-blue-700">Products</a>
            <a href="#benefits" className="hover:text-blue-700">Benefits</a>
            <a href="#why-brand" className="hover:text-blue-700">Why Medisoul</a>
            <a href="#why-ionizer" className="hover:text-blue-700">Why Water Ionizer</a>
            <a href="#certs" className="hover:text-blue-700">Certifications</a>
            <a href="#blogs" className="hover:text-blue-700">Blogs</a>
            <a href="#testimonials" className="hover:text-blue-700">Testimonials</a>
            <a href="#contact" className="hover:text-blue-700">Contact Us</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden md:inline-flex">Get Pricing</Button>
            <Button variant="outline" className="md:hidden" asChild>
              <a href="#contact" className="inline-flex items-center"><PhoneIcon className="mr-2 h-4 w-4"/>Call</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100/30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-200/20 blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full bg-emerald-200/20 blur-2xl"
          ></motion.div>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-32">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white shadow-lg cursor-pointer"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <StarIcon className="mr-2 h-5 w-5" />
              </motion.div>
              <span className="text-sm font-medium">Premium Water Ionizers</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="space-y-4"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl font-bold leading-tight text-gray-900 lg:text-7xl"
              >
                Transform Your
                <motion.span 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent"
                >
                  Water Experience
                </motion.span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="text-xl leading-relaxed text-gray-600 lg:text-2xl"
              >
                Medical-grade ionizers delivering hydrogen-rich, alkaline water with 
                <motion.span 
                  animate={{ color: ["#1d4ed8", "#dc2626", "#1d4ed8"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="font-semibold"
                > antioxidant power</motion.span> and 
                <motion.span 
                  animate={{ color: ["#1d4ed8", "#059669", "#1d4ed8"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="font-semibold"
                > negative ORP</motion.span> for optimal health.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <WaterIcon className="mr-2 h-5 w-5" />
                  </motion.div>
                  Shop Premium Ionizers
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-2" asChild>
                  <a href="#benefits">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <PlayIcon className="mr-2 h-5 w-5" />
                    </motion.div>
                    Watch Demo
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              {badges.map((b, index) => (
                <motion.div 
                  key={b}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.6 + (index * 0.1), 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center rounded-full bg-white px-4 py-2 shadow-md ring-1 ring-gray-200 cursor-pointer"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <CheckIcon className="mr-2 h-4 w-4 text-green-600" />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700">{b}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: "86+", label: "Countries Served" },
                { number: "20+", label: "Years Experience" },
                { number: "1M+", label: "Happy Customers" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 2 + (index * 0.2), 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center lg:text-left"
                >
                  <motion.div 
                    className="text-3xl font-bold text-blue-600"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(37, 99, 235, 0)",
                        "0 0 20px rgba(37, 99, 235, 0.5)",
                        "0 0 0px rgba(37, 99, 235, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-8 shadow-2xl"
            >
              {/* Main Product Display */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="relative overflow-hidden rounded-2xl bg-white p-6"
              >
                <div className="space-y-4">
                  <motion.div 
                    animate={{ 
                      background: [
                        "linear-gradient(to bottom right, #dbeafe, #bfdbfe)",
                        "linear-gradient(to bottom right, #bfdbfe, #dbeafe)",
                        "linear-gradient(to bottom right, #dbeafe, #bfdbfe)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-32 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity }
                        }}
                      >
                        <WaterIcon className="mx-auto h-12 w-12 text-blue-600" />
                      </motion.div>
                      <p className="mt-2 text-sm font-medium text-blue-700">Ionizer Display</p>
                    </div>
                  </motion.div>
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.5, type: "spring" }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg bg-green-50 p-3 text-center"
                    >
                      <motion.div 
                        animate={{ color: ["#15803d", "#dc2626", "#15803d"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-lg font-bold text-green-700"
                      >
                        pH 9.5
                      </motion.div>
                      <div className="text-xs text-green-600">Alkaline</div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.7, type: "spring" }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg bg-blue-50 p-3 text-center"
                    >
                      <motion.div 
                        animate={{ color: ["#1d4ed8", "#059669", "#1d4ed8"] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        className="text-lg font-bold text-blue-700"
                      >
                        -400
                      </motion.div>
                      <div className="text-xs text-blue-600">ORP</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.8, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="absolute -top-4 -right-4 rounded-full bg-white p-3 shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <ShieldIcon className="h-6 w-6 text-green-600" />
                </motion.div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 2, type: "spring" }}
                whileHover={{ scale: 1.1, x: -10 }}
                className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <WaterIcon className="h-5 w-5 text-blue-600" />
                  </motion.div>
                  <span className="text-sm font-medium">9 Water Types</span>
                </div>
              </motion.div>

              {/* Animated Decorative Water Drops */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/4 left-4 h-3 w-3 rounded-full bg-blue-300/60"
              ></motion.div>
              <motion.div 
                animate={{ 
                  y: [0, 15, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 right-6 h-2 w-2 rounded-full bg-blue-200/60"
              ></motion.div>
              <motion.div 
                animate={{ 
                  y: [0, -25, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.4, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute bottom-1/4 left-8 h-4 w-4 rounded-full bg-blue-400/40"
              ></motion.div>
            </motion.div>

            {/* Background Pattern */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-400/20 to-blue-600/20 blur-2xl"
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-slate-50/20"></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-medium text-white shadow-lg">
                  <span className="mr-2">✨</span>
                  FROM THE EDITOR'S DESK
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                  Welcome to <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Life Ionizers</span>
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600">
                At Life Ionizers, we believe that the essence of true health, vitality, and longevity flows from the purest gift of nature – water.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                <div className="relative space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                      <WaterIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Two Decades of Innovation</h3>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        For over twenty years, we have stood as pioneers of innovation, transforming simple drinking water into a source of extraordinary power – rich in antioxidants, alkaline in nature, and crafted to nourish the body, awaken the mind, and uplift the soul.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                      <ShieldIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Redefining Wellness</h3>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        Our vision is bold yet simple – to redefine wellness at its very core. With cutting-edge ionization technology, every drop becomes more than just hydration; it becomes a fountain of purity, balance, and rejuvenation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg">
                      <StarIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Excellence in Every Drop</h3>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        Guided by excellence, our mission is unwavering: to bring clean, safe, and life-enhancing ionized water solutions at home. From advanced research to flawless design, from trusted quality to global recognition.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <p className="text-center text-lg font-medium">
                    Step into a new age of health, vitality, and boundless energy. 
                    <br />
                    <span className="text-blue-100">Welcome to Life Ionizers – where every sip is the beginning of true wellness.</span>
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-400/20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 h-40 w-40 rounded-full bg-blue-100/30 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-emerald-100/30 blur-2xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 text-white text-sm font-medium mb-6">
              <StarIcon className="mr-2 h-4 w-4" />
              Premium Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 lg:text-5xl">
              Why Choose an <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Ionizer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the science-backed benefits of ionized water with our advanced technology
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, index) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <Card className="relative h-full rounded-3xl border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardHeader className="relative p-8 pb-4">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-4 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      >
                        {f.icon}
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                          {f.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative p-8 pt-2">
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {f.desc}
                    </p>
                    
                    {/* Decorative Element */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 origin-left"
                      style={{ width: '100%' }}
                    ></motion.div>
                  </CardContent>

                  {/* Floating Icons */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="rounded-full bg-blue-500 p-2 shadow-lg">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Medisoul */}
      <section id="why-brand" className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-2 text-white text-sm font-medium mb-6">
              <ShieldIcon className="mr-2 h-4 w-4" />
              Why Choose Medisoul
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 lg:text-5xl">
              The <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Medisoul Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unmatched quality, innovation, and service that sets us apart in the water ionizer industry
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Medical-Grade Materials",
                description: "FDA-approved, BPA-free components ensuring the highest safety standards for your family's health.",
                icon: <ShieldIcon className="h-6 w-6" />,
                color: "from-emerald-500 to-emerald-600"
              },
              {
                title: "Dual Ultra-Filtration",
                description: "Advanced 10-stage filtration system removing 99.9% of contaminants while preserving essential minerals.",
                icon: <WaterIcon className="h-6 w-6" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Strong Negative ORP",
                description: "Powerful antioxidant potential with ORP levels reaching -400mV for maximum health benefits.",
                icon: <StarIcon className="h-6 w-6" />,
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Automatic Self-Clean",
                description: "Smart cleaning system prevents scale buildup and maintains optimal performance with zero maintenance.",
                icon: <CheckIcon className="h-6 w-6" />,
                color: "from-amber-500 to-amber-600"
              },
              {
                title: "Touch Smart Faucet",
                description: "Modern touch interface with LED display showing real-time pH, ORP, and filter life status.",
                icon: <WaterIcon className="h-6 w-6" />,
                color: "from-cyan-500 to-cyan-600"
              },
              {
                title: "Local Service Network",
                description: "24/7 customer support with certified technicians providing installation and maintenance services.",
                icon: <ShieldIcon className="h-6 w-6" />,
                color: "from-rose-500 to-rose-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative perspective-1000"
              >
                <Card className="relative h-full rounded-3xl border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform-gpu">
                  {/* Animated Background Gradient */}
                  <motion.div 
                    animate={{ 
                      background: [
                        `linear-gradient(135deg, ${feature.color.split(' ')[1]}20, ${feature.color.split(' ')[3]}10)`,
                        `linear-gradient(135deg, ${feature.color.split(' ')[3]}20, ${feature.color.split(' ')[1]}10)`,
                        `linear-gradient(135deg, ${feature.color.split(' ')[1]}20, ${feature.color.split(' ')[3]}10)`
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></motion.div>
                  
                  <CardContent className="relative p-8 space-y-6">
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ 
                        rotate: 360, 
                        scale: 1.2,
                        transition: { duration: 0.6 }
                      }}
                      className={`rounded-2xl bg-gradient-to-br ${feature.color} p-4 text-white shadow-lg w-fit group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Animated Progress Bar */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      className={`h-1 bg-gradient-to-r ${feature.color} origin-left`}
                      style={{ width: '100%' }}
                    ></motion.div>

                    {/* Floating Badge */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                      className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className={`rounded-full bg-gradient-to-r ${feature.color} p-2 shadow-lg`}>
                        <CheckIcon className="h-4 w-4 text-white" />
                      </div>
                    </motion.div>
                  </CardContent>

                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${feature.color} rounded-bl-full`}></div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-4 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <ShieldIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">Experience the Medisoul Difference</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 h-60 w-60 rounded-full bg-blue-100/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-100/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-100/10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 text-white text-sm font-medium mb-6">
              <WaterIcon className="mr-2 h-4 w-4" />
              Featured Products
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 lg:text-5xl">
              Premium <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Ionizers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from our range of cutting-edge water ionizers designed for every lifestyle and need
            </p>
            
            {/* Product Series Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8"
            >
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-sm font-semibold text-gray-700">MSL Series - Residential</span>
                <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">6 Models</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-full border border-emerald-200">
                <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                <span className="text-sm font-semibold text-gray-700">Tycoon Series - Commercial</span>
                <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">3 Models</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Products Carousel */}
          <ProductCarousel products={products} />

          {/* Product Series Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MXL</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Residential Series</h3>
                    <p className="text-sm text-gray-600">Perfect for Homes & Families</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>5 to 15 XL Matrix GRID Plates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>pH Range: 1.7 - 12.2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Counter Top or Under Counter Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Up to Lifetime Warranty Available</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">LC</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Commercial Series</h3>
                    <p className="text-sm text-gray-600">Built for Heavy Duty Use</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>11 to 90 XL Matrix GRID Plates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Power: 800W - 2000W Industrial Grade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Designed for Restaurants, Offices, Gyms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Lifetime Parts | 5 Year Labor Warranty</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 p-12 shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]"></div>
              </div>

              <div className="relative space-y-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  <div className="rounded-full bg-white/20 p-4">
                    <WaterIcon className="h-8 w-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-3xl font-bold text-white lg:text-4xl">
                  Ready to Transform Your Water?
                </h3>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who've upgraded their hydration experience with Medisoul ionizers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50 shadow-xl">
                      <StarIcon className="mr-2 h-5 w-5" />
                      Browse All Products
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-600">
                      <PhoneIcon className="mr-2 h-5 w-5" />
                      Call Expert
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Water Ionizer */}
      <section id="why-ionizer" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-6 text-3xl font-semibold">Why Water Ionizer</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[{h:"Adjustable pH",p:"From mildly alkaline for drinking to strong modes for cleaning."},{h:"Negative ORP",p:"Antioxidant potential with dissolved molecular hydrogen."},{h:"Less Wastewater",p:"Versus RO, ionizers waste far less water."},{h:"Mineral-Rich",p:"Retains essential minerals like Ca & Mg."}].map((x)=> (
              <Card key={x.h} className="rounded-2xl shadow-sm">
                <CardContent className="pt-6">
                  <div className="mb-2 font-medium">{x.h}</div>
                  <p className="text-sm text-gray-600">{x.p}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">How it stacks up</h3>
              <p className="text-gray-600">Modern SMPS power systems, larger electrode surface area, and dual filtration help deliver strong ORP at a range of pH settings—while keeping maintenance simple.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4"/> 55 adjustable power levels</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4"/> Quick‑change filters with life indicator</li>
                <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4"/> Turbo modes for cleaning & brewing</li>
              </ul>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-black/5 bg-gradient-to-br from-blue-50 to-white">
              <IonizerSVG label="Comparison"/>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-6 text-3xl font-semibold">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {certs.map((c)=> (
              <Card key={c.code} className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{c.code}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-medium">{c.title}</div>
                  <p className="text-sm text-gray-600">{c.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-6 text-3xl font-semibold">From the Blog</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {blogTeasers.map((b)=> (
              <Card key={b.title} className="rounded-2xl shadow-sm">
                <CardContent className="space-y-3 pt-6">
                  <div className="text-xs uppercase text-blue-700">{b.tag}</div>
                  <div className="text-lg font-medium">{b.title}</div>
                  <p className="text-sm text-gray-600">{b.excerpt}</p>
                  <Button variant="outline">Read more</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h3 className="mb-8 text-2xl font-semibold">What users say</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardContent className="space-y-4 pt-6">
                  <p className="text-gray-700">“{t.quote}”</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="h-8 w-8 rounded-full bg-gray-200"/>
                    <span>{t.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h3 className="mb-6 text-2xl font-semibold">FAQs</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, idx) => (
              <AccordionItem key={f.q} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <Card className="rounded-3xl shadow-lg">
            <CardContent className="grid gap-6 p-8 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">Talk to a specialist</h3>
                <p className="text-gray-600">Get a personalized recommendation based on your source water and usage.</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><PhoneIcon className="h-4 w-4"/> +91 7993004900</li>
                  <li className="flex items-center gap-2"><ShieldIcon className="h-4 w-4"/> 2-year standard warranty</li>
                  <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4"/> Info@medisoulindia.com</li>
                </ul>
              </div>
              <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We'll get back to you.");}}>
                <div>
                  <label className="text-sm">Name</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-blue-200 focus:ring" placeholder="Your name"/>
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-blue-200 focus:ring" placeholder="you@example.com"/>
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <textarea className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-blue-200 focus:ring" rows={4} placeholder="Tell us about your needs"/>
                </div>
                <Button className="w-full" type="submit">Request Callback</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-600">
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <div className="mb-2 font-semibold">Medisoul Ionizers</div>
              <p>Modern water ionizers for home & offices. Replace placeholders with your brand and content.</p>
            </div>
            <div>
              <div className="mb-2 font-semibold">Company</div>
              <ul className="space-y-1">
                <li><a href="#about" className="hover:text-blue-700">About</a></li>
                <li><a href="#blogs" className="hover:text-blue-700">Blog</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-semibold">Support</div>
              <ul className="space-y-1">
                <li><a href="#certs" className="hover:text-blue-700">Certifications</a></li>
                <li><a href="#contact" className="hover:text-blue-700">Installation</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-semibold">Legal</div>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-blue-700">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-700">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Medisoul Ionizers</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-blue-700">Instagram</a>
              <a href="#" className="hover:text-blue-700">Facebook</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

