import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

function WaterIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2c-3 4.5-7 8.2-7 12a7 7 0 1 0 14 0c0-3.8-4-7.5-7-12z"/>
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"/>
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.8 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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

export default function AboutPage() {
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

      {/* About Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
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
              
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-400/20 blur-xl"></div>
            </motion.div>
          </div>
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

