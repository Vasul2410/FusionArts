import Image from "next/image"
import AIOF1 from "../public/art in life/rable_mid.png"

export function ArtInLife() {
  return (
    <section className="bg-[#e6ddd3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-serif mb-4">ART IN OUR LIFE</h2>
          <p className="text-gray-700">
            Art is the essence of creativity and self-expression, where passion and emotion flow like a river. It evokes
            emotions, and inspires imagination. Through art, we find joy, depth, and a new perspective on the world.
          </p>
        </div>
        <div className="relative w-48 h-48 flex-shrink-0">
          <Image
            src={AIOF1}
            alt="Decorative statue"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

