import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const features = [
  {
    icon: <WaterIcon className="h-6 w-6" />,
    title: "Hydrogen-Rich Water",
    desc: "Electrolysis infuses molecular hydrogen (H₂) for selective antioxidant action.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Dual Ultra Filtration",
    desc: "Multi-stage filters with carbon, ceramic & vitamin-C media to reduce chlorine, sediments, heavy metals.",
  },
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "Adjustable pH & ORP",
    desc: "Drinking pH 8.5-9.5, cleaning up to pH 10; strong acidic stream for hygiene around pH ≤2.7.",
  },
  {
    icon: <CheckIcon className="h-6 w-6" />,
    title: "Micro-Clustering",
    desc: "Smaller water clusters improve hydration and nutrient transport.",
  },
];

export default function BenefitsPage() {
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

      {/* Benefits Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 h-40 w-40 rounded-full bg-blue-100/30 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-emerald-100/30 blur-2xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 text-white text-sm font-medium mb-6">
              <StarIcon className="mr-2 h-4 w-4" />
              Premium Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 lg:text-5xl">
              Why Choose an <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Ionizer</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 lg:text-3xl">
              The Science Behind Superior Hydration
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Experience the science-backed benefits of ionized water with our advanced technology.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-1">pH 8.5-11.5</div>
                <div className="text-sm text-gray-600">Alkaline Range</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600 mb-1">-400mV</div>
                <div className="text-sm text-gray-600">ORP Level</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-1">H₂</div>
                <div className="text-sm text-gray-600">Molecular Hydrogen</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-xl">
                <div className="text-2xl font-bold text-amber-600 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Pure Water</div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, index) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <Card className="relative h-full rounded-3xl border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="relative p-8 pb-4">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-4 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      >
                        {f.icon}
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                          {f.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative p-8 pt-2">
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {f.desc}
                    </p>
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

