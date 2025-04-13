import Image from "next/image"

export default function TestimonialsPage() {
    const testimonials = [
        {
            name: "Emily Johnson",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHwy",
            comment: "I was amazed by the portrait sketch. It captured the exact essence of my personality. Highly recommend!",
            before: "https://images.unsplash.com/photo-1517841905240-47298fc1903d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHwy",
            after: "https://images.unsplash.com/photo-1542909168-8253e9117760?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
        },
        {
            name: "Michael Davis",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHwy",
            comment: "The couple sketch was the perfect gift for our anniversary. The details were incredible, and the service was exceptional.",
            before: "https://images.unsplash.com/photo-1546410531-b9f9fc861470?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXBsZXxlbnwwfHwwfHx8Mg%3D%3D",
            after: "https://images.unsplash.com/photo-1518391846014-a7b67b67b8a5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvdXBsZXxlbnwwfHwwfHx8Mg%3D%3D",
        },
        {
            name: "Sophia Martinez",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg",
            comment: "The abstract art piece I commissioned is now the centerpiece of my living room. It’s unique and captivating.",
            before: "https://images.unsplash.com/photo-1560101471-0977f7f37f4b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8Mg%3D%3D",
            after: "https://images.unsplash.com/photo-1519715164148-e4a07f833f18?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8Mg%3D%3D",
        },
        {
            name: "Daniel Wilson",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
            comment: "The wall sketching service exceeded my expectations. They transformed my space into a beautiful work of art.",
            before: "https://images.unsplash.com/photo-1592028188275-797735939592?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGwlMjBzazB0Y2h8ZW58MHx8MHx8Mg%3D%3D",
            after: "https://images.unsplash.com/photo-1617399537471-63f2ad4e423c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGwlMjBzazB0Y2h8ZW58MHx8MHx8Mg%3D%3D",
        },
        {
            name: "Olivia Taylor",
            image: "https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-of-smiling-ethnic-woman-in-office.jpg?s=612x612&w=0&k=20&c=n027pQxR9Jk9i5dJv6j-T1z_XG7-gJz9a7JjS_3Y0Ew=",
            comment: "The artist captured my pet’s personality perfectly in the sketch. It’s a treasure I’ll cherish forever.",
            before: "https://images.unsplash.com/photo-1589709055247-6383b508390f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBldCUyMHNlcnZpY2V8ZW58MHx8MHx8Mg%3D%3D",
            after: "https://images.unsplash.com/photo-1605609325758-c9f4451a023f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldCUyMHNlcnZpY2V8ZW58MHx8MHx8Mg%3D%3D",
        },
        {
            name: "Ethan Brown",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Z734W8hT443zNfI_sQyM0b7X46fJgq7rDA&usqp=CAU",
            comment: "Working with this team was a joy. They were professional, attentive to detail, and delivered an amazing sketch.",
            before: "https://images.unsplash.com/photo-1542909168-8253e9117760?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
            after: "https://images.unsplash.com/photo-1517841905240-47298fc1903d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHwy",
        },
        {
            name: "Ava Harris",
            image: "https://images.unsplash.com/photo-1508214751196-bcfd46396013?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fDA%3D",
            comment: "The abstract art I ordered perfectly complemented my home decor. The colors and textures are even more vibrant in person.",
            before: "https://images.unsplash.com/photo-1542909168-8253e9117760?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
            after: "https://images.unsplash.com/photo-1517841905240-47298fc1903d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHwy",
        },
        {
            name: "Liam Clark",
            image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.1.1413409148.1712809600&semt=sph",
            comment: "The couple sketching service was a unique and memorable gift. My partner loved it!",
            before: "https://images.unsplash.com/photo-1542909168-8253e9117760?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
            after: "https://images.unsplash.com/photo-1517841905240-47298fc1903d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHwy",
        },
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#e6ddd3]">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-serif text-center mb-8">Testimonials</h1>
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16">
                    What our clients say about their experiences with our art services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-4 p-6">
                {/* Before Sketch */}
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-500 mb-2">Before</span>
                  <div className="rounded-lg overflow-hidden w-full h-48 relative">
                    <Image
                      src={testimonial.before}
                      alt={`Before sketch of ${testimonial.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* After Sketch */}
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-500 mb-2">After</span>
                  <div className="rounded-lg overflow-hidden w-full h-48 relative">
                    <Image
                      src={testimonial.after}
                      alt={`After sketch of ${testimonial.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-6 bg-gray-50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="object-cover" />
                  </div>
                  <h3 className="text-lg font-serif">{testimonial.name}</h3>
                </div>
                <p className="text-gray-700 italic">“{testimonial.comment}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}