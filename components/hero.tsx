import Image from "next/image"

export function Hero() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative aspect-[3/4]">
            <Image
              src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20(1)-Ab0UfnGXCJs11FzufgJFAHox8o0Ytm.png`}
              alt={`Art frame ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

