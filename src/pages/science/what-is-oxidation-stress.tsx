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

export default function WhatIsOxidationStressPage() {
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
              What is Oxidation Stress?
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD100] font-medium max-w-3xl mx-auto">
              Understanding the imbalance between free radicals and antioxidants, and its impact on health
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 space-y-12">
          
          {/* Definition Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                What is Oxidative Stress?
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Oxidative stress refers to an imbalance between <strong className="text-[#0A0F2C]">free radicals</strong> (unstable molecules that have one or more unpaired electrons in their outer shell) and the body's ability to detoxify them using antioxidants. When this balance tips in favor of free radicals, they can damage cells, proteins, lipids, and DNA—leading to various health problems.
                </p>
                
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 mt-6">
                  <p className="font-semibold text-red-800 text-lg mb-2">
                    ⚠️ The Problem:
                  </p>
                  <p className="text-gray-700">
                    Oxidative stress is a harmful state caused by an overload of free radicals and insufficient antioxidants to neutralize them.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#FFD100]/20 to-[#FFD100]/10 rounded-xl p-6 border-2 border-[#FFD100] mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">
                    Managing Oxidative Stress:
                  </p>
                  <p className="text-gray-700 mb-3">
                    Managing oxidative stress involves lifestyle choices like:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>A healthy diet (rich in antioxidants)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Regular exercise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Stress management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Avoiding environmental toxins</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#E5E5E5] rounded-lg p-6 mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    Free radicals are naturally produced in the body as a byproduct of normal metabolism, but external factors can increase their production excessively.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Causes Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Causes of Oxidative Stress
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Here are the main reasons or sources of oxidative stress:
              </p>
              
              <div className="space-y-6">
                
                {/* 1. Environmental Factors */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">Environmental Factors</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Pollution (air, water, and soil)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Radiation (UV rays from the sun or other sources)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Cigarette smoke</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Pesticides and industrial chemicals</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Lifestyle Factors */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">Lifestyle Factors</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Poor diet (high in processed foods, sugars, unhealthy fats)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Excessive alcohol consumption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Smoking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Lack of physical activity or overexertion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Chronic stress</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Medical Conditions */}
                <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">Medical Conditions</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Chronic inflammation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Diabetes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Cancer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Cardiovascular diseases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Neurodegenerative diseases (e.g., Alzheimer's, Parkinson's)</span>
                    </li>
                  </ul>
                </div>

                {/* 4. Aging */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">Aging</h3>
                  </div>
                  <p className="text-gray-700">
                    Natural aging processes involve gradual accumulation of oxidative damage.
                  </p>
                </div>

                {/* 5. Mitochondrial Dysfunction */}
                <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border-2 border-yellow-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">5</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">Mitochondrial Dysfunction</h3>
                  </div>
                  <p className="text-gray-700">
                    Defects in the energy-producing parts of cells can lead to overproduction of ROS (Reactive Oxygen Species).
                  </p>
                </div>

                {/* 6. Infections */}
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">6</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">Infections</h3>
                  </div>
                  <p className="text-gray-700">
                    Some bacterial or viral infections trigger immune responses that increase ROS production.
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>

          {/* Health Impact Section */}
          <Card className="rounded-2xl shadow-lg border-2 border-[#FFD100] bg-gradient-to-br from-[#FFD100]/10 to-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Health Impact of Oxidative Stress
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Oxidative stress occurs naturally and plays a role in the aging process. A large body of scientific evidence suggests that long-term oxidative stress contributes to the development of a range of chronic conditions.
                </p>
                
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 mt-6">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-4">Chronic Conditions Associated with Oxidative Stress:</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">Cancer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">Diabetes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">Heart disease</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">Neurodegenerative diseases</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">Inflammatory conditions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">Premature aging</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-2">
                    💡 Key Insight:
                  </p>
                  <p className="text-gray-700">
                    The damage caused by oxidative stress affects cells, proteins, lipids, and DNA, which can lead to various health problems. Maintaining a balance through antioxidants and healthy lifestyle choices is crucial for long-term health.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
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
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Balance is Key</h4>
                    <p className="text-gray-700 text-sm">Oxidative stress occurs when there's an imbalance between free radicals and antioxidants. The body needs sufficient antioxidants to neutralize harmful free radicals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Multiple Causes</h4>
                    <p className="text-gray-700 text-sm">Oxidative stress can be caused by environmental factors, lifestyle choices, medical conditions, aging, mitochondrial dysfunction, and infections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Prevention Through Lifestyle</h4>
                    <p className="text-gray-700 text-sm">A healthy diet rich in antioxidants, regular exercise, stress management, and avoiding environmental toxins can help manage oxidative stress.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Long-term Impact</h4>
                    <p className="text-gray-700 text-sm">Chronic oxidative stress is linked to serious health conditions including cancer, diabetes, heart disease, and neurodegenerative disorders.</p>
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
