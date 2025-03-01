"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export function ArtWorks() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const artworks = [
    { title: "Portrait Sketch", image: "/placeholder.svg" },
    { title: "Character Sketch", image: "/placeholder.svg" },
    { title: "Building Sketch", image: "/placeholder.svg" },
    { title: "Couple Sketch", image: "/placeholder.svg" },
    { title: "Interior Sketch", image: "/placeholder.svg" },
    { title: "Perspective Sketch", image: "/placeholder.svg" },
  ]

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-serif text-center mb-12">ART WORKS</h2>
      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, i) => (
            <div key={i} className="group">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <Link href="/artworks" className="block text-center">
                <span className="text-gray-600 hover:text-[#b39b7d]">
                  View More
                  <br />
                  {artwork.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#b39b7d] text-white hover:bg-[#a08a6c] hidden md:flex"
          onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#b39b7d] text-white hover:bg-[#a08a6c] hidden md:flex"
          onClick={() => setCurrentSlide((prev) => Math.min(artworks.length - 1, prev + 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

