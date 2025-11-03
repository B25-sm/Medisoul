import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

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

export default function WhatIsPhOrpPage() {
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

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A0F2C] via-[#0A0F2C] to-[#1a1f3c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center rounded-full bg-[#FFD100] text-[#0A0F2C] px-4 py-2 text-sm font-medium mb-4">
              Technology
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              What are pH and ORP?
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD100] font-medium max-w-3xl mx-auto">
              Understanding the key concepts of ionization and the important health benefits of alkaline ionized water
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 space-y-12">
          
          {/* pH Scale Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                pH Scale
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The pH scale measures the concentration of hydrogen ions (H⁺) in water, indicating how acidic or basic (alkaline) a substance is. It ranges from 0 to 14. A pH of 7 is neutral, a pH less than 7 is acidic, and a pH greater than 7 is alkaline (or basic).
                </p>
                <p>
                  Since pH means <strong className="text-[#0A0F2C]">potential hydrogen</strong>, the pH unit value is the concentration of hydrogen ions in the water. Acidic solutions (solutions with higher concentrations of hydrogen (H⁺) ions) are measured to have lower pH values than basic or alkaline solutions.
                </p>
                
                {/* pH Scale Visual */}
                <div className="my-8 bg-gradient-to-r from-red-600 via-yellow-400 via-green-400 to-blue-600 rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-white bg-red-600 px-3 py-1 rounded">Acidic</span>
                    <span className="text-sm font-semibold text-[#0A0F2C] bg-white px-3 py-1 rounded">Neutral</span>
                    <span className="text-sm font-semibold text-white bg-blue-600 px-3 py-1 rounded">Alkaline</span>
                  </div>
                  <div className="flex items-center justify-between text-white font-bold">
                    <span className="text-sm">0</span>
                    <span className="text-sm">3</span>
                    <span className="text-lg">7</span>
                    <span className="text-sm">10</span>
                    <span className="text-sm">14</span>
                  </div>
                </div>

                <div className="bg-[#E5E5E5] rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Understanding pH Balance</h3>
                  <p>
                    At a pH of 7, water has an equal number of hydrogen ions (H⁺) and hydroxyl ions (OH⁻).
                  </p>
                  <p>
                    At a pH of 8, water has a <strong className="text-[#0A0F2C]">tenfold greater</strong> concentration of OH⁻ ions than it does H⁺ ions, and a <strong className="text-[#0A0F2C]">hundredfold greater</strong> concentration at pH of 9, so on and so forth.
                  </p>
                  <p className="font-semibold text-[#0A0F2C] pt-3 border-t border-gray-400">
                    As one can observe, each pH unit value represents a tenfold difference between the hydrogen ion (H⁺) concentration and hydroxyl ion (OH⁻) concentration in the water.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ORP Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Alkaline Water with Reducing Power (-ORP)
              </h2>
              <h3 className="text-2xl font-bold text-[#0A0F2C] mb-6 mt-6">
                ORP (Oxidation-Reduction Potential)
              </h3>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  ORP, or <strong className="text-[#0A0F2C]">oxidation-reduction potential</strong>, measures the ability of water to oxidize or reduce molecules around it, or in other words, it's potential to steal or donate electrons. A higher ORP indicates a greater ability to oxidize, while a lower ORP indicates a greater ability to reduce.
                </p>
                
                <div className="bg-gradient-to-br from-[#FFD100]/20 to-[#FFD100]/10 rounded-xl p-6 border-2 border-[#FFD100]">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">
                    Alkaline water must contain alkaline minerals and negative oxidation-reduction potential (ORP).
                  </p>
                  <p className="text-gray-700">
                    ORP is the ability of water to act as a pro- or antioxidant. <strong className="text-[#0A0F2C]">The more negative the ORP value, the more anti-oxidizing it is.</strong>
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mt-8">
                  {/* Positive ORP */}
                  <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">+</span>
                      </div>
                      <h4 className="text-xl font-bold text-red-700">Positive ORP (+mV)</h4>
                    </div>
                    <p className="text-gray-700">
                      Indicates <strong className="text-red-700">high oxidizing power</strong> - the ability to steal electrons, causing oxidation. This is associated with free radicals that can damage cells.
                    </p>
                  </div>

                  {/* Negative ORP */}
                  <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">-</span>
                      </div>
                      <h4 className="text-xl font-bold text-green-700">Negative ORP (-mV)</h4>
                    </div>
                    <p className="text-gray-700">
                      Indicates <strong className="text-green-700">high reducing power</strong> - the ability to donate electrons, acting as an antioxidant. This helps neutralize free radicals in the body.
                    </p>
                  </div>
                </div>

                <div className="bg-[#E5E5E5] rounded-lg p-6 mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    A numerical value indicating the oxidation of a substance caused by losing electrons, or the intensity of a substance's tendency to be reduced by receiving electrons. A value of <strong className="text-[#0A0F2C]">(+)mV indicates high oxidizing power</strong>, and <strong className="text-[#0A0F2C]">(-)mV indicates high reducing power</strong>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-[#FFD100] bg-gradient-to-br from-[#FFD100]/10 to-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Why This Matters
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                pH and ORP are key concepts to understand ionization and the important health benefits of alkaline ionized water.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Optimal pH Levels</h4>
                    <p className="text-gray-700 text-sm">Alkaline ionized water typically ranges from pH 8.5 to 11.5, providing optimal alkalinity for health benefits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Antioxidant Power</h4>
                    <p className="text-gray-700 text-sm">Negative ORP values indicate antioxidant capacity, helping to neutralize free radicals in the body.</p>
                  </div>
                </div>
              </div>
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
