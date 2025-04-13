import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "Portrait Sketching",
      price: "Rs.700",
      description: "Capture the essence of personality in detailed portrait sketches.",
      duration: "3-5 days",
      features: ["High-quality paper", "Digital copy", "One revision", "Various sizes"],
      image:
        "https://images.unsplash.com/photo-1592127861618-717769457e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlMjBzdHJlZXQlMjBza2V0Y2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      title: "Couple Sketching",
      price: "Rs.550",
      description: "Immortalize special moments with detailed couple sketches.",
      duration: "4-6 days",
      features: ["Premium materials", "Background choices", "Two revisions", "Frame options"],
      image:
        "https://i.pinimg.com/736x/65/3d/59/653d5958980bb488c72a5a5d5a4330ca.jpg",
    },
    {
      title: "Wall Sketching",
      price: "Rs.550",
      description: "Transform spaces with custom wall art, from simple designs to murals.",
      duration: "5-7 days",
      features: ["Site consultation", "Design preview", "Durable paint", "Care tips"],
      image:
        "https://images.unsplash.com/photo-1612800193224-b01863367363?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbCUyMGFydCUyMHN0cmVldCUyMHNrZXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Abstract Art",
      price: "Rs.650",
      description: "Express emotions through unique abstract compositions.",
      duration: "3-4 days",
      features: ["Color palette choice", "Style options", "Digital preview", "Size choices"],
      image:
        "https://images.unsplash.com/photo-1594906457831-658788fca4eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWJzdHJhY3QlMjBzdHJlZXQlMjBza2V0Y2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-gray-800 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our professional art services, each tailored to your unique needs with meticulous attention to
            detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif text-gray-800 mb-2">{service.title}</h2>
                <p className="text-xl text-[#b39b7d] mb-4">{service.price}</p>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

