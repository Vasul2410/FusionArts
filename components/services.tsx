
import Image from "next/image"
import Service1 from "../public/main Services/IMG20231012164837.jpg"
import Service2 from "../public/main Services/IMG20250207180152.jpg"
import Service3 from "../public/main Services/IMGARCRYLIC.jpeg"
import Service4 from "../public/main Services/IMG20210413191446.jpg"

export function Services() {
  const services = [
    { title: "Portrait Sketch", price: "$119", image: Service1 },
    { title: "Colour-Pencil Sketch", price: "$129", image: Service2 },
    { title: "Canvas Art", price: "$159", image: Service3 },
    { title: "Water-Colour Paint", price: "$159", image: Service4 },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">SERVICES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="border border-gray-200 p-2 mb-4 aspect-[3/4] bg-white">
                <div className="w-full h-full bg-gray-100 relative" >
                <Image src={service.image} alt="Art Gallery Interior" fill className="object-cover object-center" />
              </div>
              </div>
              <h3 className="font-serif mb-1">{service.title}</h3>
              <p className="text-gray-600"> Starting From {service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

