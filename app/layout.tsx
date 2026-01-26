import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for RoboGenAI project
  title: "RoboGenAI | Underwater Robotics & AI for Marine Exploration",
  description:
    "Integration of Generative AI and Vision Language Models in Underwater Robotic Systems for Marine Exploration and Monitoring",
  keywords: [
    "underwater robotics",
    "generative AI",
    "vision language models",
    "marine exploration",
    "ROV",
    "autonomous systems",
  ],
  authors: [{ name: "RoboGenAI Consortium" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
