"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="bg-purple-600 text-white px-4 py-2 rounded">
              ART IS HERE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-800 hover:text-gray-600 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600 transition-colors">
              ABOUT US
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-gray-600 transition-colors">
              SERVICES
            </Link>
            <Link href="/artworks" className="text-gray-800 hover:text-gray-600 transition-colors">
              ARTWORKS
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600 transition-colors">
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/artworks"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ARTWORKS
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

