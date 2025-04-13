"use client"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css/navigation"
import "swiper/css";

export default function AboutPage() {
  const testimonials = [
    {
      name: "Alice Johnson",
      comment: "The portrait sketching service captured my essence perfectly! I'm thrilled with the result.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8MA%3D%3D",
      clientImage: "/clients/alice-original.jpg",
      sketchImage: "/sketches/alice-sketch.jpg",
    },
    {
      name: "Robert Smith",
      comment: "The couple sketching service was a fantastic way to celebrate our anniversary. Highly recommend!",
      image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      clientImage: "/clients/robert-original.jpg",
      sketchImage: "/sketches/robert-sketch.jpg",
    },
    // Add similar entries for other testimonials...
  ]

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
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
            At ART IS HERE, our mission is to foster a vibrant artistic community by providing a platform for emerging and established artists to showcase their work. We are committed to making art accessible to all, offering educational programs, and supporting the growth of the local art scene.
          </p>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-8 text-center">What Our Clients Say</h2>
          <div className="w-full max-w-4xl mx-auto">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg shadow-lg p-12 h-full flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                    <h3 className="font-serif text-xl mb-6">{testimonial.name}</h3>

                    {/* Client vs Sketch images */}
                    {testimonial.clientImage && testimonial.sketchImage && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                        <div>
                          <Image
                            src={testimonial.clientImage}
                            alt="Client"
                            width={200}
                            height={200}
                            className="rounded-md object-cover mx-auto"
                          />
                          <p className="text-sm text-gray-500 mt-2">Original Photo</p>
                        </div>
                        <div>
                          <Image
                            src={testimonial.sketchImage}
                            alt="Sketch"
                            width={200}
                            height={200}
                            className="rounded-md object-cover mx-auto"
                          />
                          <p className="text-sm text-gray-500 mt-2">Final Sketch</p>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">View All Testimonials</Link>
          </div>
        </section>
      </div>
    </div>
  )
}
