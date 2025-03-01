export function SketchingStories() {
  return (
    <section className="py-16 px-4 bg-[#e6ddd3]">
      <h2 className="text-3xl font-serif text-center mb-12">Sketching Stories on Every Wall</h2>
      <div className="max-w-5xl mx-auto bg-[#d8cfc2] p-8">
        <div className="flex gap-8">
          <div className="w-24">
            <div className="bg-white p-4 h-full">
              <div className="w-full aspect-square bg-[#4a7355] mb-4" />
              <div className="w-full h-24 bg-[#4a7355]" />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-200 p-2 aspect-[3/4] bg-white">
                <div className="w-full h-full bg-gray-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

