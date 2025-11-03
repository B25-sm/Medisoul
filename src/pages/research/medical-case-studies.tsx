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

export default function MedicalCaseStudiesPage() {
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
              Medical Research
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Medical Case Studies: Alkaline Water
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD100] font-medium max-w-3xl mx-auto">
              Clinical evidence from leading medical professionals demonstrating the therapeutic benefits of ionized alkaline water
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
                The following medical case studies are documented research from respected medical professionals in Japan, where water ionizers have been used for over 40 years and are certified by the Korean and Japanese Ministries of Health as approved medical devices.
              </p>
            </CardContent>
          </Card>

          {/* Diabetes Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Diabetes</h2>
                  <p className="text-gray-600 mt-1">Prof. Kuwata Keijiroo, Doctor of Medicine, Japan</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  "When I was serving in the Fire Insurance Association, I used to examine many diabetic patients. Besides treating them with drugs, I provided them with ionized water. After drinking ionized water for one month, 15 diabetic patients were selected and sent to Tokyo University for further test and observations."
                </p>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Key Findings:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Initially, the more serious patients were a bit apprehensive about the treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>When the ionized water was consumed for some time, the sugar in the blood and urine ranged from a ratio of <strong>300 mg/l to 2 mg/dc</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Patients had undergone 5 to 6 blood tests a day and detected to be <strong>within normal range</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Even 1 1/2 hour after meals, the blood sugar and urine ratio was <strong>100 mg/dc 0 mg/dc</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>The sugar in the urine has completely disappeared</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 mt-4">
                  <p className="font-semibold text-orange-800 text-sm mb-2">Diabetes Statistics (U.S. Department of Health and Human Services, 2000):</p>
                  <p className="text-gray-700 text-sm">
                    More Americans than ever before are suffering from diabetes, with the number of new cases averaging almost 800,000 each year. The disease has steadily increased in the United States since 1980, and in 1998, 16 million Americans were diagnosed with diabetes (10.6 million diagnosed, 5.4 million undiagnosed). Diabetes is the seventh leading cause of death in the United States, and more than 193,000 died from the disease and its related complication in 1996. The greatest increase—76 percent—occurred in people age 30 to 39.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* High Blood Pressure Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">H</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">High Blood Pressure</h2>
                  <p className="text-gray-600 mt-1">Prof. Kuninaka Hironage, Head of Kuninaka Hospital</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  "For over 10 years of my experience, my concept toward minerals, especially pertaining to ionic calcium in high blood pressure and other diseases is most significant. In accordance to the theory of medical Professor Gato of Kyushu University on Vitamin K (because vitamin K enables the blood calcium to increase), or the consumption of more ionized water, the effectiveness of the increase in the calcium in high blood pressure is most significant."
                </p>
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Key Findings:</p>
                  <p className="text-gray-700 mb-3">
                    Too many fats in the diets, which lead to the deposition of cholesterol on the blood vessels, which in turn constrict the blood flow, cause most illnesses such as high blood pressure.
                  </p>
                  <p className="text-gray-700 font-semibold">
                    By drinking ionized water for a period of 2 to 3 months, the blood pressure should slowly drop, because the ionized water is a good solvent, which dissolves the cholesterol in the blood vessels.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gynecological Conditions Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">G</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Gynecological Conditions</h2>
                  <p className="text-gray-600 mt-1">Prof. Watanabe Ifao, Watanabe Hospital, Japan</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  "Ionized water improves body constituents and ensures effective healing to many illnesses. The uses of ionized water in gynecological patients have proved to be very effective. The main reason for its effectiveness is that this water can neutralize toxins."
                </p>
                <div className="bg-pink-50 rounded-xl p-6 border-2 border-pink-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Key Findings - Pre-Eclamptic Toxemia:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>When given ionized water to pre-eclamptic toxemia cases, the results are very significant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>During long years of servicing pre-eclamptic toxemia cases, women who consumed ionized water tend to deliver <strong>healthier babies with stronger muscles</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>A survey report carried out on babies in this group has <strong>intelligence above average</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Heart Disease Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">♥</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Vascular Heart Disease</h2>
                  <p className="text-gray-600 mt-1">Prof. Kuwata Keijiroo, Doctor of Medicine, Japan</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  "In my opinion, the miracle of ionized water is its ability to neutralize toxins, but it is not a cure. The difference is that the drug can only be used in each case. Ionized water, on the other hand, is generally drinkable and its neutralizing power is something very unexpected."
                </p>
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Case Study:</p>
                  <p className="text-gray-700 mb-3">
                    A 35-year-old man with heart disease. For 5 years, his illness worsened. He was treated at the Setagays State Hospital.
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>During these five years he was in and out of the hospital 5-6 times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>He underwent high-tech tests, such as angiography, where VINYL was injected into the heart through a vein</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>He consulted and sought treatment from many good doctors where he later underwent a major surgery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>After leaving the hospital, he quit his job to recuperate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Each time his illness recurred, the attack seemed even more serious</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 font-semibold text-lg mt-4">
                    Result: Last August, his relatives sank into despair, hoping that he would not live long. At that time, it happened that a relative of the victim crashed into an ionized water processor. <strong className="text-[#0A0F2C]">His disease responded well and is now recovering.</strong>
                  </p>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 mt-6">
                  <p className="font-semibold text-orange-800 text-sm mb-2">Cardiovascular Disease Statistics:</p>
                  <p className="text-gray-700 text-sm">
                    Note: In the United States, cardiovascular disease accounts for more than half of the approximately 2 million deaths annually. It is estimated that optimal treatment of drinking water could reduce mortality from cardiovascular disease in the United States up to 15 percent.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eczema Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">E</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Eczema</h2>
                  <p className="text-gray-600 mt-1">Prof. Tamura Tatsuji, Keifuku Rehabilitation Center, Japan</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  "Eczema is used to describe several varieties of skin conditions, which have a number of common features. The exact cause or causes of eczema are not fully understood. In many cases, eczema can be attributed by external irritants."
                </p>
                <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Case Study:</p>
                  <ul className="space-y-2 text-gray-700 ml-4 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>A 70-year-old patient, President of a vehicle spare parts company, suffered <strong>10 years of eczema</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Could not be cured effectively even under specialist treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>After the war, his lower limbs suffered acute eczema, which later became chronic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>He was repeatedly treated in a specialist skin hospital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>The left limb responded well to treatment, but not so on the right limb</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>He suffered severe itchiness, which, when scratched led to bleeding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>When first examined, his lower limb around the joints was covered with vesicles. Weeping occurred owing to serum exuding from the vesicles</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 font-semibold text-lg mt-4">
                    Treatment: I advised him to try consuming ionized water. He bought a unit and consumed the ionized water religiously and used the acidic water to bathe the affected areas.
                  </p>
                  <p className="text-gray-700 font-semibold text-lg mt-3 text-[#0A0F2C]">
                    Result: <strong>After 2 weeks of treatment the vesicles dried up. The eczema was completely cleared without any relapse after 1 1/2 month.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Allergy Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Allergy</h2>
                  <p className="text-gray-600 mt-1">Prof. Kuninaka Hironaga, Head of Kuninaka-Hospital, Japan</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Case Study 1:</p>
                  <p className="text-gray-700 mb-3">
                    "Mr. Yamada, the head of Police Research Institute, suffered from severe allergy. He was treated repeatedly by skin specialist, but with no success. Then he started consuming ionized water."
                  </p>
                  <p className="text-gray-700 font-semibold">
                    Result: <strong className="text-[#0A0F2C]">The allergy responded very well and was soon completely cured. No relapse had occurred, although he had taken all kinds of food.</strong> He was most grateful and excited about this treatment.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Case Study 2:</p>
                  <p className="text-gray-700 mb-3">
                    "As for myself, I had also suffered severe allergy. Ever since I began to consume ionized water, the allergy has recovered. Since then, I started a research on the effectiveness of ionized water."
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Research Findings:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Most allergies is due to <strong>acidification of body condition</strong> and is also related to consuming too much meat and sugar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>In every allergy case, the patient's <strong>antioxidant minerals are excessively low</strong> which in turn lower the body resistance significantly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>The body becomes overly sensitive and develops allergy easily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>To stabilize the sensitivity, calcium solution is injected into the vein</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 font-semibold mt-4">
                    "Therefore, it is clear that the ionized water has ionic calcium, which can help alleviate allergy. The ionic calcium not only enhances the heart, urination, and neutralization of toxins but controls acidity. It also enhances the digestive system and liver function. This will promote natural healing power and hence increase its resistance to allergy."
                  </p>
                  <p className="text-gray-700 mt-3">
                    "In some special cases of illness, which do not respond to drugs, it is found to respond well to ionized water."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Digestive System Problem Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Digestive System Problem</h2>
                  <p className="text-gray-600 mt-1">Prof. Kogure Keizou, Kogure Clinic of Juntendo Hospital, Japan</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  "The stomach is readily upset both by diseases affecting the stomach and by other general illnesses. In addition, any nervous tension or anxiety frequently causes gastric upset, vague symptoms when they are under some strain."
                </p>
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Key Findings:</p>
                  <p className="text-gray-700 mb-3">
                    "The important role of ionized water in our stomach is to neutralize the secretion and strengthen its functions."
                  </p>
                  <ul className="space-y-3 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Usually, after consuming the ionized water for 1 to 3 minutes, the gastric juice increase to 1 1/2 times</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>For those suffering from <strong>hyperchlorhydria or achlorhydria (low in gastric juice)</strong>, the presence of ionized water will stimulate the stomach cells to secrete more gastric juice. This in turn enhances digestion and absorption of minerals.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>However, on the other hand, those with <strong>hyperchlorhydria (high in gastric juice)</strong>, the ionized water neutralizes the excessive gastric juice. Hence, it does not create any adverse reaction.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    "According to the medical lecturer from Maeba University, the pH of the gastric secretion will still remain normal when ionized water is consumed. This proves that the ability of the ionized water is able to neutralize as well as to stimulate the secretion."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Obesity Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">O</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Obesity</h2>
                  <p className="text-gray-600 mt-1">Prof. Hatori Tasutaroo, Head of Akajiuiji Blood Centre, Yokohama Hospital, Faitama District</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  "Due to a higher standard of living, our eating habits have changed. We consume too much proteins, fats and sugar. The excess fats and carbohydrates are in the body as fats."
                </p>
                <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">The Obesity Problem:</p>
                  <p className="text-gray-700 mb-3">
                    In the present lifestyles, Americans are more extravagant in food compared to the Japanese. Due to this excessive intake obesity is a significant problem. Normally, one out of five males and one out of four females is obese.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Research Findings:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>The degree of "burn-out" in food intake largely depends on the amount of intake of vitamins and minerals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>When excessive intake of proteins, carbohydrates and fats occurs, the requirement for vitamins and minerals increases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Nowadays, many people suffer from acidification that leads to diabetes, heart diseases, cancer, liver and kidney diseases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>If our food intake can be completely burned off, then there is no deposition of fats. Obviously, there will be no acidification problem and hence there should not be any sign of obesity</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Ionized Water Solution:</p>
                  <p className="text-gray-700 mb-3">
                    "The ionized water contains an abundance of ionic calcium. This ionic calcium helps in the 'burn-off' process. By drinking ionized water, it provides sufficient minerals for our body."
                  </p>
                  <p className="text-gray-700 font-semibold text-lg">
                    "As a result, we do not need to watch our diet to stay slim. Hence, ionized water is a savior for those suffering from obesity and many adult diseases, providing good assistance in enhancing good health."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hypochlorhydria or Achlorhydria Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">H</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Hypochlorhydria or Achlorhydria</h2>
                  <p className="text-gray-600 mt-1">Prof. Kuninaka Hironage, Head of Kuninaka Hospital</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  "Too many fats in the diets, which lead to the deposition of cholesterol on the blood vessels, which in turn constrict the blood flow, cause most illnesses such as high blood pressure."
                </p>
                <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Research & Findings:</p>
                  <p className="text-gray-700 mb-3">
                    "In accordance with the theory of Professor Gato of Kyushu University on Vitamin K (because vitamin K enables the blood calcium to increase), or the consumption of more antioxidant water, the effectiveness of the increase in the calcium in high blood pressure is most significant."
                  </p>
                  <p className="text-gray-700 font-semibold text-lg">
                    "The consumption of alkaline antioxidant water for a period of 2 to 3 months, I have observed the blood pressure slowly drop, due to the water's solvent ability, which dissolves the cholesterol in the blood vessels."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kidney Disease Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">K</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Kidney Disease</h2>
                  <p className="text-gray-600 mt-1">Prof. Kuwata Keijiroo, Doctor of Medicine, Japan</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Clinical Observations:</p>
                  <p className="text-gray-700 mb-3">
                    Dr. Kerijiroo explains that for severe kidney failure, water intake has to be restricted. However whereas ordinary tap water "contains phosphate, calcium carbonate and the acidic ions... [that] tend to reduce the efficiency of the calcium ions...," he feels that in controlled amounts, Alkaline Ionic water will "strengthen the heart and increase urination."
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Treatment Protocol:</p>
                  <p className="text-gray-700 mb-3">
                    He goes on to claim that over the next six to twelve months, the patient should maintain an alkaline diet (reduced animal protein) and continue drinking the Alkaline Ionic water to reduce the amounts of urea and uric acid in the blood.
                  </p>
                  <p className="text-gray-700 mt-3">
                    He also feels that, through his clinical experience that:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4 mt-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Patients undergoing kidney dialysis should also drink Alkaline Ionic water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Those patients with kidney disease who do not respond to drugs should also consume Alkaline Ionic water</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Arthritis and Gouts Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Arthritis and Gouts</h2>
                  <p className="text-gray-600 mt-1">Dr. Reverse Aging by Sang Whang</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Understanding the Condition:</p>
                  <p className="text-gray-700 mb-3">
                    The reason behind Arthritis and Gouts is the accumulation of acid in the joints. The built-up acid damages the cartilage and irritates the joints. As we know, the joints are a place where the blood cannot easily remove waste products.
                  </p>
                  <p className="text-gray-700 mb-3">
                    According to Webster, gout is a metabolic disease characterized by an excess of uric acid in the blood and the accumulation of uric acid salts in the tissues surrounding the joints, especially in the feet and hands: it causes swelling and severe pain, especially in the big toe.
                  </p>
                  <p className="text-gray-700 font-semibold">
                    Current medicine has no effective treatment for this type of degenerative disease. Because it is painful, painkillers are instinctively taken; however, aspirin types are acidic and can still irritate the joints. The sooner we accept that these sores are the result of too much acidic waste, the sooner we find cures for these problems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diarrhea Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Diarrhea</h2>
                  <p className="text-gray-600 mt-1">Dr. Testsuji Hokudou, Director of Gastroenterology, National Ohkura Hospital</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Clinical Trial Results:</p>
                  <p className="text-gray-700 mb-3">
                    Dr. Testsuji discovered that according to double-blind clinical tests comparing the effects on various diseases, alkaline ionized water showed significantly more effective results against chronic diarrhea than the pure water group.
                  </p>
                  <p className="text-gray-700 font-semibold text-lg">
                    Alkaline ionized water was effective in <strong className="text-[#0A0F2C]">94.1% of volunteers</strong>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Osteoporosis Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">O</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Osteoporosis</h2>
                  <p className="text-gray-600 mt-1">Kyoto University School of Medicine, Department of Pathology</p>
                  <p className="text-gray-600 text-sm">Assistant Professor Rei Takahashi, Professor Emeritus Yoshinori Itokawa</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Alkaline ionized water promotes osteogenesis. Calcium metabolism disorders are considered one of the causes of osteoporosis, the number of cases of which is increasing today.
                </p>
                <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Research Study:</p>
                  <p className="text-gray-700 mb-3">
                    Therefore, we conducted a series of experiments by feeding rats different amounts of calcium and giving them tap water, calcium lactate solution, and alkaline ionized water during their free time.
                  </p>
                  <p className="text-gray-700 font-semibold text-lg">
                    According to the study of bone and blood composition, the osteogenesis rate was found in increasing order of tap water, calcium lactate solution and alkaline ionized water. Especially when the calcium content of the feed is low, it was believed that alkaline ionized water had a great effect on increasing osteogenesis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Constipation Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">C</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Constipation</h2>
                  <p className="text-gray-600 mt-1">Dr. Testsuji Hokudou, Director of Gastroenterology, National Ohkura Hospital</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-rose-50 rounded-xl p-6 border-2 border-rose-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Clinical Trial:</p>
                  <p className="text-gray-700 mb-3">
                    A clinical trial was conducted by giving alkaline ionized water and pure water to 163 volunteers who are suffering from stomach pain.
                  </p>
                  <p className="text-gray-700 font-semibold text-lg">
                    The overall rate of improvement was significantly higher for those who received alkaline ionized water.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uric Acid Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">U</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Uric Acid</h2>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-violet-50 rounded-xl p-6 border-2 border-violet-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Understanding Uric Acid and Gout:</p>
                  <p className="text-gray-700 mb-3">
                    As we know, uric acid is one of the main causes of painful symptoms experienced by gout patients. Therefore, controlling the production of this substance is key to managing symptoms. One technique currently used to achieve this goal is to alter the body's pH level to manipulate uric acid production.
                  </p>
                  <p className="text-gray-700 font-semibold text-lg">
                    Increasing the alkalinity of the body lowers uric acid levels. Uric acid can be diluted with drinking water, and the more alkaline your body will be and the more uric acid will dissolve in the water you drink.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* High Cholesterol Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">HC</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">High Cholesterol</h2>
                  <p className="text-gray-600 mt-1">Prof. Kuninaka Hironage, Head of Kuninaka Hospital</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-rose-50 rounded-xl p-6 border-2 border-rose-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Clinical Findings:</p>
                  <p className="text-gray-700 mb-3">
                    "There is too much fat in the diet, which leads to the accumulation of cholesterol in the arteries, which in turn narrows the blood circulation, causes most diseases, such as high blood pressure. According to the theory of Professor Gato of Kyushu University about vitamin K (because vitamin K causes the blood calcium level to rise) or consumption of water that prevents oxidation, the effectiveness of calcium increase in high blood pressure is most significant."
                  </p>
                  <p className="text-gray-700 font-semibold text-lg">
                    "While consuming Alkaline Antioxidant Water for 2-3 months, I have noticed a slow drop in blood pressure due to the dissolving power of the water, which dissolves cholesterol in the blood vessels."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancer Case Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">C</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A0F2C]">Cancer</h2>
                  <p className="text-gray-600 mt-1">Korean Scientific Reports on the Effects of Ionized Water</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Anti-cancer Effects Study:</p>
                  <p className="text-gray-700 mb-3">
                    After benign tumor cells were injected into cancer-free laboratory mice, the mice were given alkaline water and the tumor size was measured 20 days later.
                  </p>
                  <p className="text-gray-700 font-semibold text-lg">
                    The results showed that mice given ionized water (ARW) showed reduced tumor growth and tumor size compared to mice without ARW.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Colon Cleansing - Dr. Hiromi Shinya, CEO of Shinya Hospital, New York:</p>
                  <p className="text-gray-700 mb-3">
                    His revolutionary "Shinya" system is used in colonoscopy worldwide. "Health professionals know that a healthy and clean colon is the best first step to good health and that many illnesses and diseases are caused by an acidic and dirty colon."
                  </p>
                  <p className="text-gray-700">
                    Water is important for health. Drinking "good water", especially hard water with lots of calcium and magnesium, keeps your body at a healthy and alkaline PH.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Evidence - Longevity Study */}
          <Card className="rounded-2xl shadow-lg border-2 border-[#FFD100] bg-gradient-to-br from-[#FFD100]/10 to-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Scientific Research: Alkaline Water and Longevity
              </h2>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  A comprehensive 3-year survival study was conducted on a population of 150 mice to investigate the biological effects of alkaline water consumption. The study was published in Evidence-based Complementary and Alternative Medicine and analyzed using accelerated failure time (AFT) models.
                </p>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mt-6">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Key Findings:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Starting from the second year of life, nonparametric survival plots suggest that mice watered with alkaline water showed <strong>better survival than control mice</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Statistical analysis revealed that alkaline water provides <strong>higher longevity in terms of "deceleration aging factor"</strong> as it increases the survival functions when compared with control group</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Animals belonging to the population treated with alkaline water resulted in a <strong>longer lifespan</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span>Histological examination of mice kidneys, intestine, heart, liver, and brain revealed that <strong>no significant differences emerged</strong> among the three groups, indicating that no specific pathology resulted from the consumption of alkaline water</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Reference: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4906185/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Magro, M., et al. (2016). Alkaline Water and Longevity: A Murine Study. Evidence-based Complementary and Alternative Medicine.</a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Lifestyle Benefits */}
          <Card className="rounded-2xl shadow-lg border-2 border-[#FFD100] bg-gradient-to-br from-[#FFD100]/10 to-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Lifestyle Benefits of Medisoul Alkaline Ionized Water
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Hydration & Body Cleansing:</p>
                  <p className="text-gray-700">
                    Drinking Medisoul ion-balanced alkaline ionized water is the best way to hydrate yourself and cleanse your body.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Exercise Performance:</p>
                  <p className="text-gray-700">
                    Drinking alkaline water after exercising increases performance indicators such as a decrease in lactate concentration and a rise in the power output of the muscle.
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                  <p className="font-semibold text-[#0A0F2C] text-lg mb-3">Enhanced Beverage Experience:</p>
                  <ul className="space-y-2 text-gray-700 ml-4 mt-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Tea & Coffee:</strong> With alkaline water, you don't just drink tea or coffee, but take in their deep aroma to enjoy the best combination of taste and health.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFD100] mt-1 font-bold">•</span>
                      <span><strong>Liquor & Cocktails:</strong> Alkaline water doesn't just quench your thirst; it also helps liquor and cocktails taste better! Try a delicious cocktail on the rocks mixed with our alkaline water!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="rounded-2xl shadow-lg border-2 border-[#FFD100] bg-gradient-to-br from-[#FFD100]/10 to-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-[#0A0F2C] mb-6 pb-3 border-b-2 border-[#FFD100]">
                Conclusion
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                These medical case studies represent decades of clinical research and observation from respected medical professionals in Japan, where water ionizers have been used for over 40 years and are certified by the Korean and Japanese Ministries of Health as approved medical devices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                While these studies demonstrate the therapeutic potential of ionized alkaline water, it is important to consult with healthcare professionals before using ionized water as part of any treatment regimen, especially for serious medical conditions.
              </p>
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
