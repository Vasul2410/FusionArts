import Image from "next/image"

import WallS1 from "../public/wall story/home.jpg"
import WallS2 from "../public/wall story/office.jpg"
import WallS3 from "../public/wall story/podcast.jpg"


export function SketchingStories() {
  const obj = [WallS1, WallS2, WallS3]
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#e6ddd3]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Sketching Stories on Every Wall</h2>
        <div className="bg-[#d8cfc2] p-8 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {obj.map((i, index) => (
              <div key={index} className="relative aspect-[3/4]">
                <Image
                  src={i}
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

