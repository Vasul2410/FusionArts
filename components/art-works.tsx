"use client"
import Image from "next/image"
import Link from "next/link"

export function ArtWorks() {
  const artworks = [
    { title: "Portrait Sketch", image: "/placeholder.svg" },
    { title: "Character Sketch", image: "/placeholder.svg" },
    { title: "Building Sketch", image: "/placeholder.svg" },
    { title: "Couple Sketch", image: "/placeholder.svg" },
    { title: "Interior Sketch", image: "/placeholder.svg" },
    { title: "Perspective Sketch", image: "/placeholder.svg" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">ART WORKS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <span className="text-gray-600 hover:text-[#b39b7d] transition-colors">
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

