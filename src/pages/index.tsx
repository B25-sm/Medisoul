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
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-medium text-white shadow-lg">
                  <span className="mr-2">✨</span>
                  FROM THE EDITOR'S DESK
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                  Welcome to <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Medisoul Ionizers</span>
                </h2>
                <h3 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
                  Pioneers of Water Innovation Since 2003
                </h3>
              </div>
              
              {/* Enhanced Content Structure */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">Our Mission</h4>
              <p className="text-lg leading-relaxed text-gray-600">
                    At Medisoul Ionizers, we believe that the essence of true health, vitality, and longevity flows from the purest gift of nature – water. We are dedicated to revolutionizing how you experience hydration through cutting-edge ionization technology.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">Our Vision</h4>
                  <p className="text-lg leading-relaxed text-gray-600">
                    To become the global leader in water ionization technology, making premium alkaline water accessible to every household while maintaining the highest standards of quality, innovation, and customer satisfaction.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">What Sets Us Apart</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">20+ Years of Expertise</span>
                        <p className="text-gray-600">Two decades of continuous innovation and refinement</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">Medical-Grade Quality</span>
                        <p className="text-gray-600">FDA-approved components and BPA-free materials</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">Global Presence</span>
                        <p className="text-gray-600">Serving customers in 86+ countries worldwide</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">Comprehensive Support</span>
                        <p className="text-gray-600">24/7 customer service and local installation network</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
                <div className="relative space-y-8">
                  {/* Company Journey Section */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Our Journey of Excellence</h3>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                      <WaterIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Two Decades of Innovation</h4>
                        <p className="text-gray-600 leading-relaxed">
                        For over twenty years, we have stood as pioneers of innovation, transforming simple drinking water into a source of extraordinary power – rich in antioxidants, alkaline in nature, and crafted to nourish the body, awaken the mind, and uplift the soul.
                      </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technology Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">Advanced Technology</h4>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                      <ShieldIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h5 className="text-lg font-medium text-gray-900 mb-2">Redefining Wellness</h5>
                        <p className="text-gray-600 leading-relaxed">
                        Our vision is bold yet simple – to redefine wellness at its very core. With cutting-edge ionization technology, every drop becomes more than just hydration; it becomes a fountain of purity, balance, and rejuvenation.
                      </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quality Section */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">Uncompromising Quality</h4>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg">
                      <StarIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h5 className="text-lg font-medium text-gray-900 mb-2">Excellence in Every Drop</h5>
                        <p className="text-gray-600 leading-relaxed">
                        Guided by excellence, our mission is unwavering: to bring clean, safe, and life-enhancing ionized water solutions at home. From advanced research to flawless design, from trusted quality to global recognition.
                      </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Statistics */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">20+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-2xl font-bold text-emerald-600">86+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">1M+</div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-xl">
                      <div className="text-2xl font-bold text-amber-600">99.9%</div>
                      <div className="text-sm text-gray-600">Contaminant Removal</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <h4 className="text-lg font-semibold mb-2 text-center">Join the Revolution</h4>
                  <p className="text-center text-base">
                    Step into a new age of health, vitality, and boundless energy. 
                    <br />
                    <span className="text-blue-100 font-medium">Welcome to Medisoul Ionizers – where every sip is the beginning of true wellness.</span>
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
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 lg:text-3xl">
              The Science Behind Superior Hydration
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Experience the science-backed benefits of ionized water with our advanced technology. Our ionizers transform ordinary water into a powerful antioxidant-rich, alkaline solution that supports your body's natural healing processes.
            </p>
            
            {/* Key Benefits Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-1">pH 8.5-11.5</div>
                <div className="text-sm text-gray-600">Alkaline Range</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600 mb-1">-400mV</div>
                <div className="text-sm text-gray-600">ORP Level</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-1">H₂</div>
                <div className="text-sm text-gray-600">Molecular Hydrogen</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-xl">
                <div className="text-2xl font-bold text-amber-600 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Pure Water</div>
              </div>
            </div>
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
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {f.title}
                      </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {f.desc}
                    </p>
                      
                      {/* Additional Details */}
                      <div className="space-y-2 pt-2">
                        {f.title === "Hydrogen-Rich Water" && (
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Benefits:</span> Neutralizes free radicals, supports cellular health, enhances recovery
                          </div>
                        )}
                        {f.title === "Dual Ultra Filtration" && (
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Stages:</span> Sediment → Carbon → Ceramic → Vitamin C → Ionization
                          </div>
                        )}
                        {f.title === "Adjustable pH & ORP" && (
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Range:</span> pH 3.0-11.5, ORP up to -400mV for maximum antioxidant potential
                          </div>
                        )}
                        {f.title === "Micro-Clustering" && (
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">Result:</span> 5-6 water molecules per cluster vs 10-13 in regular water
                          </div>
                        )}
                      </div>
                    </div>
                    
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
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 lg:text-3xl">
              Industry-Leading Excellence Since 2003
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Unmatched quality, innovation, and service that sets us apart in the water ionizer industry. Our commitment to excellence has made us the trusted choice for health-conscious families worldwide.
            </p>
            
            {/* Competitive Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-emerald-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">20+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Years Innovation</div>
                <div className="text-sm text-gray-600">Leading the industry with continuous R&D</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">86+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Countries Served</div>
                <div className="text-sm text-gray-600">Global presence with local support</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Happy Customers</div>
                <div className="text-sm text-gray-600">Proven track record of satisfaction</div>
              </div>
            </div>
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
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                      
                      {/* Additional Benefits */}
                      <div className="space-y-2 pt-2">
                        {feature.title === "Medical-Grade Materials" && (
                          <ul className="text-sm text-gray-500 space-y-1">
                            <li>• FDA-approved components</li>
                            <li>• BPA-free construction</li>
                            <li>• Food-grade materials</li>
                            <li>• ISO 13485 certified</li>
                          </ul>
                        )}
                        {feature.title === "Dual Ultra-Filtration" && (
                          <ul className="text-sm text-gray-500 space-y-1">
                            <li>• 99.9% contaminant removal</li>
                            <li>• Mineral preservation</li>
                            <li>• Chlorine & heavy metals</li>
                            <li>• 6-month filter life</li>
                          </ul>
                        )}
                        {feature.title === "Strong Negative ORP" && (
                          <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Up to -400mV ORP</li>
                            <li>• Antioxidant properties</li>
                            <li>• Free radical neutralization</li>
                            <li>• Cellular protection</li>
                          </ul>
                        )}
                        {feature.title === "Automatic Self-Clean" && (
                          <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Zero maintenance required</li>
                            <li>• Scale prevention</li>
                            <li>• Optimal performance</li>
                            <li>• Long-lasting plates</li>
                          </ul>
                        )}
                        {feature.title === "Touch Smart Faucet" && (
                          <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Real-time pH display</li>
                            <li>• ORP monitoring</li>
                            <li>• Filter life indicator</li>
                            <li>• Easy operation</li>
                          </ul>
                        )}
                        {feature.title === "Local Service Network" && (
                          <ul className="text-sm text-gray-500 space-y-1">
                            <li>• 24/7 customer support</li>
                            <li>• Certified technicians</li>
                            <li>• Installation service</li>
                            <li>• Warranty coverage</li>
                          </ul>
                        )}
                      </div>
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
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 lg:text-3xl">
              Advanced Technology for Every Home
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Choose from our range of cutting-edge water ionizers designed for every lifestyle and need. Each model features our latest innovations in water ionization technology.
            </p>
            
            {/* Product Categories Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100">
                <div className="text-lg font-semibold text-purple-700 mb-1">Countertop</div>
                <div className="text-sm text-gray-600">Compact & Portable</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="text-lg font-semibold text-blue-700 mb-1">Under-Counter</div>
                <div className="text-sm text-gray-600">Built-in Installation</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="text-lg font-semibold text-emerald-700 mb-1">Hydrogen</div>
                <div className="text-sm text-gray-600">Pure H₂ Generation</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-100">
                <div className="text-lg font-semibold text-amber-700 mb-1">Industrial</div>
                <div className="text-sm text-gray-600">Commercial Grade</div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="h-12 px-8 text-lg font-semibold border-2 hover:bg-blue-50">
                View All Products
              </Button>
            </motion.div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {products.map((p, index) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 80, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -20,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative perspective-1000"
              >
                <Card className="relative h-full rounded-3xl border-0 bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform-gpu">
                  {/* Product Category Badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    className="absolute top-6 left-6 z-10"
                  >
                    <div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                      {p.tag}
                    </div>
                  </motion.div>

                  {/* Favorite Button */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="absolute top-6 right-6 z-10 cursor-pointer"
                  >
                    <div className="rounded-full bg-white/80 backdrop-blur-sm p-3 shadow-lg hover:bg-red-50 transition-colors duration-300">
                      <StarIcon className="h-5 w-5 text-gray-600 hover:text-red-500" />
                    </div>
                  </motion.div>

                  <CardHeader className="relative p-8 pt-20">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    >
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                        {p.name}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="relative p-8 pt-2 space-y-6">
                    {/* Enhanced Product Image */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                    >
                      {/* Animated Background */}
                      <motion.div 
                        animate={{ 
                          background: [
                            "linear-gradient(135deg, #dbeafe, #e0e7ff)",
                            "linear-gradient(135deg, #e0e7ff, #dbeafe)",
                            "linear-gradient(135deg, #dbeafe, #e0e7ff)"
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0"
                      ></motion.div>

                      {/* Product Illustration */}
                      <div className="relative h-full flex items-center justify-center">
                        {illustrationForProduct(p.tag, p.name)}
                      </div>

                      {/* Floating Elements */}
                      <motion.div 
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute top-4 right-4 rounded-full bg-blue-500 p-2 shadow-lg"
                      >
                        <WaterIcon className="h-4 w-4 text-white" />
                      </motion.div>

                      <motion.div 
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        className="absolute bottom-4 left-4 rounded-full bg-purple-500 p-2 shadow-lg"
                      >
                        <ShieldIcon className="h-4 w-4 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                      className="space-y-4"
                    >
                      <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900">Key Features</h4>
                      <ul className="space-y-3">
                        {p.bullets.map((bullet, bulletIndex) => (
                          <motion.li 
                            key={bullet}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 1 + (index * 0.1) + (bulletIndex * 0.1) 
                            }}
                            className="flex items-start gap-3 group-hover:gap-4 transition-all duration-300"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                              className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-1 mt-0.5 flex-shrink-0"
                            >
                              <CheckIcon className="h-3 w-3 text-white" />
                            </motion.div>
                            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                              {bullet}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                      </div>

                      {/* Product Specifications */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <h5 className="text-md font-semibold text-gray-900">Specifications</h5>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {p.tag === "Countertop" && (
                            <>
                              <div className="bg-blue-50 p-2 rounded-lg">
                                <div className="font-medium text-blue-700">pH Range</div>
                                <div className="text-gray-600">3.0 - 11.5</div>
                              </div>
                              <div className="bg-emerald-50 p-2 rounded-lg">
                                <div className="font-medium text-emerald-700">ORP Level</div>
                                <div className="text-gray-600">Up to -400mV</div>
                              </div>
                              <div className="bg-purple-50 p-2 rounded-lg">
                                <div className="font-medium text-purple-700">Water Types</div>
                                <div className="text-gray-600">9 Different Modes</div>
                              </div>
                              <div className="bg-amber-50 p-2 rounded-lg">
                                <div className="font-medium text-amber-700">Filtration</div>
                                <div className="text-gray-600">10-Stage Dual</div>
                              </div>
                            </>
                          )}
                          {p.tag === "Under-Counter" && (
                            <>
                              <div className="bg-blue-50 p-2 rounded-lg">
                                <div className="font-medium text-blue-700">Installation</div>
                                <div className="text-gray-600">Under-Sink</div>
                              </div>
                              <div className="bg-emerald-50 p-2 rounded-lg">
                                <div className="font-medium text-emerald-700">Display</div>
                                <div className="text-gray-600">Touch Faucet</div>
                              </div>
                              <div className="bg-purple-50 p-2 rounded-lg">
                                <div className="font-medium text-purple-700">Power System</div>
                                <div className="text-gray-600">SMPS</div>
                              </div>
                              <div className="bg-amber-50 p-2 rounded-lg">
                                <div className="font-medium text-amber-700">Filter Indicator</div>
                                <div className="text-gray-600">Life Status</div>
                              </div>
                            </>
                          )}
                          {p.tag === "Hydrogen" && (
                            <>
                              <div className="bg-blue-50 p-2 rounded-lg">
                                <div className="font-medium text-blue-700">H₂ Concentration</div>
                                <div className="text-gray-600">High Dissolved</div>
                              </div>
                              <div className="bg-emerald-50 p-2 rounded-lg">
                                <div className="font-medium text-emerald-700">Antioxidant</div>
                                <div className="text-gray-600">Selective</div>
                              </div>
                              <div className="bg-purple-50 p-2 rounded-lg">
                                <div className="font-medium text-purple-700">Wellness</div>
                                <div className="text-gray-600">Recovery Support</div>
                              </div>
                              <div className="bg-amber-50 p-2 rounded-lg">
                                <div className="font-medium text-amber-700">Application</div>
                                <div className="text-gray-600">Health Focus</div>
                              </div>
                            </>
                          )}
                          {p.tag === "Industrial" && (
                            <>
                              <div className="bg-blue-50 p-2 rounded-lg">
                                <div className="font-medium text-blue-700">pH Range</div>
                                <div className="text-gray-600">2.7 - 11.5</div>
                              </div>
                              <div className="bg-emerald-50 p-2 rounded-lg">
                                <div className="font-medium text-emerald-700">Sterilization</div>
                                <div className="text-gray-600">Strong Acidic</div>
                              </div>
                              <div className="bg-purple-50 p-2 rounded-lg">
                                <div className="font-medium text-purple-700">Grade</div>
                                <div className="text-gray-600">Food & Pharma</div>
                              </div>
                              <div className="bg-amber-50 p-2 rounded-lg">
                                <div className="font-medium text-amber-700">Eco-Friendly</div>
                                <div className="text-gray-600">Minimal Chemicals</div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                      className="pt-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Button className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="mr-2"
                          >
                            <WaterIcon className="h-5 w-5" />
                          </motion.div>
                          Get Quote
                        </Button>
                      </motion.div>
                    </motion.div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-bl-full"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

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
                  <p className="text-gray-700">"{t.quote}"</p>
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

