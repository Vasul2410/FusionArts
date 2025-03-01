import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      title: "Portrait Sketching",
      price: "Rs.700",
      description:
        "Capture the essence of personality in detailed portrait sketches. Perfect for individuals, families, or professional headshots.",
      duration: "3-5 days",
      features: ["High-quality paper", "Digital copy included", "One revision", "Multiple sizes available"],
    },
    {
      title: "Couple Sketching",
      price: "Rs.550",
      description:
        "Immortalize your special moments together. Ideal for anniversaries, engagements, or just celebrating your relationship.",
      duration: "4-6 days",
      features: ["Premium materials", "Background options", "Two revisions", "Frame options available"],
    },
    {
      title: "Wall Sketching",
      price: "Rs.550",
      description: "Transform your spaces with custom wall art. From minimalist designs to elaborate murals.",
      duration: "5-7 days",
      features: ["Site consultation", "Design preview", "Weather-resistant", "Maintenance guide"],
    },
    {
      title: "Abstract Art",
      price: "Rs.650",
      description:
        "Express emotions through abstract compositions. Perfect for modern spaces and creative environments.",
      duration: "3-4 days",
      features: ["Custom color palette", "Multiple styles", "Digital preview", "Size customization"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <Navigation />
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-serif text-center mb-8">Our Services</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Discover our range of professional art services. Each service is crafted with attention to detail and
            customized to meet your specific needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-serif mb-2">{service.title}</h2>
                <p className="text-xl text-[#b39b7d] mb-4">{service.price}</p>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

