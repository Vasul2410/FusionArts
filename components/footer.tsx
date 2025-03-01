import Link from "next/link"
import { Mail, Facebook, Instagram, Phone } from "lucide-react"

export function Footer() {

  const openWhatsAppChat = () => {
    // Replace '1234567890' with your actual WhatsApp number
    const message = `Hello,

I'm interested in a sketch that captures a cherished memory. Could you please share your process, pricing, and availability?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+917698541642?text=${encodedMessage}`, "_blank", "noopener,noreferrer")
  }

  return (
    <footer className="bg-[#e6ddd3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-serif mb-4">ABOUT US</h2>
          <p className="text-gray-700 max-w-lg">
            Welcome to ART IS HERE, your go-to platform for sketching enthusiasts! We are passionate about bringing
            class into art sites by offering creative sketches, tutorials, and inspiration for artists of all levels.
            Whether you love portraits, abstract designs, or digital art, we're here to fuel your creativity.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-serif mb-4">QUICK LINKS</h2>
          <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
            HOME
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
            ABOUT US
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
            SERVICES
          </Link>
          <Link href="/artworks" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
            ARTWORKS
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-serif mb-4">CONTACT US</h2>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            <Mail className="h-5 w-5" />
            CONTACT US
          </Link>
          <a
            href="https://www.instagram.com/fusionartswork"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            <Instagram className="h-5 w-5" />
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            <Facebook className="h-5 w-5" />
            Facebook
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            <Phone className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Fusion Arts Work. All rights reserved.</p>
      </div>
    </footer>
  )
}

