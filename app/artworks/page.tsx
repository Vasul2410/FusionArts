import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function ArtworksPage() {
  const categories = [
    { id: "all", name: "All Works" },
    { id: "portraits", name: "Portraits" },
    { id: "landscapes", name: "Landscapes" },
    { id: "abstract", name: "Abstract" },
  ]

  const artworks = [
    {
      title: "Urban Perspective",
      category: "landscapes",
      description: "A detailed architectural sketch capturing city life",
      dimensions: '24" x 36"',
      medium: "Charcoal on paper",
      year: "2023",
    },
    {
      title: "Ethereal Dreams",
      category: "abstract",
      description: "Abstract interpretation of dreamscapes",
      dimensions: '30" x 40"',
      medium: "Mixed media",
      year: "2023",
    },
    {
      title: "Serene Portrait",
      category: "portraits",
      description: "Emotional portrait study in light and shadow",
      dimensions: '18" x 24"',
      medium: "Graphite on paper",
      year: "2023",
    },
    {
      title: "City Rhythms",
      category: "landscapes",
      description: "Dynamic urban landscape at twilight",
      dimensions: '36" x 48"',
      medium: "Digital art",
      year: "2023",
    },
    {
      title: "Abstract Harmony",
      category: "abstract",
      description: "Geometric patterns in motion",
      dimensions: '24" x 24"',
      medium: "Acrylic on canvas",
      year: "2023",
    },
    {
      title: "Mountain Majesty",
      category: "landscapes",
      description: "Panoramic mountain range at sunrise",
      dimensions: '48" x 24"',
      medium: "Watercolor",
      year: "2023",
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <Navigation />
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-serif text-center mb-8">Art Gallery</h1>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-2 rounded-full bg-white hover:bg-[#b39b7d] hover:text-white transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Artwork Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <div key={artwork.title} className="group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{artwork.title}</h3>
                <p className="text-gray-600 mb-2">{artwork.description}</p>
                <div className="text-sm text-gray-500">
                  <p>Medium: {artwork.medium}</p>
                  <p>Dimensions: {artwork.dimensions}</p>
                  <p>Year: {artwork.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

