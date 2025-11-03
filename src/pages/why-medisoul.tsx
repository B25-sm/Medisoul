import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"/>
    </svg>
  );
}

function WaterIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-6 w-6"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2c-3 4.5-7 8.2-7 12a7 7 0 1 0 14 0c0-3.8-4-7.5-7-12z"/>
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

const features = [
  {
    title: "Medical-Grade Materials",
    description: "FDA-approved, BPA-free components ensuring the highest safety standards for your family's health.",
    icon: <ShieldIcon className="h-6 w-6" />,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Dual Ultra-Filtration",
    description: "Advanced 10-stage filtration system removing 99.9% of contaminants while preserving essential minerals.",
    icon: <WaterIcon className="h-6 w-6" />,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Strong Negative ORP",
    description: "Powerful antioxidant potential with ORP levels reaching -400mV for maximum health benefits.",
    icon: <StarIcon className="h-6 w-6" />,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Automatic Self-Clean",
    description: "Smart cleaning system prevents scale buildup and maintains optimal performance with zero maintenance.",
    icon: <CheckIcon className="h-6 w-6" />,
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "Touch Smart Faucet",
    description: "Modern touch interface with LED display showing real-time pH, ORP, and filter life status.",
    icon: <WaterIcon className="h-6 w-6" />,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Local Service Network",
    description: "24/7 customer support with certified technicians providing installation and maintenance services.",
    icon: <ShieldIcon className="h-6 w-6" />,
    color: "from-rose-500 to-rose-600"
  }
];

export default function WhyMedisoulPage() {
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

      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20">
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-2 text-white text-sm font-medium mb-6">
              <ShieldIcon className="mr-2 h-4 w-4" />
              Why Choose Medisoul
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 lg:text-5xl">
              The <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Medisoul Advantage</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 lg:text-3xl">
              Industry-Leading Excellence Since 2003
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Unmatched quality, innovation, and service that sets us apart in the water ionizer industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-emerald-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">20+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Years Innovation</div>
                <div className="text-sm text-gray-600">Leading the industry with continuous R&D</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">86+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Countries Served</div>
                <div className="text-sm text-gray-600">Global presence with local support</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Happy Customers</div>
                <div className="text-sm text-gray-600">Proven track record of satisfaction</div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <Card className="relative h-full rounded-3xl border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardContent className="relative p-8 space-y-6">
                    <motion.div 
                      whileHover={{ 
                        rotate: 360, 
                        scale: 1.2,
                        transition: { duration: 0.6 }
                      }}
                      className={`rounded-2xl bg-gradient-to-br ${feature.color} p-4 text-white shadow-lg w-fit group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      {feature.icon}
                    </motion.div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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

