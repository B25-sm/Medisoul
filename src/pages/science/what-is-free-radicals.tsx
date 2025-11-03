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

export default function WhatAreFreeRadicalsPage() {
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
              What Are Free Radicals?
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD100] font-medium max-w-3xl mx-auto">
              Understanding unstable molecules, oxidative damage, and the role of antioxidants
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
                What Are Free Radicals?
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Free radicals are <strong className="text-[#0A0F2C]">unstable molecules</strong> that have one or more unpaired electrons in their outer shell. Because of this instability, they seek to steal electrons from other molecules in the body (like DNA, proteins, or cell membranes), causing oxidative damage.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">
                    Understanding Atoms and Stability:
                  </p>
                  <p className="text-gray-700 mb-3">
                    We are all made up of atoms. Atoms that have a full outer shell of electrons tend to be stable and do not enter into chemical reactions with other atoms or molecules. Atoms that do not have a full outer shell of electrons desperately seek out electrons wherever they can so they can become stable and inert.
                  </p>
                  <p className="text-gray-700 font-semibold">
                    These unstable atoms are called free radicals.
                  </p>
                </div>

                <p>
                  Clearly, a free radical is any molecular species that contains an unpaired electron in an atomic orbital. With the presence of an unpaired electron results unstable and highly reactive and desperately seeking electrons for stability. To seek stability, free radicals tend to try and steal an electron from whatever molecule happens to be nearby.
                </p>

                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 mt-6">
                  <p className="font-semibold text-red-800 text-lg mb-2">
                    ⚠️ Chain Reaction Effect:
                  </p>
                  <p className="text-gray-700">
                    In turn, the molecule that loses an electron to a free radical becomes unstable and becomes a new free radical. As such, free radicals can be the cause of a never-ending chain reaction. They can either donate an electron to or accept an electron from other molecules, therefore behaving as oxidants or reductants.
                  </p>
                </div>

                <p>
                  A slice of apple that turns brown or a piece of metal that rusts are examples of oxidation that we observe in our daily lives. Thus, the free radicals cause oxidation in our body.
                </p>

                <div className="bg-[#E5E5E5] rounded-lg p-6 mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    They are naturally produced during normal cellular processes like metabolism, but their levels can increase due to external factors such as pollution, smoking, or radiation.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#FFD100]/20 to-[#FFD100]/10 rounded-xl p-6 border-2 border-[#FFD100] mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-2">
                    ⚖️ Balance is Key:
                  </p>
                  <p className="text-gray-700">
                    Not all free radicals are harmful—some play important roles in normal bodily functions like fighting infections. Problems arise when they are overproduced or not controlled by antioxidants, leading to oxidative stress.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examples of Free Radicals */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Examples of Free Radicals
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Here are common types of free radicals in the body:
              </p>

              <div className="space-y-6">
                {/* Reactive Oxygen Species */}
                <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">O₂</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">1. Reactive Oxygen Species (ROS)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    These are oxygen-containing free radicals and are the most common type. The most important oxygen-containing free radicals in many disease states are:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Superoxide anion</strong> (O₂⁻)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Hydroxyl radical</strong> (•OH)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Hydrogen peroxide</strong> (H₂O₂) – not a radical itself but can generate free radicals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Singlet oxygen</strong> (¹O₂)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Hypochlorite</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Reactive Nitrogen Species */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-white">N</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0F2C]">2. Reactive Nitrogen Species (RNS)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    These involve nitrogen and are often formed during immune responses:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Nitric oxide</strong> (NO•)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Peroxynitrite</strong> (ONOO⁻)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Peroxynitrite radical</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How Free Radicals Affect the Body */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                How Free Radicals Affect the Body
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  These are highly reactive species, capable in the nucleus, and in the membranes of cells of damaging biologically relevant molecules such as DNA, proteins, carbohydrates, and lipids. Free radicals attack important macromolecules leading to cell damage and homeostatic disruption.
                </p>

                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                    <p className="text-gray-700">
                      <strong className="text-red-700">Damage cell membranes</strong>
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                    <p className="text-gray-700">
                      <strong className="text-red-700">Mutate DNA, potentially leading to cancer</strong>
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                    <p className="text-gray-700">
                      <strong className="text-red-700">Oxidize lipids, leading to atherosclerosis</strong>
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                    <p className="text-gray-700">
                      <strong className="text-red-700">Alter proteins, affecting their function</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-[#E5E5E5] rounded-lg p-6 mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-[#0A0F2C]">Targets of free radicals</strong> include all kinds of molecules in the body. Among them, lipids, nucleic acids, and proteins are the major targets. Free radicals thus adversely alter lipids, proteins, and DNA and trigger a number of human diseases. Hence application of external source of antioxidants can assist in coping this oxidative stress.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Oxygen Radicals Example */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Example with Oxygen Radicals
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  One of the more common types of free radicals is <strong className="text-[#0A0F2C]">oxygen-free radicals</strong>. These are oxygen atoms that are missing one or more electrons in their outer shell. Oxygen-free radicals cause oxidation, both in the air and in our bodies. A slice of apple that turns brown or a piece of metal that rusts are examples of oxidation that we observe in our daily lives.
                </p>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">
                    The Oxygen We Breathe:
                  </p>
                  <p className="text-gray-700 mb-3">
                    The oxygen we take into our lungs. When we breathe is carried to every corner of our bodies and becomes a source of energy. However, as part of this process, "Oxygen radicals" are produced. These oxygen radicals bond with unsaturated fatty acids to form lipid peroxides, which contribute to medical problems such as:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Aging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Cancer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span>Hardening of the arteries</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    It has been reported in recent years that oxygen radicals can even damage the DNA chain. In fact oxygen radicals are thought to cause most of the diseases that affect modern people. Fortunately, there is something that will eliminate oxygen radicals in a way that is both safe and effective: <strong className="text-[#0A0F2C]">Antioxidant Water</strong>.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-2">
                    💡 Important Note:
                  </p>
                  <p className="text-gray-700">
                    Free radicals are not evil or bad - in moderation. Our body performs many functions and there will always be some free radicals created. Free radicals are essential in the synthesis of energy and essential nutrients and are also involved in boosting our immune system. However, if the level of free radicals gets too high in the body, one can run into major problems. Numerous diseases and health issues have been linked to high levels of free radicals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Anti-Oxidation and Early Aging */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Anti-Oxidation: Early Aging Prevention
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Oxidation leads to <strong className="text-[#0A0F2C]">Early Aging</strong> in the human body. The rate of oxidation depends on number of free radicals generates in human body.
                </p>

                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-4">
                    Free radicals will generate due to the following effects:
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Coffee & Energy drinks</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Alcohol Intake</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Poor Nutrition</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">The sun</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Stress</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Excessive Workload</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Smoking</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Infection/Illness disease</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Prescription & OTC medicines</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Processed & Junk Foods</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Environmental Toxins (Road Dust, Fabric body creams, plastics, pesticides, paints)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Ageing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">NZ Oils deficient in key minerals</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1">•</span>
                      <span className="text-gray-700">Allergies/food intolerances</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Antioxidant and Anti-Inflammatory Effects */}
          <Card className="rounded-2xl shadow-lg border-2 border-[#FFD100] bg-gradient-to-br from-[#FFD100]/10 to-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Antioxidant and Anti-Inflammatory Effects
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-[#0A0F2C]">Antioxidants</strong> are molecules that neutralize free radicals by donating electrons without becoming unstable themselves. This helps prevent or reduce oxidative stress and protect cells from damage.
                </p>

                <p>
                  Alkaline water produced by ionizers is rich in antioxidants, which help neutralize free radicals in the body. This can potentially reduce oxidative stress, slow down aging, and lower the risk of chronic diseases, such as heart disease and cancer.
                </p>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">
                    Molecular Hydrogen in Ionized Water:
                  </p>
                  <p className="text-gray-700">
                    Molecular hydrogen in ionized water acts as a <strong className="text-[#0A0F2C]">selective antioxidant</strong>, neutralizing harmful reactive oxygen species (ROS) without affecting beneficial ones. This action helps reduce oxidative stress and inflammation, which are linked to various chronic diseases.
                  </p>
                </div>

                {/* Antioxidants in Alkaline Ionized Water Table */}
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 mt-8 overflow-x-auto">
                  <h3 className="text-2xl font-bold text-[#0A0F2C] mb-6">
                    Summary: Antioxidants in Alkaline Ionized Water
                  </h3>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0A0F2C] text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">Component</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-[#0A0F2C]">1. Molecular Hydrogen (H₂)</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <ul className="space-y-1 text-gray-700">
                            <li>• Primary antioxidant in ionized water</li>
                            <li>• Produced during electrolysis at the cathode (negative electrode)</li>
                            <li>• Acts as a selective antioxidant—neutralizes harmful free radicals like hydroxyl radicals (•OH) without affecting beneficial ones like nitric oxide (NO)</li>
                            <li>• Small and neutral, so it easily penetrates cells and mitochondria</li>
                            <li>• Scientifically shown to reduce oxidative stress and inflammation</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-[#0A0F2C]">2. Negative ORP</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <ul className="space-y-1 text-gray-700">
                            <li>• Measured in millivolts (mV)</li>
                            <li>• A negative ORP (e.g., -200 to -600 mV) indicates the water can donate electrons, acting as a reducing (antioxidant) agent</li>
                            <li>• Not a substance but a property of the water</li>
                            <li>• Indicates electron-donating (antioxidant) potential</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-[#0A0F2C]">3. OH⁻ Ions</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <ul className="space-y-1 text-gray-700">
                            <li>• Present in higher concentrations in alkaline water</li>
                            <li>• Not antioxidants themselves, but they contribute to the alkaline pH</li>
                            <li>• May help neutralize excess acids in the body</li>
                            <li>• Help buffer acids; may indirectly support redox balance</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Unstable Molecules</h4>
                    <p className="text-gray-700 text-sm">Free radicals are unstable molecules with unpaired electrons that seek to steal electrons from other molecules, causing oxidative damage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Chain Reactions</h4>
                    <p className="text-gray-700 text-sm">Free radicals can trigger chain reactions where molecules that lose electrons become new free radicals themselves.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Antioxidant Protection</h4>
                    <p className="text-gray-700 text-sm">Molecular hydrogen in ionized water acts as a selective antioxidant, neutralizing harmful free radicals while preserving beneficial ones.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[#0A0F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A0F2C] mb-1">Balance is Essential</h4>
                    <p className="text-gray-700 text-sm">While some free radicals are necessary for normal bodily functions, excessive levels can cause damage to DNA, proteins, and cell membranes.</p>
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
