"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-12 h-12 bg-white rounded-full p-1 shadow-lg"
              >
                <Image
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
                  alt="ACMEC Trust Logo"
                  fill
                  className="object-contain p-1"
                />
              </motion.div>
              <div>
                <p className="font-black text-[#ffc107] text-lg">ACMEC Trust</p>
                <p className="text-xs text-gray-400">Adhiparasakthi</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering communities through healthcare, education, and cultural preservation.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.15, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffc107] transition-colors duration-300 shadow-lg"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-lg mb-6 text-[#ffc107]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Organisation", href: "/organisation" },
                { label: "Trust Activities", href: "/trust-activities" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ffc107] transition-colors text-sm font-medium hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-lg mb-6 text-[#ffc107]">Our Services</h3>
            <ul className="space-y-2">
              {["Healthcare Services", "Educational Programs", "Cultural Activities", "Community Outreach"].map(
                (service) => (
                  <li key={service}>
                    <p className="text-gray-400 text-sm font-medium">{service}</p>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-lg mb-6 text-[#ffc107]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[#ffc107] shrink-0" />
                <p className="text-gray-400 text-sm font-medium">Melmaruvathur, Tamil Nadu, India</p>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#ffc107]" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-400 hover:text-[#ffc107] text-sm font-medium transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ffc107]" />
                <a
                  href="mailto:info@acmectrust.org"
                  className="text-gray-400 hover:text-[#ffc107] text-sm font-medium transition-colors"
                >
                  info@acmectrust.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left font-medium">
            © {currentYear} ACMEC Trust. All rights reserved.
          </p>
          {/* <p className="text-gray-400 text-sm flex items-center gap-2 font-medium">
            Made with <Heart className="w-4 h-4 text-[#a7150b] fill-current" /> for humanity
          </p> */}
        </div>
      </div>
    </footer>
  )
}
