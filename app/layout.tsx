import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ACMEC Trust - Adhiparasakthi Charitable Medical Educational Cultural Trust",
  description:
    "Empowering communities through healthcare, education, and cultural preservation. Serving humanity with compassion and dedication.",
      icons: {
    icon: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png",
    shortcut: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png",
    apple: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png", // optional
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}