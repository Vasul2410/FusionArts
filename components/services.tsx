export function Services() {
  const services = [
    { title: "Portrait Sketch", price: "Rs.700" },
    { title: "Absence Sketch", price: "Rs.550" },
    { title: "Couple Sketch", price: "Rs.550" },
    { title: "Wall Sketch", price: "Rs.550" },
  ]

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-serif text-center mb-12">SERVICES</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.title} className="text-center">
            <div className="border border-gray-200 p-2 mb-4 aspect-[3/4] bg-white">
              <div className="w-full h-full bg-gray-100" />
            </div>
            <h3 className="font-serif mb-1">{service.title}</h3>
            <p className="text-gray-600">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

