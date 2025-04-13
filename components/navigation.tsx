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
    <nav className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-300"
            >
              ART IS HERE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-800 hover:text-purple-600 transition-colors duration-300">
              HOME
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-purple-600 transition-colors duration-300">
              ABOUT US
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-purple-600 transition-colors duration-300">
              SERVICES
            </Link>
            <Link href="/artworks" className="text-gray-800 hover:text-purple-600 transition-colors duration-300">
              ARTWORKS
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-purple-600 transition-colors duration-300">
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="hover:bg-gray-100 transition-colors duration-300"
            >
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
              className="block px-3 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-600 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-600 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-600 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/artworks"
              className="block px-3 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-600 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ARTWORKS
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-600 rounded-md transition-colors duration-300"
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

