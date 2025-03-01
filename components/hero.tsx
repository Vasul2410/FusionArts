import Image from "next/image"

export function Hero() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative aspect-[3/4]">
              <Image
                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20(1)-Ab0UfnGXCJs11FzufgJFAHox8o0Ytm.png`}
                alt={`Art frame ${i}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

