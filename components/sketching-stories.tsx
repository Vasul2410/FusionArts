import Image from "next/image"

export function SketchingStories() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#e6ddd3]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Sketching Stories on Every Wall</h2>
        <div className="bg-[#d8cfc2] p-8 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative aspect-[3/4]">
                <Image
                  src={`/placeholder.svg?text=Sketch${i}`}
                  alt={`Sketch ${i}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

