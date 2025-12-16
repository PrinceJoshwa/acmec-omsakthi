"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, BookOpen, Users, Award, Library, Microscope, Calculator, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function EducationalInstitution() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Educational Institutions</h1>
          <p className="text-lg md:text-xl text-white/90 font-medium">Nurturing minds, shaping futures</p>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Education Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6">Empowering Through Education</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our institutions provide world-class education
              from primary to professional levels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Primary & Secondary",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Foundation building education with modern teaching methods.",
                students: "3,000+ students",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Calculator,
                title: "Higher Secondary",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Advanced learning in science, commerce, and arts streams.",
                students: "1,500+ students",
                color: "from-[#ffc107] to-[#ffb300]",
              },
              {
                icon: Microscope,
                title: "Professional Courses",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Engineering, medical, and management education.",
                students: "2,000+ students",
                color: "from-purple-500 to-purple-600",
              },
            ].map((level, idx) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#ffc107] group">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <level.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{level.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{level.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[#a7150b] font-bold">{level.students}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions List */}
      <section className="py-16 md:py-24 px-4 bg-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Our Institutions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">Educational Institutions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Adhiparasakthi Engineering College",
                type: "Engineering",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Offering B.E/B.Tech programs in various engineering disciplines.",
                established: "2001",
                image: "/placeholder.svg?height=500&width=700",
                accreditation: "AICTE Approved, NBA Accredited",
              },
              {
                name: "Adhiparasakthi College of Arts & Science",
                type: "Arts & Science",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Comprehensive undergraduate and postgraduate programs.",
                established: "1998",
                image: "/placeholder.svg?height=500&width=700",
                accreditation: "UGC Recognized, NAAC A+ Grade",
              },
              {
                name: "Adhiparasakthi Medical College & Hospital",
                type: "Medical",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. MBBS, MD, and nursing programs with 500-bed teaching hospital.",
                established: "2003",
                image: "/placeholder.svg?height=500&width=700",
                accreditation: "MCI/NMC Approved",
              },
              {
                name: "Adhiparasakthi Polytechnic College",
                type: "Polytechnic",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diploma programs in engineering and technology.",
                established: "1995",
                image: "/placeholder.svg?height=500&width=700",
                accreditation: "AICTE Approved",
              },
              {
                name: "Adhiparasakthi Matriculation School",
                type: "School",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. From LKG to XII with modern facilities and teaching methods.",
                established: "1992",
                image: "/placeholder.svg?height=500&width=700",
                accreditation: "Matriculation Board",
              },
              {
                name: "Adhiparasakthi Business School",
                type: "Management",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. MBA programs with industry partnerships.",
                established: "2005",
                image: "/placeholder.svg?height=500&width=700",
                accreditation: "AICTE Approved",
              },
            ].map((institution, idx) => (
              <motion.div
                key={institution.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64">
                    <Image
                      src={institution.image || "/placeholder.svg"}
                      alt={institution.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold">
                      Est. {institution.established}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-[#a7150b]" />
                      <span className="text-[#a7150b] font-bold text-sm">{institution.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{institution.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{institution.description}</p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">{institution.accreditation}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Facilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">World-Class Infrastructure</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Library, title: "Modern Libraries", count: "50,000+ books" },
              { icon: Microscope, title: "Research Labs", count: "25+ labs" },
              { icon: Globe, title: "Smart Classrooms", count: "100+ rooms" },
              { icon: Users, title: "Sports Facilities", count: "All major sports" },
            ].map((facility, idx) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-[#ffc107]">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#ffc107] to-[#a7150b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <facility.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-[#1a1a1a] mb-2">{facility.title}</h3>
                  <p className="text-[#a7150b] font-bold text-sm">{facility.count}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-4 bg-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Gallery
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">Campus Life</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "/placeholder.svg?height=400&width=600",
              "/placeholder.svg?height=400&width=600",
              "/placeholder.svg?height=400&width=600",
              "/placeholder.svg?height=400&width=600",
              "/placeholder.svg?height=400&width=600",
              "/placeholder.svg?height=400&width=600",
            ].map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Campus ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
