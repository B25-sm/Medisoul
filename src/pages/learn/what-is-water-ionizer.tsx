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

export default function WhatIsWaterIonizerPage() {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Medisoul Alkaline Water Comprises of
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD100] font-medium">
              For Anti-Oxidant Hydrogen Rich Alkaline Water
            </p>
            <div className="mt-8 text-4xl md:text-6xl font-bold tracking-widest text-[#FFD100]">
              A L K A L I N E &nbsp; I O N I Z E R S
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 space-y-12">
          
          {/* What is Water Ionizer Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                What is Water Ionizer
              </h2>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The electrolyzed water generating device counteracts positive and negative charges in electrolytic cell and allow the direct current power supply of the electrode the generating electrolyzed water. When there is a septum between the cathode and anode, or without, and whether or not there is the presence of electrolyte such as salt or not determines what kind of electrolyzed water generating device it is.
                </p>
                <p className="font-semibold text-[#0A0F2C]">
                  Our company produces an electrolyzed water generating device that creates strong acidic and alkaline water without the use of electrolyte such as salt.
                </p>
                <p className="mt-6 pt-6 border-t border-gray-200">
                  Water ionizers have been used in Japan and other parts of Asia for over 40 years and are certified by the Korean and Japanese Ministries of Health as an approved medical device. A water ionizer is a device that raises the pH level of drinking water by using electrolysis to separate the incoming water stream into alkaline and acidic components. The alkaline water is intended for drinking, while the acidic water can be used for cleaning or skincare.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ionized Water Generating Principle Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Ionized (Electrolyzed) Water Generating Principle
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  In water there is combination of many different elements such as Ca, Mg, Na, K, Cl, S and I. If you ionize this water alkaline ions (minerals such as Ca, Mg, K and Na) will attract to the (-) pole and acidic ions (Cl, S, and P) will attract to the (+) pole.
                </p>
                <p>
                  Also, in the ionization process all the minerals will be in the colloidal state and the water molecule clusters will be broken down in size (cluster/about 60-70 HZ) which will absorb more readily into the cells of the body facilitating better absorption of minerals as well.
                </p>
                <p>
                  Water always disassembles weakly to hydrogen and hydroxide ions. When water is electrolyzed the hydrogen ion receives an electron from the cathode and become an active hydrogen. As this metal colloid (mineral) adheres to the active hydrogen the active hydrogen becomes stabilized and combines with active oxygen in the body forming water and thus removing the active oxygen from the body.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How Water Ionizers Work Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-8 pb-3 border-b-2 border-[#FFD100]">
                How Water Ionizers Work
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                {/* Filtration */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FFD100] rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#0A0F2C]">1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">Filtration</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Incoming tap water is filtered to remove impurities like chlorine, sediment, and heavy metals.
                  </p>
                  <div className="bg-[#E5E5E5] rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      <strong className="text-[#0A0F2C]">Note:</strong> We use Vitamin C ceramic to remove chlorine in the water.
                    </p>
                  </div>
                </div>

                {/* Electrolysis */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FFD100] rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#0A0F2C]">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">Electrolysis</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    The filtered water passes over electrically charged plates (usually titanium coated with platinum). This process:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Separates the water into alkaline water (rich in OH⁻ ions) and acidic water (rich in H⁺ ions).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Also alters the oxidation-reduction potential (ORP), making alkaline water a potential antioxidant.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Major Parts Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-8 pb-3 border-b-2 border-[#FFD100]">
                Major Parts
              </h2>
              
              <div className="grid gap-6 md:grid-cols-3">
                {/* Electrodes */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#FFD100] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Electrodes (Plates)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Typically made from platinum-coated titanium. The number and quality affect ionization power.
                  </p>
                </div>

                {/* Filters */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#FFD100] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Filters</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Carbon filters or multi-stage filters to clean the water. We use Vitamin C ceramic to remove chlorine.
                  </p>
                </div>

                {/* pH, ORP Controls */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#FFD100] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">pH, ORP Controls</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Adjust settings to select desired pH level (usually from 3.0 to 11.5).
                  </p>
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
