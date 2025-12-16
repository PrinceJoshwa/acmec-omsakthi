"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, Target, Eye, Users, Award, TrendingUp, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-[#ffc107] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          >
            <Heart className="w-20 h-20 mx-auto mb-8 text-[#a7150b]" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1a1a1a] mb-6 tracking-tight">
            About ACMEC Trust
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance">
            Empowering communities through compassionate service and divine inspiration
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-6">
                Serving Humanity with Dedication
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <Link href="/trust-activities">
                <Button
                  size="lg"
                  className="bg-[#a7150b] text-white hover:bg-[#8a0d08] rounded-full font-bold shadow-lg px-8"
                >
                  Explore Our Activities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image src="/charity-temple-service.jpg" alt="ACMEC Trust Activities" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-5 py-2 bg-[#a7150b] text-white rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
              Core Values
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-[#1a1a1a]">Our Guiding Principles</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. To provide comprehensive healthcare, quality education, and preserve cultural heritage for the benefit of all communities.",
                color: "#a7150b",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A world where every individual has access to healthcare, education, and opportunities to thrive spiritually and materially.",
                color: "#ffc107",
              },
              {
                icon: Heart,
                title: "Our Values",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Compassion, integrity, service, excellence, and cultural respect guide all our initiatives and interactions.",
                color: "#1a1a1a",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#ffc107] bg-white">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 px-4 bg-[#a7150b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">Our Impact in Numbers</h2>
            <p className="text-white/90 text-xl max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50,000+", label: "People Served", icon: Users },
              { number: "25+", label: "Years of Service", icon: TrendingUp },
              { number: "15+", label: "Institutions", icon: Award },
              { number: "100+", label: "Programs", icon: Heart },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-5xl md:text-6xl font-black mb-3">{stat.number}</div>
                <div className="text-white/90 text-xl font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/donate-us">
              <Button
                size="lg"
                className="bg-white text-[#a7150b] hover:bg-gray-100 rounded-full font-black text-lg px-10 py-7 shadow-2xl hover:scale-105 transition-all"
              >
                <Heart className="mr-2 w-6 h-6 fill-current" />
                Support Our Mission
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
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
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1a1a1a]">Moments of Service</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "/medical-service-camp.jpg",
              "/education-classroom-students.jpg",
              "/cultural-dance-performance.jpg",
              "/community-charity-food.jpg",
              "/temple-worship-ceremony.jpg",
              "/community-volunteers.png",
            ].map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="relative h-80 rounded-3xl overflow-hidden shadow-xl group cursor-pointer border-4 border-gray-100"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery Image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
