"use client";
import React, { useState, useId } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const mobileMenuId = useId();
  const productsPanelId = useId();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2" aria-label="Medisoul home">
          <Image src="/medisoul-logo.png" alt="Medisoul Logo" width={240} height={80} className="h-20 w-auto object-contain" priority />
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-controls={mobileMenuId}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen(v => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="#about" className="hover:text-blue-700">About Us</a>
          <div className="relative group">
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-blue-700 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={false}
              aria-controls={productsPanelId}
            >
              Products
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>

            <div
              id={productsPanelId}
              className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 absolute left-0 mt-2 w-56 rounded-xl border bg-white shadow-lg ring-1 ring-black/5 p-2 transition"
              role="menu"
            >
              <a href="#prod-home" className="block rounded-lg px-3 py-2 hover:bg-gray-50" role="menuitem">Home Ionizers</a>
              <a href="#prod-commercial" className="block rounded-lg px-3 py-2 hover:bg-gray-50" role="menuitem">Commercial Ionizers</a>
              <a href="#prod-filters" className="block rounded-lg px-3 py-2 hover:bg-gray-50" role="menuitem">Filters & Cartridges</a>
              <a href="#prod-accessories" className="block rounded-lg px-3 py-2 hover:bg-gray-50" role="menuitem">Accessories</a>
              <a href="#prod-compare" className="block rounded-lg px-3 py-2 hover:bg-gray-50 font-medium text-blue-700" role="menuitem">Compare Models</a>
            </div>
          </div>
          <a href="#benefits" className="hover:text-blue-700">Benefits</a>
          <a href="#why-brand" className="hover:text-blue-700">Why Medisoul</a>
          <a href="#why-ionizer" className="hover:text-blue-700">Why Water Ionizer</a>
          <a href="#certs" className="hover:text-blue-700">Certifications</a>
          <a href="#blogs" className="hover:text-blue-700">Blogs</a>
          <a href="#testimonials" className="hover:text-blue-700">Testimonials</a>
          <a href="#contact" className="hover:text-blue-700">Contact Us</a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 text-sm bg-blue-600 text-white hover:bg-blue-700">
            Get Pricing
          </button>
        </div>

        <a href="#contact" className="md:hidden inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 text-sm border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.92 4.2 2 2 0 0 1 4.92 2h2a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.02a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call
        </a>
      </div>

      <div
        id={mobileMenuId}
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden max-w-7xl mx-auto px-4 pb-3 ${isMobileOpen ? "block" : "hidden"}`}
      >
        <div className="mt-2 rounded-xl border bg-white p-2 shadow-sm">
          <a href="#home" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Home</a>
          <a href="#about" className="block rounded-lg px-3 py-2 hover:bg-gray-50">About Us</a>

          <div className="rounded-lg">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-50"
              aria-expanded={isMobileProductsOpen}
              aria-controls={productsPanelId + "-mobile"}
              onClick={() => setIsMobileProductsOpen(v => !v)}
            >
              <span>Products</span>
              <svg className={`h-4 w-4 shrink-0 transition-transform ${isMobileProductsOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </button>
            <div id={productsPanelId + "-mobile"} hidden={!isMobileProductsOpen} className="mt-1 space-y-1 pl-3">
              <a href="#prod-home" className="block rounded-md px-3 py-2 hover:bg-gray-50">Home Ionizers</a>
              <a href="#prod-commercial" className="block rounded-md px-3 py-2 hover:bg-gray-50">Commercial Ionizers</a>
              <a href="#prod-filters" className="block rounded-md px-3 py-2 hover:bg-gray-50">Filters & Cartridges</a>
              <a href="#prod-accessories" className="block rounded-md px-3 py-2 hover:bg-gray-50">Accessories</a>
              <a href="#prod-compare" className="block rounded-md px-3 py-2 hover:bg-gray-50 font-medium text-blue-700">Compare Models</a>
            </div>
          </div>

          <a href="#benefits" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Benefits</a>
          <a href="#why-brand" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Why Medisoul</a>
          <a href="#why-ionizer" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Why Water Ionizer</a>
          <a href="#certs" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Certifications</a>
          <a href="#blogs" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Blogs</a>
          <a href="#testimonials" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Testimonials</a>
          <a href="#contact" className="block rounded-lg px-3 py-2 hover:bg-gray-50">Contact Us</a>

          <a href="#pricing" className="mt-2 block rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
            Get Pricing
          </a>
        </div>
      </div>
    </header>
  );
}


