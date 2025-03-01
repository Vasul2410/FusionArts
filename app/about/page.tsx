import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    { name: "Emma Thompson", role: "Founder & Lead Artist", image: "/placeholder.svg" },
    { name: "David Chen", role: "Gallery Curator", image: "/placeholder.svg" },
    { name: "Sophia Rodriguez", role: "Art Educator", image: "/placeholder.svg" },
    { name: "Michael Lee", role: "Digital Artist", image: "/placeholder.svg" },
  ]

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-8">About Us</h1>

        {/* Hero Section */}
        <div className="relative h-[300px] sm:h-[400px] mb-16 rounded-lg overflow-hidden">
          <Image src="/placeholder.svg" alt="Art Gallery Interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white text-2xl md:text-4xl font-serif text-center px-4">
              Bringing Art to Life Since 2010
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-6 text-center">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Founded in 2010, ART IS HERE began as a small studio in the heart of the city. Our passion for art and
                commitment to nurturing talent has led us to become one of the most respected galleries in the region.
              </p>
              <p className="text-gray-700">
                We believe in the power of art to inspire, challenge, and transform. Our gallery is more than just a
                space to display artwork; it's a community hub where artists and art enthusiasts come together to
                celebrate creativity in all its forms.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[200px] sm:h-[300px] w-full">
              <Image src="/placeholder.svg" alt="Gallery Founding" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16 bg-[#e6ddd3] p-8 rounded-lg">
          <h2 className="text-3xl font-serif mb-6 text-center">Our Mission</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            At ART IS HERE, our mission is to foster a vibrant artistic community by providing a platform for emerging
            and established artists to showcase their work. We are committed to making art accessible to all, offering
            educational programs, and supporting the growth of the local art scene.
          </p>
        </section>

        {/* Meet the Team */}
        <section>
          <h2 className="text-3xl font-serif mb-8 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-serif text-xl mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

