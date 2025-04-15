import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "@/styles/globals.css"

import "./globals.css"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Fusion Arts Work",
  description: "Your app description",
  icons: {
    icon: "/FUSION-JUST-LOGO.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-[#faf6f1]">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}



import './globals.css'

// export const metadata = {
//       generator: 'v0.dev'
//     };
