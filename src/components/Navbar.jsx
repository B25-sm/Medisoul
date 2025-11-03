import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isDesktopProductsOpen, setIsDesktopProductsOpen] = useState(false);
  const [isMobileLearnOpen, setIsMobileLearnOpen] = useState(false);
  const [isDesktopLearnOpen, setIsDesktopLearnOpen] = useState(false);
  
  const mobileMenuId = useId();
  const productsPanelId = useId();
  const learnPanelId = useId();
  
  const productsRef = useRef(null);
  const learnRef = useRef(null);
  
  const PRODUCTS = [
    { id: 1, title: "Acid Water Ionizer", href: "/products/acid-water" },
    { id: 2, title: "Alkaline Water Ionizer", href: "/products/alkaline-water" },
    { id: 3, title: "Filters", href: "/products/filters" },
    { id: 4, title: "Plates", href: "/products/plates" },
    { id: 5, title: "Accessories", href: "/products/accessories" },
    { id: 6, title: "Maintenance Kits", href: "/products/maintenance" },
    { id: 7, title: "Warranty Plans", href: "/products/warranty" },
    { id: 8, title: "Test Kits", href: "/products/test-kits" },
  ];

  const LEARN_SECTIONS = [
    {
      title: "Understanding Ionized Water",
      items: [
        { id: 1, title: "What is Water Ionizer", href: "/learn/what-is-water-ionizer" },
        { id: 2, title: "How Ionizer Works", href: "/learn/how-ionizer-works" },
        { id: 3, title: "What is pH, ORP", href: "/learn/what-is-ph-orp" },
        { id: 4, title: "What is Micro-cluster", href: "/learn/what-is-micro-cluster" },
        { id: 5, title: "Difference between RO and Ionized Water", href: "/learn/ro-vs-ionized-water" },
      ]
    },
    {
      title: "Health Science",
      items: [
        { id: 1, title: "What is Free-radicals", href: "/science/what-is-free-radicals" },
        { id: 2, title: "How Oxygen Free-radicals Affect Human Body", href: "/science/oxygen-free-radicals-effects" },
        { id: 3, title: "What is Oxidation", href: "/science/what-is-oxidation" },
        { id: 4, title: "What is Oxidation Stress", href: "/science/what-is-oxidation-stress" },
      ]
    },
    {
      title: "Health Benefits",
      items: [
        { id: 1, title: "Why Alkaline Ionized Water", href: "/benefits/why-alkaline-ionized-water" },
        { id: 2, title: "How Hydrogen is Helpful", href: "/benefits/how-hydrogen-helpful" },
        { id: 3, title: "How Molecular Hydrogen Helps", href: "/benefits/how-molecular-hydrogen-help" },
        { id: 4, title: "Anti-Oxidant", href: "/benefits/anti-oxidant" },
        { id: 5, title: "Anti-Inflammatory", href: "/benefits/anti-inflammatory" },
      ]
    },
    {
      title: "Applications",
      items: [
        { id: 1, title: "Uses/Applications of Ionized Water", href: "/applications/uses-of-ionized-water" },
        { id: 2, title: "Electrolysis Ionized Water for Food, Livestock and Agricultural", href: "/applications/food-livestock-agricultural" },
        { id: 3, title: "Ionized Water for High End Semiconductor Cleaning", href: "/applications/semiconductor-cleaning" },
        { id: 4, title: "Medical Case Studies", href: "/research/medical-case-studies" },
      ]
    }
  ];

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setIsDesktopProductsOpen(false);
      }
      if (learnRef.current && !learnRef.current.contains(event.target)) {
        setIsDesktopLearnOpen(false);
      }
    }
    function handleEsc(event) {
      if (event.key === "Escape") {
        setIsDesktopProductsOpen(false);
        setIsDesktopLearnOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/40 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-[2px]">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="Medisoul home">
          <Image src="/medisoul-logo.png" alt="Medisoul Logo" width={160} height={52} className="h-8 w-auto object-contain" priority />
        </Link>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-controls={mobileMenuId}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen(v => !v)}
          className="md:hidden inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          <Link href="/" className="text-[15px] font-medium text-gray-700 hover:text-[#0A0F2C] transition-colors px-[10px] py-[4px]">Home</Link>
          <Link href="/about" className="text-[15px] font-medium text-gray-700 hover:text-[#0A0F2C] transition-colors px-[10px] py-[4px]">About Us</Link>

          {/* Products dropdown (desktop) */}
          <div
            className="relative"
            ref={productsRef}
            onMouseEnter={() => setIsDesktopProductsOpen(true)}
            onMouseLeave={() => setIsDesktopProductsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-[#0A0F2C] transition-colors focus:outline-none px-[10px] py-[4px]"
              aria-haspopup="true"
              aria-expanded={isDesktopProductsOpen}
              aria-controls={productsPanelId}
              onClick={() => setIsDesktopProductsOpen(v => !v)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  setIsDesktopProductsOpen(true);
                  const firstItem = document.querySelector(`#${productsPanelId} a`);
                  if (firstItem) firstItem.focus();
                }
                if (e.key === "Escape") setIsDesktopProductsOpen(false);
              }}
            >
              Products
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              id={productsPanelId}
              className={`absolute left-0 mt-1.5 w-[420px] rounded-lg border border-gray-200 bg-white shadow-xl ring-1 ring-black/5 p-2 transition-all duration-200 origin-top ${isDesktopProductsOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-1 invisible"}`}
              role="menu"
              onKeyDown={(e) => {
                const items = Array.from(e.currentTarget.querySelectorAll('a'));
                const currentIndex = items.indexOf(document.activeElement);
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  const next = items[Math.min(currentIndex + 1, items.length - 1)];
                  if (next) next.focus();
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  const prev = items[Math.max(currentIndex - 1, 0)];
                  if (prev) prev.focus();
                }
                if (e.key === "Escape") setIsDesktopProductsOpen(false);
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.id}
                    href={p.href}
                    className="block rounded-md px-3 py-1.5 text-[15px] hover:bg-gray-50 transition-colors"
                    role="menuitem"
                    onClick={() => setIsDesktopProductsOpen(false)}
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Learn mega-menu (desktop) */}
          <div
            className="relative"
            ref={learnRef}
            onMouseEnter={() => setIsDesktopLearnOpen(true)}
            onMouseLeave={() => setIsDesktopLearnOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-[#0A0F2C] transition-colors focus:outline-none px-[10px] py-[4px]"
              aria-haspopup="true"
              aria-expanded={isDesktopLearnOpen}
              aria-controls={learnPanelId}
              onClick={() => setIsDesktopLearnOpen(v => !v)}
            >
              Learn
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
            <div
              id={learnPanelId}
              className={`absolute left-0 mt-1.5 w-[680px] rounded-lg border border-gray-200 bg-white shadow-xl ring-1 ring-black/5 p-4 transition-all duration-200 origin-top ${isDesktopLearnOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-1 invisible"}`}
              role="menu"
            >
              <div className="grid grid-cols-2 gap-6">
                {LEARN_SECTIONS.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="space-y-1.5">
                    <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-2">{section.title}</h3>
                    {section.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="block rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0A0F2C] transition-colors"
                        role="menuitem"
                        onClick={() => setIsDesktopLearnOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/why-medisoul" className="text-[15px] font-medium text-gray-700 hover:text-[#0A0F2C] transition-colors px-[10px] py-[4px]">Why Medisoul</Link>
          <Link href="/why-water-ionizer" className="text-[15px] font-medium text-gray-700 hover:text-[#0A0F2C] transition-colors px-[10px] py-[4px]">Why Water Ionizer</Link>
          <Link href="/contact" className="text-[15px] font-medium text-gray-700 hover:text-[#0A0F2C] transition-colors px-[10px] py-[4px]">Contact</Link>
        </nav>

        {/* Actions (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <button className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A0F2C]/20 disabled:opacity-50 disabled:pointer-events-none h-7 px-3.5 text-sm bg-[#FFD100] text-[#0A0F2C] hover:bg-[#FFD100]/90">
            Get Pricing
          </button>
        </div>

        {/* Mobile Call CTA */}
        <Link href="/contact" className="md:hidden inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none h-7 px-3 text-sm border border-gray-200 bg-white text-gray-900 hover:bg-gray-50">
          <svg className="mr-2 h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.92 4.2 2 2 0 0 1 4.92 2h2a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.02a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call
        </Link>
      </div>

      {/* Mobile menu */}
      <div
        id={mobileMenuId}
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden max-w-7xl mx-auto px-6 pb-2 ${isMobileOpen ? "block" : "hidden"}`}
      >
        <div className="mt-1.5 rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
          <Link href="/" className="block rounded-md px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors">Home</Link>
          <Link href="/about" className="block rounded-md px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors">About Us</Link>

          {/* Mobile Products accordion */}
          <div className="rounded-md">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors"
              aria-expanded={isMobileProductsOpen}
              aria-controls={productsPanelId + "-mobile"}
              onClick={() => setIsMobileProductsOpen(v => !v)}
            >
              <span>Products</span>
              <svg className={`h-3.5 w-3.5 shrink-0 transition-transform ${isMobileProductsOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
            <div id={productsPanelId + "-mobile"} hidden={!isMobileProductsOpen} className="mt-0.5 space-y-0.5 pl-3">
              {PRODUCTS.map((p) => (
                <Link
                  key={p.id}
                  href={p.href}
                  className="block rounded-md px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setIsMobileProductsOpen(false);
                    setIsMobileOpen(false);
                  }}
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Learn accordion */}
          <div className="rounded-md">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors"
              aria-expanded={isMobileLearnOpen}
              aria-controls={learnPanelId + "-mobile"}
              onClick={() => setIsMobileLearnOpen(v => !v)}
            >
              <span>Learn</span>
              <svg className={`h-3.5 w-3.5 shrink-0 transition-transform ${isMobileLearnOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
            <div id={learnPanelId + "-mobile"} hidden={!isMobileLearnOpen} className="mt-0.5 space-y-2 pl-3">
              {LEARN_SECTIONS.map((section, sectionIdx) => (
                <div key={sectionIdx} className="space-y-0.5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-1">{section.title}</div>
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="block rounded-md px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        setIsMobileLearnOpen(false);
                        setIsMobileOpen(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Link href="/why-medisoul" className="block rounded-md px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors">Why Medisoul</Link>
          <Link href="/why-water-ionizer" className="block rounded-md px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors">Why Water Ionizer</Link>
          <Link href="/contact" className="block rounded-md px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors">Contact</Link>

          {/* Mobile CTA */}
          <Link href="/contact" className="mt-1.5 block rounded-md bg-[#FFD100] text-[#0A0F2C] px-3.5 py-2 text-center text-sm font-medium hover:bg-[#FFD100]/90 transition-colors">
            Get Pricing
          </Link>
        </div>
      </div>
    </header>
  );
}
