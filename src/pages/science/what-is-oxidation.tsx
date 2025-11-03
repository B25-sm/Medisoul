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

export default function WhatIsOxidationPage() {
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
              Health Science
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              What is Oxidation?
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD100] font-medium max-w-3xl mx-auto">
              Understanding chemical reactions, oxidation, reduction, and the role of hydrogen
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 space-y-12">
          
          {/* Hydrogen Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Hydrogen
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Hydrogen gas (H₂) is a <strong className="text-[#0A0F2C]">reducing agent</strong>, which means it can donate electrons to other substances, reducing their oxidation state.
                </p>
                
                <div className="bg-gradient-to-br from-[#FFD100]/20 to-[#FFD100]/10 rounded-xl p-6 border-2 border-[#FFD100] mt-6">
                  <p className="text-lg font-semibold text-[#0A0F2C] mb-3">
                    Scientific Research on Hydrogen Water
                  </p>
                  <p className="text-gray-700">
                    There are over <strong className="text-[#0A0F2C]">1000 clinical studies</strong> on the benefits of hydrogen water. Discover ways to increase your energy, lose weight and promote overall health by adding hydrogen-rich water to your healthy lifestyle.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Oxidation Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Oxidation
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Oxidants, also known as <strong className="text-[#0A0F2C]">oxidizing agents</strong>, are substances that cause oxidation by accepting electrons from another substance. In the process, the oxidant itself gets reduced. 
                </p>
                
                <div className="bg-[#E5E5E5] rounded-lg p-6 my-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-2">
                    Key Definitions:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Oxidation</strong> = loss of electrons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Reduction</strong> = gain of electrons</span>
                    </li>
                  </ul>
                </div>

                <p>
                  A chemical reaction that takes place when a substance comes into contact with oxygen or another oxidizing substance. Examples of oxidation are rust and the brown color on a cut apple. Two key types of chemical reactions are <strong className="text-[#0A0F2C]">oxidation</strong> and <strong className="text-[#0A0F2C]">reduction</strong>.
                </p>

                <p>
                  Clearly, <strong className="text-[#0A0F2C]">oxidation is the loss of electrons</strong> during a reaction by a molecule, atom or ion. Oxidation occurs when the oxidation state of a molecule, atom, or ion is increased. The opposite process is called <strong className="text-[#0A0F2C]">reduction</strong>, which occurs when there is a gain of electrons or the oxidation state of an atom, molecule, or ion decreases.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] mb-2">
                    Important Note:
                  </p>
                  <p className="text-gray-700">
                    Oxidation doesn't necessarily have anything to do with oxygen! Originally, the term was used when oxygen caused electron loss in a reaction.
                  </p>
                </div>

                {/* Example: Hydrogen and Fluorine */}
                <div className="bg-gray-50 rounded-lg p-6 mt-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-4">Example: Hydrogen and Fluorine Reaction</h3>
                  <p className="text-gray-700 mb-4">
                    An example of a reaction is that between hydrogen and fluorine gas to form hydrofluoric acid:
                  </p>
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-300 font-mono text-center text-lg mb-4">
                    H₂ + F₂ → 2 HF
                  </div>
                  <p className="text-gray-700 mb-4">
                    In this reaction, hydrogen is being oxidized and fluorine is being reduced. The reaction may be better understood if it is written in terms of two half-reactions:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border-2 border-gray-300 font-mono text-center">
                      H₂ → 2 H⁺ + 2 e⁻
                    </div>
                    <div className="bg-white rounded-lg p-4 border-2 border-gray-300 font-mono text-center">
                      F₂ + 2 e⁻ → 2 F⁻
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4 font-semibold text-[#0A0F2C]">
                    Note: There is no oxygen anywhere in this reaction!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examples of Oxidants Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Examples of Oxidants
              </h2>
              <div className="space-y-8">
                
                {/* Oxygen */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">O₂</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">1. Oxygen (O₂)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Reacts with many substances (e.g., metals) to form oxides.
                  </p>
                  <p className="text-gray-700 mb-3 font-semibold">Example:</p>
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-300 font-mono text-center text-lg">
                    2Mg + O₂ → 2MgO
                  </div>
                  <p className="text-gray-700 mt-3">
                    Oxygen oxidizes magnesium.
                  </p>
                </div>

                {/* Hydrogen Peroxide */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-white">H₂O₂</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">2. Hydrogen Peroxide (H₂O₂)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Common oxidant in chemical and biological systems.
                  </p>
                  <p className="text-gray-700 mb-3 font-semibold">Example:</p>
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-300 font-mono text-center text-lg">
                    H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O
                  </div>
                </div>

                {/* Potassium Permanganate */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-white">KMnO₄</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">3. Potassium Permanganate (KMnO₄)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Strong oxidizing agent in acidic, neutral, or basic solutions.
                  </p>
                  <p className="text-gray-700 mb-3 font-semibold">Example in acidic medium:</p>
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-300 font-mono text-center text-lg">
                    MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O
                  </div>
                </div>

                {/* Chlorine */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">Cl₂</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">4. Chlorine (Cl₂)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Acts as an oxidant by accepting electrons and forming chloride ions.
                  </p>
                  <p className="text-gray-700 mb-3 font-semibold">Example:</p>
                  <div className="bg-white rounded-lg p-4 border-2 border-gray-300 font-mono text-center text-lg">
                    Cl₂ + 2e⁻ → 2Cl⁻
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="rounded-2xl shadow-lg border-2 border-[#FFD100] bg-gradient-to-br from-[#FFD100]/10 to-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Key Takeaways
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Oxidation vs Reduction</h4>
                    <p className="text-gray-700 text-sm">Oxidation is the loss of electrons, while reduction is the gain of electrons. These processes always occur together in redox reactions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Hydrogen as Reducing Agent</h4>
                    <p className="text-gray-700 text-sm">Hydrogen gas can donate electrons, making it a powerful reducing agent that can counteract oxidation in the body.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Common Oxidants</h4>
                    <p className="text-gray-700 text-sm">Oxygen, hydrogen peroxide, potassium permanganate, and chlorine are all common oxidizing agents found in nature and industry.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Real-World Examples</h4>
                    <p className="text-gray-700 text-sm">Common examples include rust formation on metals and the browning of cut apples when exposed to air.</p>
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
