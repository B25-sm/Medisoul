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

export default function SemiconductorCleaningPage() {
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
              Ionized Water for High End Semiconductor Cleaning
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD100] font-medium max-w-3xl mx-auto">
              Change the method as eco-friendly ionized water
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
                High-end semiconductor cleaning solutions using eco-friendly ionized water technology, providing superior performance with intelligent automation and smart connectivity.
              </p>
            </CardContent>
          </Card>

          {/* Advanced Features */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Advanced System Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-4">Auto Diagnosis System</h3>
                  <p className="text-gray-700">Automated diagnostic capabilities for optimal performance monitoring</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-4">Auto Cleaning Water Cell</h3>
                  <p className="text-gray-700">Self-cleaning water cell technology for consistent quality</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-4">Auto Drainage System</h3>
                  <p className="text-gray-700">Automatic drainage system for efficient operation</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-4">Ultra Purification System</h3>
                  <p className="text-gray-700">Advanced ultra purification for high-purity water production</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Technology */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Smart Technology & Connectivity
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">IoT Connected System</h3>
                  <p className="text-gray-700 mb-3">
                    Connected to Intelligent smart home control system and smart phone App for remote monitoring and control.
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Real-time system monitoring via smartphone app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Intelligent smart home integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Remote control and diagnostics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Energy Efficiency */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Energy Efficiency & Performance
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Save Energy</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>No stand-by electric consumption</strong> by SMPS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Optimized power management</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Stable Performance</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Stable performance under any water quality level</strong> by SMPS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Consistent output regardless of input water conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Easy Maintenance */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Easy Maintenance
              </h2>
              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <h3 className="text-xl font-bold text-[#0A0F2C] mb-3">Filter Exchange</h3>
                <p className="text-gray-700 font-semibold">Easy filter exchange system for convenient maintenance</p>
              </div>
            </CardContent>
          </Card>

          {/* Best Electrolytic Cell */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                The Best Electrolytic Cell Technology
              </h2>
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-4">Advanced Cell Design</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>No heat at stand-by</strong> - energy efficient operation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Automatic Polarity Reverse cleaning cell</strong> - self-maintaining system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Increasing life span of Electrode</strong> by A cell Technology (Automatic Cross Cleaning System)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-4">Unique Cleaning Process</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Automatic reverse charge and flow way</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Double cross auto cleaning</strong> without waiting time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>No scale buildup</strong> - prevents mineral deposits</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-[#0A0F2C] mb-4">Multi-Stage Filtration</h3>
                  <p className="text-gray-700 mb-3"><strong>10 Phase 2 Filter System</strong></p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>NSF approved materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Approved by KFDA (Korea Food and Drug Administration)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Advanced multi-stage purification process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Summary */}
          <Card className="rounded-2xl shadow-lg border-2 border-[#FFD100] bg-gradient-to-br from-[#FFD100]/10 to-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Key Benefits for Semiconductor Cleaning
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center text-[#0A0F2C] font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-[#0A0F2C] mb-1">Eco-Friendly</h3>
                      <p className="text-gray-700 text-sm">Environmentally sustainable cleaning solution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center text-[#0A0F2C] font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-[#0A0F2C] mb-1">Energy Efficient</h3>
                      <p className="text-gray-700 text-sm">Zero stand-by consumption, reduced operational costs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center text-[#0A0F2C] font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-[#0A0F2C] mb-1">Automated Maintenance</h3>
                      <p className="text-gray-700 text-sm">Self-cleaning technology, minimal manual intervention</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center text-[#0A0F2C] font-bold">4</div>
                    <div>
                      <h3 className="font-bold text-[#0A0F2C] mb-1">Superior Performance</h3>
                      <p className="text-gray-700 text-sm">High-purity water for critical semiconductor applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center text-[#0A0F2C] font-bold">5</div>
                    <div>
                      <h3 className="font-bold text-[#0A0F2C] mb-1">Smart Connectivity</h3>
                      <p className="text-gray-700 text-sm">IoT enabled for remote monitoring and control</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center text-[#0A0F2C] font-bold">6</div>
                    <div>
                      <h3 className="font-bold text-[#0A0F2C] mb-1">Long Lifespan</h3>
                      <p className="text-gray-700 text-sm">Extended electrode life with automatic cross cleaning</p>
                    </div>
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
