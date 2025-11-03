import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.92 4.2 2 2 0 0 1 4.92 2h2a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.02a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"/>
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 12.39A2 2 0 0 0 9.62 15h8.76a2 2 0 0 0 2-1.61L22 8H6"/>
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
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

      <Navbar />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-4xl font-bold text-center">Contact Us</h2>
          <p className="mb-8 text-center text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our specialists for personalized recommendations and expert support.
          </p>
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
                  <label className="text-sm font-medium">Name</label>
                  <input className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-blue-200 focus:ring" placeholder="Your name"/>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-blue-200 focus:ring" placeholder="you@example.com"/>
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-blue-200 focus:ring" rows={4} placeholder="Tell us about your needs"/>
                </div>
                <Button className="w-full" type="submit">Request Callback</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

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

