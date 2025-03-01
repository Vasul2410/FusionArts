import Image from "next/image"

export function ArtInLife() {
  return (
    <section className="bg-[#e6ddd3] py-16">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
        <div className="max-w-xl">
          <h2 className="text-3xl font-serif mb-4">ART IN OUR LIFE</h2>
          <p className="text-gray-700">
            Art is the essence of creativity and self-expression, where passion and emotion flow like a river. It evokes
            emotions, and inspires imagination. Through art, we find joy, depth, and a new perspective on the world.
          </p>
        </div>
        <div className="relative w-48 h-48">
          <Image
            src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20(1)-Ab0UfnGXCJs11FzufgJFAHox8o0Ytm.png`}
            alt="Decorative statue"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

