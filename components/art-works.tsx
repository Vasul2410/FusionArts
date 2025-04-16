"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import ServiceA1 from "../public/services/IMG20241021000153.jpg"
import ServiceA2 from "../public/services/IMG20250130225413.jpg"
import ServiceA3 from "../public/services/IMG20210608035937.jpg"
import ServiceA4 from "../public/services/IMG20250216005156.jpg"
import ServiceA5 from "../public/services/InFrame_1705167790095.jpg"
import ServiceA6 from "../public/services/IMGSERVICE6.jpeg"



export function ArtWorks() {
  const [selectedImage, setSelectedImage] = useState(null)

  const artworks = [
    { title: "Character Sketch", image: ServiceA2 },
    { title: "Canvas Art", image: ServiceA5 },
    { title: "Building Sketch", image: ServiceA3 },
    { title: "Couple Sketch", image: ServiceA4 },
    { title: "Acrylic Art", image: ServiceA6 },
    { title: "Portrait Sketch", image: ServiceA1 },

  ]

  const handleImageClick = (index) => {
    setSelectedImage(index === selectedImage ? null : index)
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">ART WORKS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, i) => (
            <div key={i} className="group relative">
              <div
                className={`relative aspect-square mb-4 overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 ${
                  selectedImage === i ? "scale-105" : "hover:scale-105"
                }`}
                onClick={() => handleImageClick(i)}
              >
                <Image
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {selectedImage === i && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">{artwork.title}</p>
                  </div>
                )}
              </div>
              <Link href="/artworks" className="block text-center">
                <span className="text-gray-600 hover:text-[#b39b7d] transition-colors duration-300">
                  View More
                  <br />
                  {artwork.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

