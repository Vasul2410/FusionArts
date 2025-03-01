import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#e6ddd3] py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-serif mb-4">ABOUT US</h2>
          <p className="text-gray-700 max-w-lg">
            Welcome to [Your Website Name], your go-to platform for sketching enthusiasts! We are passionate about
            bringing class into art sites by offering creative sketches, tutorials, and inspiration for artists of all
            levels. Whether you love portraits, abstract designs, or digital art, we're here to fuel your creativity.
          </p>
        </div>
        <div className="flex justify-end gap-12">
          <div className="space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-gray-900">
              HOME
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-gray-900">
              ABOUT US
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-gray-900">
              SERVICES
            </Link>
            <Link href="/artworks" className="block text-gray-700 hover:text-gray-900">
              ARTWORKS
            </Link>
          </div>
          <div>
            <Link href="/contact" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <Mail className="h-5 w-5" />
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

