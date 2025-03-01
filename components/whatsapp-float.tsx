"use client"

import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export function WhatsAppFloat() {
  // Effect to load Font Awesome script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://kit.fontawesome.com/your-kit-code.js"
    script.crossOrigin = "anonymous"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Function to open WhatsApp chat
  const openWhatsAppChat = () => {
    // Replace '1234567890' with your actual WhatsApp number
    window.open("https://wa.me/1234567890", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 cursor-pointer" onClick={openWhatsAppChat}>
      {/* Circular background */}
      <div className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-300">
        {/* WhatsApp icon */}
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
      </div>
    </div>
  )
}

