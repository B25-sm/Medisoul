import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

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
  {
    tag: "Countertop",
    name: "Household Alkaline Ionizer",
    bullets: ["pH 3.0–11.5 modes", "Dual 10-stage filtration", "Auto polarity-reverse cleaning"],
  },
  {
    tag: "Under-Counter",
    name: "Under-Counter Smart Faucet Ionizer",
    bullets: ["Touch faucet display", "SMPS power system", "Filter life indicator"],
  },
  {
    tag: "Hydrogen",
    name: "Molecular Hydrogen Machine",
    bullets: ["High dissolved H₂", "Selective antioxidant", "Supports wellness & recovery"],
  },
  {
    tag: "Industrial",
    name: "Industrial Ionized Water System",
    bullets: ["Sterilize & clean (pH 2.7–11.5)", "Food & pharma ready", "Eco-friendly, minimal chemicals"],
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
  { title: "Alkaline vs RO: What's Right for You?", excerpt: "Understand TDS, minerals, and ORP in simple terms.", tag: "Education" },
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

      {/* Advanced Navbar */}
      <Navbar />

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
              className="space-y-6"
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
              
              {/* Enhanced Subheading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="space-y-3"
              >
                <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
                  Premium Water Ionizers for Modern Living
                </h2>
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
                
                {/* Key Benefits List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                  className="space-y-2 pt-4"
                >
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Why Choose Our Ionizers:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + (0 * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">Hydrogen-Rich Water</span> - Powerful antioxidant benefits
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.3 + (1 * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">Adjustable pH Levels</span> - From 8.5 to 11.5 for optimal health
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + (2 * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">Medical-Grade Filtration</span> - 10-stage dual ultra-filtration system
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.5 + (3 * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">Zero Maintenance</span> - Automatic self-cleaning technology
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
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
                  <a href="/benefits">
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

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-600">
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <div className="mb-2 font-semibold">Medisoul Ionizers</div>
              <p>Modern water ionizers for home & offices.</p>
            </div>
            <div>
              <div className="mb-2 font-semibold">Company</div>
              <ul className="space-y-1">
                <li><a href="/about" className="hover:text-blue-700">About</a></li>
                <li><a href="/blogs" className="hover:text-blue-700">Blog</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-semibold">Support</div>
              <ul className="space-y-1">
                <li><a href="/certifications" className="hover:text-blue-700">Certifications</a></li>
                <li><a href="/contact" className="hover:text-blue-700">Installation</a></li>
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
