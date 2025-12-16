"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Heart,
  GraduationCap,
  Building2,
  Users,
  Sparkles,
  Hospital,
  BookOpen,
  Shield,
  Calendar,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is ACMEC Trust?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How can I contribute?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Where are your facilities located?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#ffc107]">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-circle(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 15 }}
            className="mb-8 inline-block"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full p-4 shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
                alt="ACMEC Trust Logo"
                width={144}
                height={144}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1a1a1a] mb-6 tracking-tight text-balance leading-tight"
          >
            Adhiparasakthi Charitable Medical <br className="hidden md:block" />
            Educational Cultural Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            Empowering communities through healthcare, education, and cultural preservation. Serving humanity with
            compassion and dedication since inception.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/about-us">
              <Button
                size="lg"
                className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] rounded-full font-bold text-base shadow-xl px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/donate-us">
              <Button
                size="lg"
                className="bg-[#a7150b] text-white hover:bg-[#8a0d08] rounded-full font-bold text-base shadow-xl px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                <Heart className="mr-2 w-5 h-5 fill-current" />
                Donate Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        />
      </section>

      {/* Upcoming Events Banner */}
      <section className="py-4 bg-[#a7150b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <Calendar className="w-5 h-5" />
            <p className="font-bold text-sm md:text-base text-white">
              Upcoming Festival: Annual Aadi Pooram Celebration - July 25, 2026
            </p>
            <Link href="/trust-activities">
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#a7150b] rounded-full font-bold text-xs bg-transparent"
              >
                View Details
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="px-5 py-2 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a1a1a] mb-6 text-balance">
              Transforming Lives Through Service
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl text-balance leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Hospital,
                title: "Healthcare",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Providing quality medical care to underserved communities with compassion and dedication.",
                color: "#a7150b",
              },
              {
                icon: GraduationCap,
                title: "Education",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Empowering future generations through quality education and skill development programs.",
                color: "#ffc107",
              },
              {
                icon: Sparkles,
                title: "Cultural",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Preserving and promoting rich cultural heritage and traditional values.",
                color: "#1a1a1a",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-[#ffc107] h-full bg-white">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seva Banner */}
      <section className="py-16 px-4 bg-[#ffc107]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-white shadow-2xl border-4 border-[#1a1a1a]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-4">
                  Support Our Seva Programs
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your contributions help us serve those in
                  need through medical camps, educational scholarships, and community welfare programs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/donate-us">
                    <Button
                      size="lg"
                      className="bg-[#a7150b] text-white hover:bg-[#8a0d08] rounded-full font-bold shadow-lg px-8"
                    >
                      <Heart className="mr-2 w-5 h-5 fill-current" />
                      Contribute Now
                    </Button>
                  </Link>
                  <Link href="/trust-activities">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white rounded-full font-bold bg-transparent"
                    >
                      Learn About Seva
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="w-48 h-48 bg-[#ffc107] rounded-2xl flex items-center justify-center">
                  <Heart className="w-24 h-24 text-[#a7150b] fill-current" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Key Areas Section */}
      <section className="py-20 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-5 py-2 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a1a1a] text-balance">
              Our Areas of Service
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Trust Activities",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comprehensive programs serving communities through medical camps, educational support, and cultural events.",
                icon: Shield,
                link: "/trust-activities",
                image: "/community-service-activities.jpg",
              },
              {
                title: "Educational Institutions",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. World-class educational facilities nurturing young minds with holistic development programs.",
                icon: BookOpen,
                link: "/educational-institution",
                image: "/modern-school-building.png",
              },
              {
                title: "Organisation Structure",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transparent governance and dedicated leadership driving our mission forward.",
                icon: Building2,
                link: "/organisation",
                image: "/organizational-structure.jpg",
              },
              {
                title: "Community Outreach",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Grassroots initiatives connecting with communities to address local needs.",
                icon: Users,
                link: "/trust-activities",
                image: "/people-helping-community.jpg",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href={item.link}>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-[#ffc107] bg-white h-full">
                    <div className="relative h-64 overflow-hidden bg-gray-200">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute bottom-6 left-6">
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-lg">
                          <item.icon className="w-7 h-7 text-[#a7150b]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-4 group-hover:text-[#a7150b] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                      <div className="flex items-center text-[#a7150b] font-black group-hover:gap-2 transition-all">
                        Explore More
                        <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="px-5 py-2 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`p-6 cursor-pointer transition-all duration-300 border-2 ${expandedFaq === idx ? "border-[#ffc107] shadow-lg" : "border-gray-200 hover:border-gray-300"}`}
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-[#1a1a1a]">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#a7150b] transition-transform duration-300 ${expandedFaq === idx ? "rotate-180" : ""}`}
                    />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedFaq === idx ? "auto" : 0, opacity: expandedFaq === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-32 px-4 bg-[#a7150b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-circle(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Join Us in Making a Difference
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your support helps us continue our mission of
            serving humanity with compassion and dedication.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/donate-us">
              <Button
                size="lg"
                className="bg-white text-[#a7150b] hover:bg-gray-100 rounded-full font-black text-lg shadow-2xl px-10 py-7 transition-all duration-300 hover:scale-105"
              >
                <Heart className="mr-2 w-6 h-6 fill-current" />
                Make a Donation
              </Button>
            </Link>
            <Link href="/about-us">
              <Button
                size="lg"
                className="border-4 border-white text-white hover:bg-white hover:text-[#a7150b] rounded-full font-black text-lg bg-transparent px-10 py-7 transition-all duration-300 hover:scale-105"
              >
                Learn About Us
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-5 py-2 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a1a1a] text-balance">
              Our Impact in Pictures
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: "/medical-camp-healthcare.jpg", alt: "Medical Services" },
              { image: "/diverse-students-classroom.png", alt: "Educational Programs" },
              { image: "/cultural-festival.png", alt: "Cultural Events" },
              { image: "/community-gathering-temple.jpg", alt: "Community Service" },
              { image: "/volunteering-charity-work.jpg", alt: "Volunteer Work" },
              { image: "/temple-ceremony-ritual.jpg", alt: "Sacred Ceremonies" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="relative h-80 rounded-2xl overflow-hidden shadow-xl group cursor-pointer border-4 border-white"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="font-black text-white text-xl">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/trust-activities">
              <Button size="lg" className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] rounded-full font-bold px-8">
                View All Photos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
