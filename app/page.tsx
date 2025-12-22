// "use client"

// import type React from "react"
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"
// import {
//   Heart,
//   Calendar,
//   CheckCircle2,
//   Facebook,
//   Twitter,
//   Mail,
//   Landmark,
//   Activity,
//   Eye,
//   FileText,
//   Globe,
//   Phone,
//   Building2,
//   Download,
//   X,
//   Clock,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// }

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//   },
// }

// const scaleOnHover = {
//   hover: { scale: 1.02, transition: { duration: 0.3 } },
// }

// export default function Home() {
//   const [isDocModalOpen, setIsDocModalOpen] = useState(false)
//   const [isFcraRenewalModalOpen, setIsFcraRenewalModalOpen] = useState(false)
//   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)
//   const [isCsrLetterModalOpen, setIsCsrLetterModalOpen] = useState(false)
//   const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

//   const { scrollY } = useScroll()
//   const y1 = useTransform(scrollY, [0, 500], [0, 150])
//   // const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
//   const [selectedProject, setSelectedProject] = useState("");

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormStatus("submitting");
//     // Simulate API call
//     setTimeout(() => {
//       setFormStatus("success");
//     }, 1500);
//   };

//   // const handleFormSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault()
//   //   setFormStatus("submitting")
//   //   setTimeout(() => setFormStatus("success"), 2000)
//   // }
  

//   return (
//     <main className="bg-background overflow-x-hidden">
//       {/* Hero Section with Parallax */}
//       <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
//         <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
//           <Image
//             src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
//             alt="Hero Background"
//             fill
//             className="object-cover scale-110"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
//         </motion.div>

//         <div className="relative z-10 container mx-auto px-4 pt-20">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="max-w-5xl mx-auto text-center"
//           >
//             <motion.div variants={fadeInUp} className="inline-block mb-6">
//               <span className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[#ffc107] text-sm font-bold tracking-widest uppercase shadow-lg">
//                 Est. 1978 • Registered Trust
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={fadeInUp}
//               className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl text-balance"
//             >
//               Healing Hands.{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-300 to-[#ffc107] animate-gradient">
//                 Compassionate Hearts.
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance"
//             >
//               Adhiparasakthi Charitable Medical Educational & Cultural Trust (ACMEC) dedicated to serving humanity
//               through holistic healthcare and education.
//             </motion.p>

//             <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
//               <Link href="https://www.omsakthiamma.org/online_services/donations" className="w-full sm:w-auto group">
//                 <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_40px_-10px_rgba(167,21,11,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(167,21,11,0.8)]">
//                   <Heart className="mr-3 w-5 h-5 fill-current group-hover:animate-pulse" />
//                   Donate Now
//                 </Button>
//               </Link>
//               <Link href="#about" className="w-full sm:w-auto">
//                 <Button
//                   variant="outline"
//                   className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-white/5"
//                 >
//                   Explore Our Work
//                 </Button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
//             className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
//           >
//             <motion.div className="w-1 h-2 bg-white rounded-full" />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Upcoming Events Banner */}
//       {/* <section className="py-4 bg-[#a7150b] text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-30" />
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="flex items-center justify-center gap-4 flex-wrap"
//           >
//             <Calendar className="w-5 h-5 animate-pulse" />
//             <p className="font-bold text-sm md:text-base">
//               Upcoming Festival: Annual Aadi Pooram Celebration - July 25, 2026
//             </p>
//             <Link href="/trust-activities">
//               <Button
//                 size="sm"
//                 variant="outline"
//                 className="border-2 border-white text-white hover:bg-white hover:text-[#a7150b] rounded-full font-bold text-xs bg-transparent transition-all"
//               >
//                 View Details
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </section> */}

//       {/* About Section */}
//       <section id="about" className="py-24 md:py-32 px-4 container mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//           >
//             <motion.span
//               variants={fadeInUp}
//               className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
//             >
//               About The Trust
//             </motion.span>
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight text-balance"
//             >
//               A Legacy of Service{" "}
//               <span className="relative inline-block">
//                 <span className="relative z-10">Since 1978</span>
//                 <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#ffc107] -z-0" />
//               </span>
//             </motion.h2>

//             <motion.div variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-4">
//               <p>
//                 M/s Adhiparasakthi Charitable Medical Educational and Cultural Trust (ACMEC Trust), as the name suggests
//                 has dedicated itself to serve the people in the areas of:
//               </p>

//               <div className="grid sm:grid-cols-2 gap-3 py-4">
//                 {["Charity", "Medical", "Educational", "Cultural Activities"].map((item) => (
//                   <div key={item} className="flex items-center gap-3 group">
//                     <div className="w-10 h-10 rounded-full bg-[#a7150b]/10 group-hover:bg-[#a7150b] transition-colors flex items-center justify-center">
//                       <CheckCircle2 className="text-[#a7150b] group-hover:text-white w-5 h-5 transition-colors" />
//                     </div>
//                     <span className="font-semibold text-foreground">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <p>
//                 This trust is a non-profitable organization which was founded by{" "}
//                 <strong className="text-foreground">H.H. Bangaru Adigalar</strong> in the year 1978 with a small corpus
//                 fund and with few cents of land in Melmaruvathur (It was then a small village situated about 92 kms from
//                 the Chennai city and about 70 Km to Puducherry).
//               </p>
//             </motion.div>

//             <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
//               <div className="group hover:scale-105 transition-transform">
//                 <Card className="p-6 border-l-4 border-[#ffc107] bg-gradient-to-br from-[#ffc107]/5 to-transparent hover:shadow-lg transition-shadow">
//                   <h4 className="text-4xl font-bold text-foreground mb-1">1978</h4>
//                   <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Established</p>
//                 </Card>
//               </div>
//               <div className="group hover:scale-105 transition-transform">
//                 <Card className="p-6 border-l-4 border-[#a7150b] bg-gradient-to-br from-[#a7150b]/5 to-transparent hover:shadow-lg transition-shadow">
//                   <h4 className="text-2xl font-bold text-foreground mb-1">Melmaruvathur</h4>
//                   <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Headquarters</p>
//                 </Card>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative group"
//           >
//             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
//               <Image
//                 src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop"
//                 alt="Medical Service"
//                 width={700}
//                 height={500}
//                 className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//             </div>
//             <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ffc107]/20 rounded-full blur-3xl -z-10 group-hover:bg-[#ffc107]/30 transition-colors" />
//             <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#a7150b]/10 rounded-full blur-3xl -z-10 group-hover:bg-[#a7150b]/20 transition-colors" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Founders & Trustees */}
//       <section className="py-24 bg-muted/30">
//         <div className="container mx-auto px-4">
//           {/* Founders */}
//           <div className="mb-24">
//             <div className="text-center mb-16">
//               <motion.span
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
//               >
//                 Leadership
//               </motion.span>
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="text-3xl md:text-5xl font-serif font-bold text-foreground"
//               >
//                 Founder & Vice
//               </motion.h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//               {[
//                 {
//                   name: "His Holiness Bangaru Adigalar",
//                   role: "Founder",
//                   image:
//                     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png",
//                   bgColor: "from-[#ffc107]/10 to-[#ffc107]/5",
//                   borderColor: "border-[#ffc107]",
//                 },
//                 {
//                   name: "Smt. Lakshmi Bangaru Adigalar",
//                   role: "President",
//                   image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg",
//                   bgColor: "from-[#a7150b]/10 to-[#a7150b]/5",
//                   borderColor: "border-[#a7150b]",
//                 },
//               ].map((person, idx) => (
//                 <motion.div
//                   key={person.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.2 }}
//                   whileHover={{ y: -8 }}
//                 >
//                   <Card
//                     className={`p-8 text-center border-2 ${person.borderColor} bg-gradient-to-br ${person.bgColor} hover:shadow-2xl transition-all group`}
//                   >
//                     <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-background shadow-xl mb-6 relative group-hover:scale-105 transition-transform">
//                       <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
//                     </div>
//                     <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{person.name}</h3>
//                     <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm mb-6">{person.role}</p>
//                     <div className="flex justify-center gap-4">
//                       {[Facebook, Twitter, Mail].map((Icon, i) => (
//                         <button
//                           key={i}
//                           className="w-10 h-10 rounded-full bg-background hover:bg-[#a7150b] hover:text-white transition-all flex items-center justify-center group/icon"
//                         >
//                           <Icon className="w-5 h-5" />
//                         </button>
//                       ))}
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Board of Trustees */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Board of Trustees</h2>
//             <div className="w-24 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
//           </motion.div>

//           {/* Executive Trustees */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
//             {[
//               { name: "Mrs. V. Lakshmi", role: "President / Executive Trustee" },
//               { name: "Mr. G.B. Anbalagan", role: "Vice President / Trustee" },
//               { name: "Mr. G.B. Senthil Kumar", role: "Vice President / Trustee" },
//               { name: "Mrs. B. Sridevi", role: "Treasurer / Trustee" },
//               { name: "Mrs. B. Umadevi", role: "Secretary / Trustee" },
//             ].map((trustee, idx) => (
//               <motion.div
//                 key={trustee.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card className="p-6 hover:shadow-xl transition-all group bg-gradient-to-br from-[#ffc107]/5 to-transparent border-2 border-transparent hover:border-[#ffc107]/30">
//                   <div className="flex items-start gap-4">
//                     <div className="w-14 h-14 bg-[#ffc107] text-foreground rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform font-bold text-xl">
//                       {trustee.name.split(" ")[1][0]}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-lg font-bold text-foreground group-hover:text-[#a7150b] transition-colors mb-2">
//                         {trustee.name}
//                       </h3>
//                       <span className="inline-block px-3 py-1 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wide">
//                         {trustee.role}
//                       </span>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           {/* General Trustees */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {[
//               { name: "Mr. R. Karunanithi", role: "Trustee" },
//               { name: "Mr. K. Arulmozhi", role: "Trustee" },
//               { name: "Mr. S.R. Raghuvir", role: "Trustee" },
//               { name: "Mr. A. Saiprasad", role: "Trustee" },
//             ].map((trustee, idx) => (
//               <motion.div
//                 key={trustee.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: (idx + 5) * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card className="p-6 hover:shadow-lg transition-all group border-2">
//                   <div className="flex flex-col gap-3">
//                     <div className="flex items-center justify-between">
//                       <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-muted-foreground">
//                         {trustee.name.split(" ")[1][0]}
//                       </div>
//                       <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">
//                         {trustee.role}
//                       </span>
//                     </div>
//                     <h4 className="text-base font-bold text-foreground group-hover:text-[#a7150b] transition-colors">
//                       {trustee.name}
//                     </h4>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CSR Registration Section */}
//       <section className="py-20 bg-foreground text-background">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//               <div className="flex items-center gap-3 mb-4">
//                 <Landmark className="w-8 h-8 text-[#ffc107]" />
//                 <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">Government of India</span>
//               </div>
//               <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Official CSR Registration</h2>
//               <p className="text-background/80 text-lg mb-8 leading-relaxed">
//                 Adhiparasakthi Charitable Medical Educational and Cultural Trust is officially registered with the
//                 Ministry of Corporate Affairs for undertaking CSR activities.
//               </p>
//               <div className="grid sm:grid-cols-2 gap-6 mb-8">
//                 <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
//                   <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Registration Number</p>
//                   <p className="text-2xl font-mono font-bold text-[#ffc107]">CSR00002370</p>
//                 </div>
//                 <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
//                   <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Date of Registration</p>
//                   <p className="text-xl font-bold">16-04-2021</p>
//                 </div>
//               </div>
//               <Button
//                 onClick={() => setIsCsrLetterModalOpen(true)}
//                 className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-6 font-bold"
//               >
//                 <FileText className="w-5 h-5 mr-2" /> View Official Approval Letter
//               </Button>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="relative h-[400px] bg-background rounded-2xl overflow-hidden p-6 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
//             >
//               <div className="border-4 border-double border-border h-full w-full rounded-xl p-8 flex flex-col items-center justify-center text-center text-foreground bg-muted/20">
//                 <Landmark className="w-16 h-16 text-muted-foreground mb-4 opacity-20" />
//                 <h3 className="font-bold text-xl uppercase mb-2">Government of India</h3>
//                 <h4 className="font-bold text-sm uppercase mb-6 text-muted-foreground">
//                   Ministry of Corporate Affairs
//                 </h4>
//                 <div className="w-16 h-1 bg-[#a7150b] mb-6" />
//                 <p className="font-serif italic text-muted-foreground mb-4">
//                   "This entity has been registered for undertaking CSR activities..."
//                 </p>
//                 <p className="font-bold text-lg">Reg No: CSR00002370</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-24 px-4 bg-muted relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLDAsMCwwLjMpIi8+PC9zdmc+')] " />

//         <div className="container mx-auto relative z-10">
//           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//             {/* Mission Card */}
//             <motion.div
//               whileHover="hover"
//               variants={scaleOnHover}
//               className="bg-gradient-to-br from-[#a7150b] to-[#800f07] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10"
//             >
//               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-10 -translate-y-10">
//                 <Activity size={200} />
//               </div>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
//                   <Activity className="text-white w-8 h-8" />
//                 </div>
//                 <h3 className="text-3xl font-serif font-bold mb-4 text-white">Our Mission</h3>
//                 <p className="text-white/80 text-lg leading-relaxed">
//                   To provide accessible, high-quality healthcare and education to the underprivileged, ensuring that no
//                   individual is denied basic human rights due to financial instability.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Vision Card */}
//             <motion.div
//               whileHover="hover"
//               variants={scaleOnHover}
//               className="bg-gradient-to-br from-[#ffc107] to-[#e6ac00] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10"
//             >
//               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-10 -translate-y-10">
//                 <Eye size={200} className="text-black" />
//               </div>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-black/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
//                   <Eye className="text-foreground w-8 h-8" />
//                 </div>
//                 <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Our Vision</h3>
//                 <p className="text-foreground/80 text-lg leading-relaxed font-medium">
//                   A society where spiritual values and modern advancement go hand in hand, fostering a community built
//                   on love, sacrifice, and mutual support.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Awards Section */}
//       <section className="py-24 bg-background border-y border-border">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//               Our Achievements
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
//               Significant Awards and Recognition
//             </h2>
//             <div className="w-24 h-1.5 bg-[#ffc107] mx-auto mt-6 rounded-full" />
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg",
//                 title: "State Govt Honor",
//                 desc: "Honored by Chief Minister Ms. J. Jayalalitha on behalf of Govt of Tamil Nadu to the CEO of Adhiparasakthi Annai Illam.",
//                 year: "2015",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530538674-150x150_semv32.jpg",
//                 title: "Nirmal Gram Puraskar",
//                 desc: "National award for sanitation and hygiene excellence in rural development.",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530539144-150x150_dyivy6.jpg",
//                 title: "Certificate of Excellence",
//                 desc: "Recognition for outstanding contribution to social welfare services.",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530534191-150x150_lo2fc6.jpg",
//                 title: "Best Institution",
//                 desc: "Awarded to Adhiparasakthi Annai Illam (Centre for Special Children).",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530529377-150x150_mz3ixh.jpg",
//                 title: "Award of Appreciation",
//                 desc: "Awarded by the Department of Health and Family Welfare for medical services.",
//                 year: "2019",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530527252-150x150_ud5spj.jpg",
//                 title: "Regional Recognition",
//                 desc: "Acknowledging our continuous support to local community development.",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530521793-150x150_hqdtpk.jpg",
//                 title: "Official Certification",
//                 desc: "Certification of merit from authorized government bodies.",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/awards-150x150_rtu0ni.png",
//                 title: "National Honor",
//                 desc: "Founder H.H. Bangaru Adigalar receiving the prestigious award from the President of India.",
//                 highlight: true,
//                 badge: "Highest Honor",
//               },
//             ].map((award, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ y: -8 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="relative h-64 overflow-hidden border-b border-border">
//                   <Image
//                     src={award.img || "/placeholder.svg"}
//                     alt={award.title}
//                     fill
//                     className="object-fill group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {award.year && (
//                     <div className="absolute top-2 right-2 bg-[#ffc107] text-foreground text-xs font-bold px-2 py-1 rounded">
//                       {award.year}
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-5">
//                   <h4 className="font-bold text-foreground leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">
//                     {award.title}
//                   </h4>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Donation Section */}
//       <section className="py-24 px-4 bg-muted/30" id="donate">
//         <div className="container mx-auto max-w-6xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//               Tax Benefits
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Support & Save</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
//               Your contribution not only changes lives but also offers you tax benefits under Indian Law.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Domestic Card */}
//             <motion.div
//               whileHover={{ y: -8 }}
//               className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border relative overflow-hidden flex flex-col"
//             >
//               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b]">
//                   <FileText className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-foreground">Domestic Donors</h3>
//                   <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
//                     80G Tax Exempt
//                   </span>
//                 </div>
//               </div>
//               <ul className="space-y-4 mb-10 flex-1">
//                 {["50% Tax Exemption", "Instant e-Receipt", "Digital Certificate", "Quarterly Impact Reports"].map(
//                   (item, i) => (
//                     <li key={i} className="flex items-center gap-3 text-muted-foreground">
//                       <CheckCircle2 className="w-5 h-5 text-[#a7150b] shrink-0" /> {item}
//                     </li>
//                   ),
//                 )}
//               </ul>
//               <div className="space-y-4">
//                 <Link href="https://www.omsakthiamma.org/online_services/donations" className="block w-full">
//                   <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-lg rounded-xl shadow-lg shadow-red-200">
//                     Donate via UPI / NetBanking
//                   </Button>
//                 </Link>
//                 <Button
//                   onClick={() => setIsDocModalOpen(true)}
//                   variant="ghost"
//                   className="w-full text-muted-foreground hover:text-[#a7150b] hover:bg-red-50"
//                 >
//                   View 80G Certificate
//                 </Button>
//               </div>
//             </motion.div>

//             {/* Foreign Card */}
//             <motion.div
//               whileHover={{ y: -8 }}
//               className="bg-foreground rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col text-background"
//             >
//               <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-4 bg-white/10 rounded-2xl text-[#ffc107]">
//                   <Globe className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">Foreign Donors</h3>
//                   <span className="text-sm font-medium text-foreground bg-[#ffc107] px-3 py-1 rounded-full">
//                     FCRA Approved
//                   </span>
//                 </div>
//               </div>
//               <ul className="space-y-4 mb-10 flex-1">
//                 {[
//                   "Government Approved FCRA",
//                   "International Wire Transfer",
//                   "SWIFT Transfer Support",
//                   "Global Compliance",
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-background/80">
//                     <CheckCircle2 className="w-5 h-5 text-[#ffc107] shrink-0" /> {item}
//                   </li>
//                 ))}
//               </ul>
//               <div className="space-y-4">
//                 <Button
//                   onClick={() => setIsOverseasModalOpen(true)}
//                   className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-foreground font-bold h-14 text-lg rounded-xl shadow-lg shadow-yellow-900/20"
//                 >
//                   View Overseas Donation Procedure
//                 </Button>
//                 <Button
//                   onClick={() => setIsFcraRenewalModalOpen(true)}
//                   variant="ghost"
//                   className="w-full text-background/80 hover:text-background hover:bg-white/10"
//                 >
//                   View FCRA Certificate
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CSR Projects */}
//       <section className="py-24 px-4 bg-background">
//         <div className="container mx-auto space-y-24">
//           {/* Eye Camp */}
//           <div>
//             <div className="text-center mb-10">
//               <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//                 CSR Initiative 01
//               </span>
//               <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Free Eye Camp</h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
//                 "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
//                 "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
//                 "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop",
//               ].map((imgSrc, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   whileHover={{ y: -10 }}
//                   className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
//                 >
//                   <Image
//                     src={imgSrc || "/placeholder.svg"}
//                     alt={`Eye Camp Image ${idx + 1}`}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Endoscope Project */}
//           <div>
//             <div className="text-center mb-10">
//               <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//                 CSR Initiative 02
//               </span>
//               <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Endoscope Project</h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093845/IMG-20231206-WA0012_hysx3l.jpg",
//                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093847/IMG-20231206-WA0054_nc25ip.jpg",
//                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093844/IMG-20231206-WA0048_poj4kh.jpg",
//                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093825/IMG-20231206-WA0018_ipotnj.jpg",
//               ].map((imgSrc, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   whileHover={{ y: -10 }}
//                   className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
//                 >
//                   <Image
//                     src={imgSrc || "/placeholder.svg"}
//                     alt={`Endoscope Project Image ${idx + 1}`}
//                     fill
//                     className="object-fill transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CSR Inquiry Form */}
//       <section className="py-24 px-4 bg-[#ffc107] relative">
//       <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
//       <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#a7150b]/20 rounded-full blur-3xl" />

//       <div className="container mx-auto max-w-5xl relative z-10">
//         <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
//           <div className="grid md:grid-cols-5">
//             {/* Form Side */}
//             <div className="md:col-span-3 p-8 md:p-12 bg-background">
//               <div className="mb-8">
//                 <h3 className="text-3xl font-serif font-bold text-foreground">
//                   Partner with Us
//                 </h3>
//                 <p className="text-muted-foreground mt-2">
//                   Interested in a CSR collaboration? Let's connect.
//                 </p>
//               </div>

//               {formStatus === "success" ? (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="h-64 flex flex-col items-center justify-center text-center"
//                 >
//                   <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
//                     <CheckCircle2 className="w-8 h-8 text-green-600" />
//                   </div>
//                   <h4 className="text-xl font-bold text-foreground">
//                     Inquiry Sent!
//                   </h4>
//                   <p className="text-muted-foreground">
//                     We will get back to you within 24 hours.
//                   </p>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleFormSubmit} className="space-y-5">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Full Name</Label>
//                       <Input
//                         id="name"
//                         required
//                         placeholder="John Doe"
//                         className="bg-muted border-border h-11 focus:ring-[#a7150b]"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="company">Company</Label>
//                       <Input
//                         id="company"
//                         required
//                         placeholder="Tech Corp"
//                         className="bg-muted border-border h-11 focus:ring-[#a7150b]"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         required
//                         placeholder="john@example.com"
//                         className="bg-muted border-border h-11 focus:ring-[#a7150b]"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="phone">Phone</Label>
//                       <Input
//                         id="phone"
//                         type="tel"
//                         required
//                         placeholder="+91..."
//                         className="bg-muted border-border h-11 focus:ring-[#a7150b]"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="project">Interested Project</Label>
//                     <Select onValueChange={(value) => setSelectedProject(value)}>
//                       <SelectTrigger className="bg-muted border-border h-11">
//                         <SelectValue placeholder="Select a project" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="education">EDUCATION</SelectItem>
//                         <SelectItem value="eye-camp">EYE CAMP</SelectItem>
//                         <SelectItem value="education-medical">
//                           EDUCATION MEDICAL
//                         </SelectItem>
//                         <SelectItem value="feeding-poor">
//                           FEEDING POOR
//                         </SelectItem>
//                         <SelectItem value="others">OTHERS</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   {/* Conditional Input Field for 'Others' */}
//                   {selectedProject === "others" && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       className="space-y-2"
//                     >
//                       <Label htmlFor="other-details">Specify Details</Label>
//                       <Input
//                         id="other-details"
//                         required
//                         placeholder="Please specify your request..."
//                         className="bg-muted border-border h-11 focus:ring-[#a7150b]"
//                       />
//                     </motion.div>
//                   )}

//                   <div className="space-y-2">
//                     <Label htmlFor="remarks">Remarks</Label>
//                     <Textarea
//                       id="remarks"
//                       placeholder="Any specific requirements?"
//                       className="bg-muted border-border resize-none focus:ring-[#a7150b]"
//                       rows={3}
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     disabled={formStatus === "submitting"}
//                     className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white font-bold h-12 text-lg rounded-xl"
//                   >
//                     {formStatus === "submitting"
//                       ? "Sending..."
//                       : "Submit Inquiry"}
//                   </Button>
//                 </form>
//               )}
//             </div>

//             {/* Info Side */}
//             <div className="md:col-span-2 bg-foreground p-8 md:p-12 text-background flex flex-col justify-between relative overflow-hidden">
//               <div className="absolute top-0 right-0 p-6 opacity-5">
//                 <Building2 size={200} />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold mb-6 text-[#ffc107]">
//                   Contact Information
//                 </h4>
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <Mail className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-background/60 uppercase tracking-wider">
//                         Email Us
//                       </p>
//                       <p className="font-medium text-sm">
//                         contact@acmectrust.org
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start gap-4">
//                     <Phone className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
//                         Call Us
//                       </p>
//                       <div className="space-y-1 text-sm font-medium">
//                         <p>Landline: +91 44 2752 9313</p>
//                         <p>Mobile: +91 91500 45391</p>
//                         <p>Whatsapp: +91 91500 45391</p>
//                         <p>PRO: +91 44 27529276</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <Building2 className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
//                         Visit Us
//                       </p>
//                       <p className="font-medium text-sm leading-relaxed text-background/90">
//                         <span className="font-bold block mb-1">
//                           Adhiparasakthi Charitable Medical Educational and
//                           Cultural Trust
//                         </span>
//                         No.1 GST Road, Adhiparasakthi Siddhar Peedam Temple
//                         Campus, Melmaruvathur, Chengalpet District,
//                         TamilNadu-603319, India
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <Clock className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
//                         Timing
//                       </p>
//                       <p className="font-medium text-sm">
//                         8:00 am To 8:00 PM
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-8 pt-8 border-t border-white/10">
//                 <p className="text-xs text-background/60">
//                   By submitting this form, you agree to our privacy policy
//                   regarding data collection.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </section>
  

//       {/* Modals */}
//       <AnimatePresence>
//         {/* 80G Modal */}
//         {isDocModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsDocModalOpen(false)}
//               className="fixed inset-0 bg-black/60 z-50 backdrop-blur-md"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg px-4"
//             >
//               <div className="bg-background rounded-3xl shadow-2xl overflow-hidden relative">
//                 <button
//                   onClick={() => setIsDocModalOpen(false)}
//                   className="absolute top-4 right-4 p-2 bg-muted hover:bg-muted/80 rounded-full transition-colors z-10"
//                 >
//                   <X className="w-5 h-5 text-muted-foreground" />
//                 </button>

//                 <div className="p-8 pb-0">
//                   <h3 className="text-2xl font-serif font-bold text-foreground">80G Certificate Preview</h3>
//                   <p className="text-muted-foreground mt-2">Valid for Financial Year 2025-2026</p>
//                 </div>

//                 <div className="p-8 flex flex-col items-center justify-center bg-muted m-8 rounded-2xl border-2 border-dashed border-border min-h-[250px] group cursor-pointer hover:bg-muted/80 transition-colors">
//                   <FileText className="w-16 h-16 text-muted-foreground group-hover:text-[#a7150b] transition-colors mb-4" />
//                   <p className="text-sm font-medium text-muted-foreground">Preview Unavailable in Demo</p>
//                 </div>

//                 <div className="p-6 bg-muted border-t flex justify-end gap-3">
//                   <Button variant="outline" onClick={() => setIsDocModalOpen(false)}>
//                     Close
//                   </Button>
//                   <Button className="bg-[#a7150b] text-white hover:bg-[#8a0d08]">
//                     <Download className="w-4 h-4 mr-2" /> Download PDF
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}

//         {/* CSR Letter Modal */}
//         {isCsrLetterModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsCsrLetterModalOpen(false)}
//               className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl px-4 h-[85vh] flex flex-col"
//             >
//               <div className="bg-background rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden font-serif">
//                 <div className="flex justify-between items-center p-4 border-b bg-muted">
//                   <h3 className="font-bold text-foreground font-sans">Official CSR Approval</h3>
//                   <button onClick={() => setIsCsrLetterModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
//                     <X className="w-5 h-5 text-muted-foreground" />
//                   </button>
//                 </div>
//                 <div className="flex-1 overflow-y-auto p-12 text-foreground">
//                   <div className="text-center mb-10">
//                     <Landmark className="w-12 h-12 mx-auto mb-2 text-foreground" />
//                     <h4 className="font-bold text-sm uppercase">Satyameva Jayate</h4>
//                     <h2 className="font-bold text-xl uppercase">Government of India</h2>
//                     <h3 className="font-bold text-lg uppercase">Ministry of Corporate Affairs</h3>
//                     <p className="font-semibold text-sm uppercase">Office of the Registrar of Companies</p>
//                   </div>

//                   <div className="flex justify-between items-end mb-8 border-b pb-8">
//                     <div className="text-sm font-sans text-muted-foreground">
//                       <p>To,</p>
//                       <p className="font-bold text-foreground uppercase w-64">
//                         Adhiparasakthi Charitable Medical Educational and Cultural Trust
//                       </p>
//                       <p>No.1, GST Road, Melmaruvathur</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-bold">Dated: 16-04-2021</p>
//                       <p>PAN: AAATA0722H</p>
//                     </div>
//                   </div>

//                   <div className="mb-8">
//                     <p className="font-bold mb-2">Subject: Registration of Entities for undertaking CSR activities</p>
//                     <p className="text-sm text-muted-foreground">Ref: Application SRN-T14318323</p>
//                   </div>

//                   <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
//                     <p className="text-lg leading-relaxed">
//                       "It is informed that the entity has been registered for undertaking CSR activities and the
//                       Registration number is <span className="font-bold bg-yellow-200 px-2 rounded">CSR00002370</span>."
//                     </p>
//                   </div>

//                   <div className="mt-12 flex justify-end">
//                     <div className="text-right">
//                       <p className="font-bold text-muted-foreground text-xs uppercase mb-2">[Digitally Signed]</p>
//                       <p className="font-bold uppercase">Registrar of Companies</p>
//                       <p className="font-bold">ROC-DELHI</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4 bg-muted border-t flex justify-end font-sans">
//                   <Button variant="outline" onClick={() => setIsCsrLetterModalOpen(false)}>
//                     Close
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}

//         {/* FCRA Modal */}
//         {isFcraRenewalModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsFcraRenewalModalOpen(false)}
//               className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl px-4 h-[90vh] flex flex-col"
//             >
//               <div className="bg-background rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden font-serif text-foreground">
//                 <div className="flex justify-between items-center p-4 border-b bg-muted">
//                   <h3 className="font-bold text-foreground font-sans">FCRA Certificate</h3>
//                   <button
//                     onClick={() => setIsFcraRenewalModalOpen(false)}
//                     className="p-2 hover:bg-muted/80 rounded-full transition-colors"
//                   >
//                     <X className="w-5 h-5 text-muted-foreground" />
//                   </button>
//                 </div>

//                 <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-background relative">
//                   <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
//                     <Landmark className="w-[500px] h-[500px]" />
//                   </div>

//                   <div className="relative z-10 max-w-3xl mx-auto">
//                     <div className="flex justify-between text-sm font-bold mb-8">
//                       <p>No. 0300148372016</p>
//                       <p>Dated: 29-10-2016</p>
//                     </div>

//                     <div className="text-center mb-10 space-y-1">
//                       <div className="flex justify-center mb-4">
//                         <Landmark className="w-16 h-16 text-foreground" />
//                       </div>
//                       <h2 className="font-bold text-2xl uppercase tracking-wide">Government of India</h2>
//                       <h3 className="font-bold text-xl">Ministry of Home Affairs</h3>
//                       <p className="font-semibold text-lg">Foreigners Division (FCRA Wing)</p>
//                       <p className="text-sm text-muted-foreground">
//                         NDCC-II Building, Jai Singh Road, New Delhi-110001
//                       </p>
//                     </div>

//                     <div className="mb-8 p-6 bg-muted rounded-lg border border-border">
//                       <p className="font-bold mb-1">To,</p>
//                       <p className="font-bold">The Chief Functionary,</p>
//                       <p className="font-bold uppercase text-[#a7150b]">
//                         Adhiparasakthi Charitable Medical Education And Cultural Trust
//                       </p>
//                       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                         GST ROAD MELMARUVATHUR, CHEYYUR TALUK KANCHEEPURAM DISTRICT,
//                         <br />
//                         Tamil Nadu, Madurai, 603319
//                       </p>
//                     </div>

//                     <div className="mb-8">
//                       <p>
//                         <span className="font-bold">Subject:</span> Renewal of Registration under Foreign Contribution
//                         (Regulation) Act, 2010
//                       </p>
//                     </div>

//                     <div className="mb-8 text-justify leading-relaxed">
//                       <p className="mb-4">Sir/Madam,</p>
//                       <p>
//                         With reference to your application dated 26-05-2016 seeking renewal of registration under the
//                         Foreign Contribution (Regulation) Act, 2010, I am directed to convey the approval of competent
//                         authority for renewal of registration of your Association in terms of the provisions contained
//                         in Section 16 of Foreign Contribution (Regulation) Act, 2010 read with Rule 12 of Foreign
//                         Contribution (Regulation) Rules, 2011 as amended from time to time, as follows:-
//                       </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6 mb-10">
//                       <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
//                         <p className="text-xs uppercase tracking-widest text-yellow-800 font-bold mb-1">
//                           Registration Number
//                         </p>
//                         <p className="text-3xl font-mono font-bold text-foreground">075940349</p>
//                       </div>
//                       <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
//                         <p className="text-xs uppercase tracking-widest text-blue-800 font-bold mb-1">
//                           Nature of Association
//                         </p>
//                         <p className="text-xl font-bold text-foreground">Cultural, Educational, Social</p>
//                       </div>
//                     </div>

//                     <div className="mb-8">
//                       <h4 className="font-bold mb-2">2. Designated Bank Account</h4>
//                       <div className="bg-muted p-6 rounded-lg border-l-4 border-[#a7150b]">
//                         <p className="leading-relaxed">
//                           The association shall receive foreign contribution only in its designated/exclusive bank
//                           account:
//                         </p>
//                         <div className="mt-4 grid gap-2 font-mono text-sm">
//                           <p>
//                             <span className="font-bold text-muted-foreground w-32 inline-block">Account No:</span>{" "}
//                             3258728116
//                           </p>
//                           <p>
//                             <span className="font-bold text-muted-foreground w-32 inline-block">Bank:</span> Central
//                             Bank of India
//                           </p>
//                           <p>
//                             <span className="font-bold text-muted-foreground w-32 inline-block">Branch:</span> GST ROAD
//                             MELMARUVATHUR, CHEYYUR TK
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-8">
//                       <p>
//                         <span className="font-bold text-foreground">3.</span> You are advised to furnish intimations
//                         online within the prescribed time to the Central Government of the amounts of each foreign
//                         contribution received by you, the source and the manner in which the foreign contribution was
//                         utilised.
//                       </p>

//                       <p>
//                         <span className="font-bold text-foreground">4.</span> The association cannot bring out any
//                         publication (registered under PRB Act, 1867) or act as correspondent, columnist, editor, printer
//                         or publisher of a registered newspaper or engage in the production or broadcast of audio news.
//                       </p>

//                       <p>
//                         <span className="font-bold text-foreground">8.</span> This renewed certificate is valid for a
//                         period of five years with effect from{" "}
//                         <span className="font-bold text-foreground">01-11-2016</span>.
//                       </p>
//                     </div>

//                     <div className="mt-16 flex flex-col items-end">
//                       <div className="text-right">
//                         <p className="font-bold text-xl text-foreground">B K Singh</p>
//                         <p className="font-semibold text-muted-foreground">Under Secretary</p>
//                         <p className="text-sm text-muted-foreground">Tel. 01123438245</p>
//                         <div className="mt-4 text-xs text-muted-foreground border-t border-border pt-2">
//                           Digitally signed by BRAJESH KUMAR SINGH
//                           <br />
//                           Date: 2016.10.29 14:48:08 IST
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-4 bg-muted border-t flex justify-end gap-3 font-sans">
//                   <Button variant="outline" onClick={() => setIsFcraRenewalModalOpen(false)}>
//                     Close
//                   </Button>
//                   <Button className="bg-foreground text-background hover:bg-foreground/90">
//                     <Download className="w-4 h-4 mr-2" /> Download Official PDF
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}

//         {/* Overseas Donation Modal */}
//         {isOverseasModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOverseasModalOpen(false)}
//               className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl px-4 h-[90vh] flex flex-col"
//             >
//               <div className="bg-background rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden font-sans text-foreground">
//                 <div className="flex justify-between items-center p-5 border-b bg-muted">
//                   <h3 className="font-bold text-xl text-foreground">Overseas Donation Procedure</h3>
//                   <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
//                     <X className="w-5 h-5 text-muted-foreground" />
//                   </button>
//                 </div>
//                 <div className="flex-1 overflow-y-auto p-8">
//                   <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
//                     <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
//                     <p>
//                       Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
//                       Indian banks are restricted.
//                     </p>
//                   </div>

//                   <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
//                     <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
//                   </h4>
//                   <div className="bg-muted rounded-xl p-6 border border-border space-y-3 font-mono text-sm mb-8">
//                     <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-2">
//                       <span className="text-muted-foreground font-sans">Account Name</span>
//                       <span className="font-bold text-right">
//                         Adhiparasakthi Charitable Medical Educational and Cultural Trust
//                       </span>
//                     </div>
//                     <div className="flex justify-between border-b border-border pb-2">
//                       <span className="text-muted-foreground font-sans">Account No</span>
//                       <span className="font-bold text-lg">40209740361</span>
//                     </div>
//                     <div className="flex justify-between border-b border-border pb-2">
//                       <span className="text-muted-foreground font-sans">Bank Name</span>
//                       <span className="font-bold">State Bank of India</span>
//                     </div>
//                     <div className="flex justify-between border-b border-border pb-2">
//                       <span className="text-muted-foreground font-sans">Branch</span>
//                       <span className="font-bold">New Delhi Main Branch (Code: 00691)</span>
//                     </div>
//                     <div className="flex justify-between pt-1">
//                       <span className="text-muted-foreground font-sans">SWIFT Code</span>
//                       <span className="font-bold bg-yellow-100 px-2 rounded">SBININBB104</span>
//                     </div>
//                   </div>

//                   <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
//                     <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
//                   </h4>
//                   <p className="text-sm text-muted-foreground mb-4">
//                     On successful transfer, kindly share the following details +{" "}
//                     <strong>Passport Copy (Front & Back)</strong> to{" "}
//                     <span className="font-bold text-foreground">acmectrust@gmail.com</span>:
//                   </p>
//                   <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-foreground bg-muted p-4 rounded-lg">
//                     <li>1. Name of Donor</li>
//                     <li>2. Donor Address</li>
//                     <li>3. Purpose of Remittance</li>
//                     <li>4. Country of Donor</li>
//                     <li>5. Currency & Amount</li>
//                     <li>6. ID Proof (Passport)</li>
//                   </ul>
//                 </div>
//                 <div className="p-4 bg-muted border-t flex justify-end gap-3">
//                   <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
//                     Close
//                   </Button>
//                   <Button className="bg-foreground text-background">Copy Bank Details</Button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </main>
//   )
// }
"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  CheckCircle2,
  Facebook,
  Twitter,
  Mail,
  Landmark,
  Activity,
  Eye,
  FileText,
  Globe,
  Phone,
  Building2,
  Download,
  X,
  Clock,
  AlertTriangle,
  ShieldCheck,
  AlertCircle,
  HeartHandshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// ========== ANIMATION VARIANTS ==========
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const scaleOnHover = {
  hover: { scale: 1.02, transition: { duration: 0.3 } },
}

// ========== MAIN PAGE EXPORT ==========
export default function Home() {
  return (
    <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
      <Hero />
      <About />
      <Leadership />
      <CsrRegistration />
      <MissionVision />
      <Awards />
      <Donation />
      <CsrProjects />
      <CsrInquiry />
    </main>
  )
}

// ========== HERO COMPONENT ==========
function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
          alt="Hero Background"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </motion.div>

      {/* ✅ FIX: h-full + flex centering */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center pt-16 md:pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <span className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[#ffc107] text-sm font-bold tracking-widest uppercase shadow-lg">
              Est. 1978 • Registered Trust
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl text-balance"
          >
            Healing Hands.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-300 to-[#ffc107] animate-gradient">
              Compassionate Hearts.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance"
          >
            Adhiparasakthi Charitable Medical Educational & Cultural Trust (ACMEC)
            dedicated to serving humanity through holistic healthcare and education.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
          >
            <Link
              href="https://www.omsakthiamma.org/online_services/donations"
              className="w-full sm:w-auto group"
            >
              <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_40px_-10px_rgba(167,21,11,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(167,21,11,0.8)]">
                <Heart className="mr-3 w-5 h-5 fill-current group-hover:animate-pulse" />
                Donate Now
              </Button>
            </Link>

            <Link href="#about" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-white/5"
              >
                Explore Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator (desktop only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}


// ========== ABOUT COMPONENT ==========
function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center lg:text-left"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
          >
            About The Trust
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                       font-serif font-bold text-foreground 
                       mb-6 leading-tight text-balance"
          >
            A Legacy of Service{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Since 1978</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#ffc107] -z-0" />
            </span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="text-muted-foreground 
                       text-base sm:text-lg 
                       leading-relaxed mb-8 space-y-4"
          >
            <p>
              M/s Adhiparasakthi Charitable Medical Educational and Cultural Trust (ACMEC Trust), as the name suggests
              has dedicated itself to serve the people in the areas of:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 py-4">
              {["Charity", "Medical", "Educational", "Cultural Activities"].map((item) => (
                <div key={item} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#a7150b]/10 group-hover:bg-[#a7150b] transition-colors flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#a7150b] group-hover:text-white w-5 h-5 transition-colors" />
                  </div>
                  <span className="font-semibold text-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <p>
              This trust is a non-profitable organization which was founded by{" "}
              <strong className="text-foreground">H.H. Bangaru Adigalar</strong> in the year 1978 with a small corpus
              fund and with few cents of land in Melmaruvathur.
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group hover:scale-105 transition-transform">
              <Card className="p-6 border-l-4 border-[#ffc107] bg-gradient-to-br from-[#ffc107]/5 to-transparent hover:shadow-lg transition-shadow">
                <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-1">1978</h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Established</p>
              </Card>
            </div>

            <div className="group hover:scale-105 transition-transform">
              <Card className="p-6 border-l-4 border-[#a7150b] bg-gradient-to-br from-[#a7150b]/5 to-transparent hover:shadow-lg transition-shadow">
                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1">Melmaruvathur</h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Headquarters</p>
              </Card>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
              alt="Medical Service"
              width={700}
              height={500}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ffc107]/20 rounded-full blur-3xl -z-10 group-hover:bg-[#ffc107]/30 transition-colors" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#a7150b]/10 rounded-full blur-3xl -z-10 group-hover:bg-[#a7150b]/20 transition-colors" />
        </motion.div>
      </div>
    </section>
  )
}

// ========== 3. LEADERSHIP COMPONENT ==========
function Leadership() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Founders */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Founder & President
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "His Holiness Bangaru Adigalar",
                role: "Founder",
                image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png",
                bgColor: "from-[#ffc107]/10 to-[#ffc107]/5",
                borderColor: "border-[#ffc107]",
              },
              {
                name: "Smt. Lakshmi Bangaru Adigalar",
                role: "President",
                image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg",
                bgColor: "from-[#a7150b]/10 to-[#a7150b]/5",
                borderColor: "border-[#a7150b]",
              },
            ].map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Card className={`p-8 text-center border-2 ${person.borderColor} bg-gradient-to-br ${person.bgColor} hover:shadow-2xl transition-all group`}>
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-background shadow-xl mb-6 relative group-hover:scale-105 transition-transform">
                    <Image src={person.image} alt={person.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{person.name}</h3>
                  <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm mb-6">{person.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Board of Trustees Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Board of Trustees</h2>
          <div className="w-24 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {[
            { name: "Mrs. V. Lakshmi", role: "President / Executive Trustee" },
            { name: "Mr. G.B. Anbalagan", role: "Vice President / Trustee" },
            { name: "Mr. G.B. Senthil Kumar", role: "Vice President / Trustee" },
            { name: "Mrs. B. Sridevi", role: "Treasurer / Trustee" },
            { name: "Mrs. B. Umadevi", role: "Secretary / Trustee" },
          ].map((trustee, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all group bg-gradient-to-br from-[#ffc107]/5 to-transparent border-2 border-transparent hover:border-[#ffc107]/30">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#ffc107] text-foreground rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform font-bold text-xl">
                    {trustee.name.split(" ")[1][0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-[#a7150b] transition-colors mb-2">
                      {trustee.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wide">
                      {trustee.role}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* General Trustees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Mr. R. Karunanithi", role: "Trustee" },
            { name: "Mr. K. Arulmozhi", role: "Trustee" },
            { name: "Mr. S.R. Raghuvir", role: "Trustee" },
            { name: "Mr. A. Saiprasad", role: "Trustee" },
          ].map((trustee, idx) => (
            <motion.div
              key={trustee.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 5) * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all group border-2">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-muted-foreground">
                      {trustee.name.split(" ")[1][0]}
                    </div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">
                      {trustee.role}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-foreground group-hover:text-[#a7150b] transition-colors">
                    {trustee.name}
                  </h4>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CsrRegistration() {
  
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- Left Side: Text Content --- */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
          >
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="w-8 h-8 text-[#ffc107]" />
              <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">Government of India</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Official CSR Registration</h2>
            
            <p className="text-background/80 text-lg mb-8 leading-relaxed">
              Adhiparasakthi Charitable Medical Educational and Cultural Trust is officially registered with the
              Ministry of Corporate Affairs for undertaking CSR activities.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Registration Number</p>
                <p className="text-2xl font-mono font-bold text-[#ffc107]">CSR00002370</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Date of Registration</p>
                <p className="text-xl font-bold">16-04-2021</p>
              </div>
            </div>
          </motion.div>

          {/* --- Right Side: Actual CSR Letter Image --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <div className="bg-white p-2">
                <Image 
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766132506/Screenshot_2025-12-19_134112_js329n.png" 
                  alt="Official CSR Approval Letter" 
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
            </div>
            
            {/* Optional: Overlay Badge */}
            <div className="absolute top-4 right-4 bg-[#ffc107] text-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
              <FileText className="w-3 h-3" /> Official Document
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ========== 5. MISSION & VISION COMPONENT ==========
function MissionVision() {
  return (
    <section className="py-24 px-4 bg-muted relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div whileHover="hover" variants={scaleOnHover} className="bg-gradient-to-br from-[#a7150b] to-[#800f07] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                <Activity className="text-white w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-white/80 text-lg leading-relaxed">
              The ACMEC Trust is committed to the selfless service of humanity by managing resources with transparency and strategic foresight to deliver high-quality social welfare services
              </p>
            </div>
          </motion.div>

          <motion.div whileHover="hover" variants={scaleOnHover} className="bg-gradient-to-br from-[#ffc107] to-[#e6ac00] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-black/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-foreground w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-foreground/80 text-lg leading-relaxed font-medium">
                To create a sustainable, inclusive society where the burdens of human suffering are alleviated through institutional excellence in healthcare, education, and cultural preservation. Our vision is to serve as a perpetual pillar of community support, governed by integrity and the spiritual principle of universal welfare—offering solace and opportunity to all, regardless of caste, creed, colour, or religion.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========== 6. AWARDS COMPONENT ==========
function Awards() {
  const awards = [
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg", title: "State Govt Honor", desc: "Honored by Chief Minister Ms. J. Jayalalitha..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530538674-150x150_semv32.jpg", title: "Nirmal Gram Puraskar", desc: "National award for sanitation..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530539144-150x150_dyivy6.jpg", title: "Certificate of Excellence", desc: "Recognition for outstanding contribution..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530534191-150x150_lo2fc6.jpg", title: "Best Institution", desc: "Awarded to Adhiparasakthi Annai Illam..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530529377-150x150_mz3ixh.jpg", title: "Award of Appreciation", desc: "Awarded by the Department of Health..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530527252-150x150_ud5spj.jpg", title: "Regional Recognition", desc: "Acknowledging our continuous support..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530521793-150x150_hqdtpk.jpg", title: "Official Certification", desc: "Certification of merit from authorized government bodies." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/awards-150x150_rtu0ni.png", title: "National Honor", desc: "Founder H.H. Bangaru Adigalar receiving award...", badge: "Highest Honor" },
  ]

  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">Our Achievements</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Significant Awards and Recognition</h2>
          <div className="w-24 h-1.5 bg-[#ffc107] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden border-b border-border">
                <Image src={award.img} alt={award.title} fill className="object-fill group-hover:scale-105 transition-transform duration-500" />
                {award.badge && <div className="absolute top-2 right-2 bg-[#ffc107] text-foreground text-xs font-bold px-2 py-1 rounded">{award.badge}</div>}
              </div>
              <div className="p-5">
                <h4 className="font-bold text-foreground leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">{award.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// // ========== 7. DONATION COMPONENT ==========
// function Donation() {
//   const [isDocModalOpen, setIsDocModalOpen] = useState(false)
//   const [isFcraRenewalModalOpen, setIsFcraRenewalModalOpen] = useState(false)
//   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

//   return (
//     <>
//       <section className="py-24 px-4 bg-muted/30" id="donate">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Domestic Card */}
//             <motion.div whileHover={{ y: -8 }} className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border relative overflow-hidden flex flex-col">
//               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b]"><FileText className="w-8 h-8" /></div>
//                 <div><h3 className="text-2xl font-bold text-foreground">Domestic Donors</h3><span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">80G Tax Exempt</span></div>
//               </div>
//               <ul className="space-y-4 mb-10 flex-1">
//                 {["50% Tax Exemption", "Instant e-Receipt", "Digital Certificate"].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-[#a7150b]" /> {item}</li>
//                 ))}
//               </ul>
//               <div className="space-y-4">
//                 <Link href="https://www.omsakthiamma.org/online_services/donations" className="block w-full"><Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-lg rounded-xl">Donate via UPI / NetBanking</Button></Link>
//                 <Button onClick={() => setIsDocModalOpen(true)} variant="ghost" className="w-full text-muted-foreground hover:text-[#a7150b]">View 80G Certificate</Button>
//               </div>
//             </motion.div>

//             {/* Foreign Card */}
//             <motion.div whileHover={{ y: -8 }} className="bg-foreground rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col text-background">
//               <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-4 bg-white/10 rounded-2xl text-[#ffc107]"><Globe className="w-8 h-8" /></div>
//                 <div><h3 className="text-2xl font-bold">Foreign Donors</h3><span className="text-sm font-medium text-foreground bg-[#ffc107] px-3 py-1 rounded-full">FCRA Approved</span></div>
//               </div>
//               <ul className="space-y-4 mb-10 flex-1">
//                 {["Government Approved FCRA", "International Wire Transfer", "SWIFT Transfer Support"].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-background/80"><CheckCircle2 className="w-5 h-5 text-[#ffc107]" /> {item}</li>
//                 ))}
//               </ul>
//               <div className="space-y-4">
//                 <Button onClick={() => setIsOverseasModalOpen(true)} className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-foreground font-bold h-14 text-lg rounded-xl">View Overseas Donation Procedure</Button>
//                 <Button onClick={() => setIsFcraRenewalModalOpen(true)} variant="ghost" className="w-full text-background/80 hover:text-background">View FCRA Certificate</Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

      
//       {/* Donation Modals */}
//       <AnimatePresence>
        
//         {/* 1. 80G Modal - NOW AN IMAGE VIEWER */}
//         {isDocModalOpen && (
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={() => setIsDocModalOpen(false)}
//             className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
//           >
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.95 }} 
//               animate={{ opacity: 1, scale: 1 }} 
//               exit={{ opacity: 0, scale: 0.95 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
//             >
//                {/* Modal Header */}
//                <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
//                   <h3 className="font-bold text-gray-800 text-lg">80G Certificate</h3>
//                   <button 
//                     onClick={() => setIsDocModalOpen(false)} 
//                     className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                </div>

//                {/* Scrollable Image Container */}
//                <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
//                   <div className="bg-white shadow-lg mx-auto w-full">
//                       {/* REPLACE WITH YOUR 80G IMAGE PATH */}
//                       <Image 
//                         src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766136367/80G_Ceritficate_for_Receipt_page-0001_uxlp2z.jpg" 
//                         alt="80G Certificate" 
//                         width={1000}
//                         height={1400}
//                         className="w-full h-auto block" 
//                         priority
//                       />
//                   </div>
//                </div>
//             </motion.div>
//           </motion.div>
//         )}
        
//         {/* 2. FCRA Modal (Updated: 2 Images Vertical Scroll) */}
//         {isFcraRenewalModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsFcraRenewalModalOpen(false)}
//             className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//                {/* Modal Header */}
//                <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
//                   <h3 className="font-bold text-gray-800 text-lg">FCRA Certificate (2 Pages)</h3>
//                   <button
//                     onClick={() => setIsFcraRenewalModalOpen(false)}
//                     className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                </div>
              
//               {/* Scrollable Image Container */}
//               <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
//                  <div className="flex flex-col gap-4 max-w-3xl mx-auto">
//                     {/* PAGE 1 */}
//                     <div className="bg-white shadow-lg w-full">
//                         {/* REPLACE WITH YOUR PAGE 1 IMAGE PATH */}
//                         <Image 
//                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133511/Renewal-Certificate-_ACMEC_TRUST_FCRA_page-0001_nw5ao7.jpg" 
//                           alt="FCRA Page 1" 
//                           width={1000}
//                           height={1400}
//                           className="w-full h-auto block" 
//                           priority
//                         />
//                     </div>
                    
//                     {/* PAGE 2 */}
//                     <div className="bg-white shadow-lg w-full">
//                         {/* REPLACE WITH YOUR PAGE 2 IMAGE PATH */}
//                         <Image 
//                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133704/Renewal-Certificate-_ACMEC_TRUST_FCRA_page-0002_vth9g7.jpg" 
//                           alt="FCRA Page 2" 
//                           width={1000}
//                           height={1400}
//                           className="w-full h-auto block" 
//                         />
//                     </div>
//                  </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* 3. Overseas Donation Modal (Fixed: Scrollable + Full Info) */}
//         {isOverseasModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOverseasModalOpen(false)}
//             className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="w-full max-w-3xl h-[90vh] bg-background rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex justify-between items-center p-5 border-b bg-muted z-10 shrink-0">
//                 <h3 className="font-bold text-xl text-foreground">Overseas Donation Procedure</h3>
//                 <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
//                   <X className="w-5 h-5 text-muted-foreground" />
//                 </button>
//               </div>

//               {/* Scrollable Body */}
//               <div className="flex-1 overflow-y-auto p-8">
//                 <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
//                   <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
//                   <p className="text-black">
//                     Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
//                     Indian banks are restricted.
//                   </p>
//                 </div>

//                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
//                   <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
//                 </h4>
//                 <div className="bg-muted rounded-xl p-6 border border-border space-y-3 font-mono text-sm mb-8">
//                   <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-2">
//                     <span className="text-muted-foreground font-sans">Account Name</span>
//                     <span className="font-bold text-right text-foreground">
//                       Adhiparasakthi Charitable Medical Educational and Cultural Trust
//                     </span>
//                   </div>
//                   <div className="flex justify-between border-b border-border pb-2">
//                     <span className="text-muted-foreground font-sans">Account No</span>
//                     <span className="font-bold text-lg text-foreground">40209740361</span>
//                   </div>
//                   <div className="flex justify-between border-b border-border pb-2">
//                     <span className="text-muted-foreground font-sans">Bank Name</span>
//                     <span className="font-bold text-foreground">State Bank of India</span>
//                   </div>
//                   <div className="flex justify-between border-b border-border pb-2">
//                     <span className="text-muted-foreground font-sans">Branch</span>
//                     <span className="font-bold text-foreground">New Delhi Main Branch (Code: 00691)</span>
//                   </div>
//                   <div className="flex justify-between pt-1">
//                     <span className="text-muted-foreground font-sans">SWIFT Code</span>
//                     <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
//                   </div>
//                 </div>

//                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
//                   <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
//                 </h4>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   On successful transfer, kindly share the following details +{" "}
//                   <strong>Passport Copy (Front & Back)</strong> to{" "}
//                   <span className="font-bold text-foreground">acmectrust@gmail.com</span>:
//                 </p>
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-foreground bg-muted p-4 rounded-lg">
//                   <li>1. Name of Donor</li>
//                   <li>2. Donor Address</li>
//                   <li>3. Purpose of Remittance</li>
//                   <li>4. Country of Donor</li>
//                   <li>5. Currency & Amount</li>
//                   <li>6. ID Proof (Passport)</li>
//                 </ul>
//               </div>

//               {/* Footer */}
//               <div className="p-4 bg-muted border-t flex justify-end gap-3 shrink-0">
//                 <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
//                   Close
//                 </Button>
//                 <Button className="bg-foreground text-background hover:bg-foreground/90">Copy Bank Details</Button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// ========== 7. DONATION COMPONENT (UPDATED CONTENT) ==========
function Donation() {
  const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 md:py-24 px-4 bg-muted/30" id="donate">
        <div className="container mx-auto max-w-6xl">

          {/* WHY DONATE */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              <HeartHandshake className="w-4 h-4" />
              <span>Join Our Mission</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Empowering Lives, Creating Impact
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We have created meaningful impacts in rural education and healthcare.
              Your contribution helps us sustain these efforts. Join us and empower
              the mission to help the needy—every rupee counts towards building a better future.
            </p>
          </div>

          {/* DONATION CARDS */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16 md:mb-20">

            {/* DOMESTIC */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-border relative flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />

              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b] shrink-0">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Domestic Donors</h3>
                  <span className="text-xs sm:text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    Indian Citizens Only
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1 text-sm sm:text-base">
                <p className="text-muted-foreground">
                  Maximize your philanthropic impact while saving on taxes.
                  Your contributions support vital education and rural development initiatives.
                </p>

                <ul className="space-y-3">
                  {[
                    "Eligible for Section 80G Tax Exemption",
                    "Valid Receipt with PAN for IT Returns",
                    "Supports Education & Rural Development",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-medium text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-[#a7150b] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex gap-2 text-xs text-red-800">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>
                    Note: As per Govt regulations, cash donations exceeding ₹2,000
                    are not eligible for 80G deduction. Please use digital modes.
                  </p>
                </div>
              </div>

              <Link
                href="https://www.omsakthiamma.org/online_services/donations"
                className="block w-full mt-auto"
              >
                <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-base sm:text-lg rounded-xl shadow-md transition-all hover:scale-[1.02]">
                  Donate via UPI / NetBanking
                </Button>
              </Link>
            </motion.div>

            {/* FOREIGN */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-foreground rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative flex flex-col text-background"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />

              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-white/10 rounded-2xl text-[#ffc107] shrink-0">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Foreign Donors</h3>
                  <span className="text-xs sm:text-sm font-medium text-foreground bg-[#ffc107] px-3 py-1 rounded-full">
                    FCRA Approved
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1 text-sm sm:text-base">
                {[
                  "Government Approved FCRA",
                  "International Wire Transfer",
                  "SWIFT Transfer Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-background/80">
                    <CheckCircle2 className="w-5 h-5 text-[#ffc107] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => setIsOverseasModalOpen(true)}
                className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-foreground font-bold h-14 text-base sm:text-lg rounded-xl shadow-md transition-all hover:scale-[1.02]"
              >
                View Overseas Donation Procedure
              </Button>
            </motion.div>
          </div>

          {/* CERTIFICATES */}
          <div className="space-y-14 md:space-y-16">
            <div className="flex items-center justify-center gap-3 text-center">
              <ShieldCheck className="w-7 h-7 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Legal Certificates & Documents
              </h2>
            </div>

            {/* 80G */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <FileText className="w-6 h-6 text-[#a7150b]" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  80G Tax Exemption Certificate (Domestic)
                </h3>
              </div>

              <div className="flex justify-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                <Image
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766169266/Screenshot_2025-12-20_000354_vxwwyc.png"
                  alt="80G Certificate"
                  width={800}
                  height={1000}
                  className="w-full max-w-3xl h-auto shadow-sm"
                />
              </div>
            </div>

            {/* FCRA */}
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg text-white relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />

              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <Globe className="w-6 h-6 text-[#ffc107]" />
                <h3 className="text-lg sm:text-xl font-bold">FCRA Certificate (Foreign)</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2].map((page) => (
                  <div key={page} className="space-y-3">
                    <p className="text-sm text-center text-white/60 font-medium">
                      Page {page.toString().padStart(2, "0")}
                    </p>
                    <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg bg-white">
                      <Image
                        src={
                          page === 1
                            ? "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133511/Renewal-Certificate-_ACMEC_TRUST_FCRA_page-0001_nw5ao7.jpg"
                            : "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133704/Renewal-Certificate-_ACMEC_TRUST_FCRA_page-0002_vth9g7.jpg"
                        }
                        alt={`FCRA Page ${page}`}
                        width={600}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL FOR OVERSEAS PROCEDURE ================= */}
      <AnimatePresence>
        {isOverseasModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOverseasModalOpen(false)}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl h-[90vh] bg-background rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-5 border-b bg-muted z-10 shrink-0">
                <h3 className="font-bold text-xl text-foreground">Overseas Donation Procedure</h3>
                <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
                  <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
                  <p className="text-black">
                    Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
                    Indian banks are restricted.
                  </p>
                </div>

                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
                  <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
                </h4>
                <div className="bg-muted rounded-xl p-6 border border-border space-y-3 font-mono text-sm mb-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground font-sans">Account Name</span>
                    <span className="font-bold text-right text-foreground">
                      Adhiparasakthi Charitable Medical Educational and Cultural Trust
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground font-sans">Account No</span>
                    <span className="font-bold text-lg text-foreground">40209740361</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground font-sans">Bank Name</span>
                    <span className="font-bold text-foreground">State Bank of India</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground font-sans">Branch</span>
                    <span className="font-bold text-foreground">New Delhi Main Branch (Code: 00691)</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-muted-foreground font-sans">SWIFT Code</span>
                    <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
                  </div>
                </div>

                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
                  <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  On successful transfer, kindly share the following details +{" "}
                  <strong>Passport Copy (Front & Back)</strong> to{" "}
                  <span className="font-bold text-foreground">acmectrust@gmail.com</span>:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-foreground bg-muted p-4 rounded-lg">
                  <li>1. Name of Donor</li>
                  <li>2. Donor Address</li>
                  <li>3. Purpose of Remittance</li>
                  <li>4. Country of Donor</li>
                  <li>5. Currency & Amount</li>
                  <li>6. ID Proof (Passport)</li>
                </ul>
              </div>

              <div className="p-4 bg-muted border-t flex justify-end gap-3 shrink-0">
                <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
                  Close
                </Button>
                <Button className="bg-foreground text-background hover:bg-foreground/90">Copy Bank Details</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function CsrProjects() {
  return (
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto space-y-24">
          
          {/* ================= PROJECT 1: EYE CAMP ================= */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                CSR Initiative 01
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Free Eye Camp</h2>
            </div>

            {/* UPDATED: 
               1. Kept 'grid-cols-2' (2 images per row).
               2. Added 'max-w-4xl mx-auto' to restrict width -> Makes images smaller!
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164830/097A1993_anatnz.jpg",
                "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164805/097A1516_sodl4z.jpg",
                "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164845/097A1597_wxps2o.jpg",
                "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164797/097A1504_nn9vgr.jpg",
              ].map((imgSrc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  // Kept aspect-square for a neat box shape
                  className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                >
                  <Image
                    src={imgSrc || "/placeholder.svg"}
                    alt={`Eye Camp Image ${idx + 1}`}
                    fill
                    className="object-fill transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
          
           {/* ================= PROJECT 2: ENDOSCOPE MACHINE ================= */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                CSR Initiative 02
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Endoscopy Machine by ICICI</h2>
            </div>

            {/* Same layout for consistency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093845/IMG-20231206-WA0012_hysx3l.jpg",
                "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093847/IMG-20231206-WA0054_nc25ip.jpg",
                "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093844/IMG-20231206-WA0048_poj4kh.jpg",
                "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093825/IMG-20231206-WA0018_ipotnj.jpg",
              ].map((imgSrc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                >
                  <Image
                    src={imgSrc || "/placeholder.svg"}
                    alt={`Endoscope Project Image ${idx + 1}`}
                    fill
                    className="object-fill transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

// ========== 9. CSR INQUIRY FORM COMPONENT ==========
function CsrInquiry() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [selectedProject, setSelectedProject] = useState("")

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    // Reduced vertical padding on mobile (py-12) vs desktop (py-24)
    <section className="py-12 md:py-24 px-4 bg-[#ffc107] relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Form Side */}
            <div className="md:col-span-3 p-6 md:p-12 bg-background">
              <div className="mb-6 md:mb-8">
                {/* Adjusted font size for mobile */}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Partner with Us</h3>
                <p className="text-sm md:text-base text-muted-foreground mt-2">Interested in a CSR collaboration? Let's connect.</p>
              </div>

              {formStatus === "success" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-foreground">Inquiry Sent!</h4>
                  <p className="text-muted-foreground">We will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">
                  {/* Changed to single column on mobile (grid-cols-1) for better input width */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" required placeholder="Tech Corp" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
                    </div>
                  </div>
                  
                  {/* Changed to single column on mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required placeholder="+91..." className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Interested Project</Label>
                    <Select onValueChange={(value) => setSelectedProject(value)}>
                      <SelectTrigger className="bg-muted border-border h-11"><SelectValue placeholder="Select a project" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">EDUCATION</SelectItem>
                        <SelectItem value="eye-camp">EYE CAMP</SelectItem>
                        <SelectItem value="medical">MEDICAL</SelectItem>
                        <SelectItem value="feeding-poor">FEEDING POOR</SelectItem>
                        <SelectItem value="others">OTHERS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {selectedProject === "others" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2">
                      <Label htmlFor="other-details">Specify Details</Label>
                      <Input id="other-details" required placeholder="Please specify..." className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
                    </motion.div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="remarks">Remarks</Label>
                    <Textarea id="remarks" placeholder="Any specific requirements?" className="bg-muted border-border resize-none focus:ring-[#a7150b]" rows={3} />
                  </div>
                  
                  <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white font-bold h-12 text-lg rounded-xl">
                    {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="md:col-span-2 bg-foreground p-6 md:p-12 text-background flex flex-col justify-between relative overflow-hidden">
              {/* Adjusted icon position/size for mobile so it doesn't overlap text */}
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <Building2 size={150} className="md:w-[200px] md:h-[200px]" />
              </div>
              
              <div className="relative z-10">
                <h4 className="text-lg md:text-xl font-bold mb-6 text-[#ffc107]">
                  Contact Information
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-background/60 uppercase tracking-wider">
                        Email Us
                      </p>
                      <p className="font-medium text-sm break-all">
                        contact@acmectrust.org
                      </p>
                    </div>
                  </div>               
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
                        Call Us
                      </p>
                      <div className="space-y-1 text-sm font-medium">
                        <p>Landline: +91 44 2752 9313</p>
                        <p>Mobile: +91 91500 45391</p>
                        <p>Whatsapp: +91 91500 45391</p>
                        <p>PRO: +91 44 27529276</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
                        Visit Us
                      </p>
                      <p className="font-medium text-sm leading-relaxed text-background/90">
                        <span className="font-bold block mb-1">
                          Adhiparasakthi Charitable Medical Educational and
                          Cultural Trust
                        </span>
                        No.1 GST Road, Adhiparasakthi Siddhar Peedam Temple
                        Campus, Melmaruvathur, Chengalpet District,
                        TamilNadu-603319, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
                        Timing
                      </p>
                      <p className="font-medium text-sm">
                        8:00 am To 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                <p className="text-xs text-background/60">
                  By submitting this form, you agree to our privacy policy
                  regarding data collection.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}