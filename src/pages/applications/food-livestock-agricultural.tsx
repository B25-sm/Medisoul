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

export default function FoodLivestockAgriculturalPage() {
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
              Applications
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Electrolysis Ionized Water Device for Food, Livestock and Agricultural
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD100] font-medium max-w-3xl mx-auto">
              Large Capacity ionized water device for foods, livestock and agriculture
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 space-y-12">
          
          {/* Introduction */}
          <Card className="rounded-2xl shadow-lg border-2 border-[#FFD100] bg-gradient-to-br from-[#FFD100]/10 to-white">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                A state-of-the-art electrolysis ionized water production device which sterilizes and cleanses food materials and cooking devices by using ionized water produced by cutting-edge electrolysis technology.
              </p>
            </CardContent>
          </Card>

          {/* Device Overview */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Eco-Friendly Safety Device
              </h2>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  It is an eco-friendly safety device which eradicates bacteria and virus, decomposes and cleanses proteins and micro-organic residues by using ionized sterilizing solution of pH 2.7-11.5 produced only by using water and salts.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Oxidized Water Ionizer</h3>
                    <p className="text-gray-700 mb-2"><strong>pH Range:</strong> 2.7-7.0</p>
                    <p className="text-gray-700"><strong>Residual Chlorine:</strong> 5-40ppm</p>
                    <p className="text-gray-700 mt-3 font-semibold">Sterilizes germs, bacteria and viruses</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                    <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Reduced Ionized Water</h3>
                    <p className="text-gray-700 mb-2"><strong>pH Range:</strong> 9.5-11.5</p>
                    <p className="text-gray-700 mt-3 font-semibold">Excellent in cleaning proteins, fats and oil</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Applications */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Applications
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Food & Beverage Industry</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Cleaning of pipe lines at beer or beverage factories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Sterilization and cleaning of raw milk tank and pipe line at dairy processing factories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Sterilization of food material after butchering at butchery of livestock, sterilization of chiller and facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Enhance of preservation and tastes through processing of crops by using ionized water</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Livestock & Agriculture</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Sterilization, disinfection and cleaning of livestock pens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Eco-friendly agriculture with reduced use of pesticides</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Medical & Healthcare</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Replace sterilization agents for cleansing endoscopes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Various disposable sterilization from a central supply room</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Use of Scrub Station before operation at operation rooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Use in focused infection control area such as newborn units and ICU</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Gargle water for dentistry</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4 font-semibold">
                    Opens a new era of infection control of hospital, a sterilizing solution system for medication.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Key Features & Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Sterilization Power</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Removes pathogenic bacteria within <strong>30 seconds</strong> with strong sterilization effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Sporicidal effects reaching the states of sterilization within <strong>60 minutes</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Directly acts on antibiotics resistant bacteria such as MRSA, VRE etc.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Does not generate resistance to medicine</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Safety & Efficiency</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Safe when directly contacted by the body</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Extremely small corrosiveness to materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Sterilization cost can be significantly reduced</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ionized Water Types */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Use of the Water Produced
              </h2>
              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Oxidized Ionized Water (pH 2.7-7.0)</h3>
                  <p className="text-gray-700 mb-2"><strong>Residual Chlorine:</strong> 5-40ppm</p>
                  <p className="text-gray-700 font-semibold">Sterilizes germs, bacteria and viruses</p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Reduced Ionized Water (pH 9.5-11.5)</h3>
                  <p className="text-gray-700 font-semibold">Excellent in cleansing proteins, fats and oil, provides anticorrosive effects</p>
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
