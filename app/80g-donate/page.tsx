"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  FileText,
  BadgeCheck,
  Banknote,
  Calculator,
  Download,
  Scroll,
  X,
  ShieldCheck,
  Info
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

export default function EightyGPage() {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false)

  return (
    <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 bg-[#a7150b] text-white overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffc107]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-[#ffc107] font-bold text-sm uppercase tracking-widest mb-6 border border-white/20">
                <BadgeCheck className="w-5 h-5" /> Tax Planning
             </motion.div>
             <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Tax Deduction Benefits <br/> Under Section 80G
             </motion.h1>
             <motion.p variants={fadeInUp} className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Every taxpayer's financial management strategy must include tax planning. The Indian government promotes philanthropic giving by providing tax advantages on gifts made to specific charities.
             </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= ELIGIBLE DONATIONS GUIDELINES ================= */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto">
               <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-8 text-center">Eligible Donations Guidelines</h2>
               <div className="grid md:grid-cols-2 gap-6">
                  {/* Guideline 1 */}
                  <Card className="p-6 border-l-4 border-[#ffc107] bg-stone-50">
                     <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#ffc107]" /> Recognized Organizations
                     </h3>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        It is essential to make sure that donations are given to recognized organizations. Donations to specified funds and charitable institutions qualify for deductions under Section 80G.
                     </p>
                  </Card>
                  
                  {/* Guideline 2 (Verification) */}
                  <Card className="p-6 border-l-4 border-[#a7150b] bg-stone-50">
                     <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#a7150b]" /> Verify Registration
                     </h3>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        Not all donations are eligible for tax benefits, so it is essential to verify the organization's registration under Section 80G before making a contribution.
                     </p>
                  </Card>

                  {/* Guideline 3 (Cash Limit) */}
                  <Card className="p-6 border-l-4 border-red-600 bg-red-50 md:col-span-2">
                     <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-red-700">
                        <Banknote className="w-5 h-5" /> Cash Donation Limit: Rs. 2,000
                     </h3>
                     <p className="text-red-900 text-sm leading-relaxed font-medium">
                        Contributions made in cash exceeding Rs. 2,000 are not eligible for tax deduction benefits under Section 80G. Hence, it is advisable to make donations through banking channels or cheques.
                     </p>
                  </Card>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ================= DEDUCTION RATES & LIMITS (FROM IMAGE) ================= */}
      <section className="py-20 bg-stone-100">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               
               {/* Left: Text Content */}
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                  <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-6">Tax Deduction Benefits</h2>
                  <p className="text-slate-600 mb-8">
                     Taxpayers can avail different rates of deduction based on the nature of the charitable organization and the donation made.
                  </p>

                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center shrink-0 font-bold">100%</div>
                        <div>
                           <h4 className="font-bold text-[#1a1a1a]">Full Deduction</h4>
                           <p className="text-sm text-slate-600 mt-1">
                              Donations to institutions that provide relief to the poor, promote education, or support rural development are eligible for a 100% deduction.
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center shrink-0 font-bold">50%</div>
                        <div>
                           <h4 className="font-bold text-[#1a1a1a]">Partial Deduction</h4>
                           <p className="text-sm text-slate-600 mt-1">
                              For donations made to other charitable institutions, the deduction is limited to 50% of the donated amount.
                           </p>
                        </div>
                     </div>
                     
                     <div className="p-4 bg-white rounded-xl border border-stone-200 mt-6">
                        <h4 className="font-bold text-[#1a1a1a] mb-2 flex items-center gap-2"><Info className="w-4 h-4"/> Limits on Deductions</h4>
                        <ul className="text-sm text-slate-600 list-disc pl-5 space-y-2">
                           <li>The total deduction claimed under Section 80G cannot exceed 10% of the taxpayer's gross total income.</li>
                           <li>For certain donations, the limit is restricted to 100% of the donated amount.</li>
                        </ul>
                     </div>
                  </div>
               </motion.div>

               {/* Right: Claiming Process Card */}
               <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="bg-[#1a1a1a] rounded-3xl p-8 text-white shadow-2xl relative">
                     <div className="absolute top-0 right-0 p-8 opacity-10"><Calculator size={150} /></div>
                     
                     <h3 className="text-2xl font-bold mb-6 relative z-10">Claiming Tax Deduction</h3>
                     <p className="text-gray-400 mb-6 text-sm">To avail tax benefits on donations under Section 80G, taxpayers need to ensure the following:</p>

                     <div className="space-y-4 relative z-10">
                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                           <p className="font-bold text-[#ffc107] mb-1">Step 01</p>
                           <p className="text-sm text-gray-400">Obtain a receipt from the charitable institution specifying the amount donated, the registration number under Section 80G, and the organization's PAN details.</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                           <p className="font-bold text-[#ffc107] mb-1">Step 02</p>
                           <p className="text-sm text-gray-400">While filing income tax returns, accurately report the donation details and claim the appropriate deduction as per the donation type.</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                           <p className="font-bold text-[#ffc107] mb-1">Step 03</p>
                           <p className="text-sm text-gray-400 ">Keep records of all donations made during the financial year to support your claim during tax filing.</p>
                        </div>
                     </div>
                     
                     {/* View PDF Button - Content hidden inside */}
                     <div className="mt-8 pt-6 border-t border-white/20">
                         <Button onClick={() => setIsPdfModalOpen(true)} className="w-full bg-white text-[#1a1a1a] hover:bg-gray-100 font-bold h-12 rounded-xl">
                             <FileText className="w-4 h-4 mr-2" /> View Our 80G Certificate
                         </Button>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ================= CONCLUSION ================= */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Conclusion</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
               Donations under Section 80G not only allow individuals to contribute to noble causes but also provide substantial tax benefits. By understanding the eligible donations, tax deduction limits, and the documentation process, taxpayers can optimize their tax planning effectively.
            </p>
            <Link href="/donate-us">
               <Button className="bg-[#a7150b] hover:bg-[#8a0d08] text-white text-lg px-10 py-6 rounded-full shadow-xl shadow-red-100">
                  Donate Now
               </Button>
            </Link>
         </div>
      </section>

      {/* ================= PDF MODAL (VIEW ONLY) ================= */}
      <AnimatePresence>
        {isPdfModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsPdfModalOpen(false)}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-3xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
            >
               {/* Modal Header */}
               <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
                  <h3 className="font-bold text-gray-800 text-lg">Official 80G Certificate Document</h3>
                  <button 
                    onClick={() => setIsPdfModalOpen(false)} 
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
               </div>

               {/* PDF Image Viewer (From PDF Source) */}
               <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
                  <div className="bg-white shadow-lg mx-auto w-full">
                      {/* Using the PDF converted to image for display */}
                      <Image 
                        src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766136367/80G_Ceritficate_for_Receipt_page-0001_uxlp2z.jpg" 
                        alt="80G Certificate Document" 
                        width={800}
                        height={1100}
                        className="w-full h-auto block" 
                        priority
                      />
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      

    </main>
  )
}