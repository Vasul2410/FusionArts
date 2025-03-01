"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Button } from "@/components/ui/button"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const slides = [
    {
      id: 1,
      src: "https://i.etsystatic.com/9073374/r/il/f63ded/3439932221/il_1140xN.3439932221_fccn.jpg",
      alt: "Colorful Balloons",
      title: "Serious Slider",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lorem felis, egestas in posuere ac, pellentesque et nisi. Etiam id aliquam nulla. Nunc id commodo erat, at aliquet enim. Maecenas ut tempus est.",
    },
    {
      id: 2,
      src: "https://i.etsystatic.com/9073374/r/il/d35b11/3392265234/il_1140xN.3392265234_lb9f.jpg",
      alt: "Colorful Balloons",
      title: "Creative Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lorem felis, egestas in posuere ac, pellentesque et nisi. Etiam id aliquam nulla. Nunc id commodo erat, at aliquet enim. Maecenas ut tempus est.",
    },
    {
      id: 3,
      src: "https://graphicprintcompany.co.uk/cdn/shop/products/Frame2_6d6fac79-5456-4967-9c2d-184376bfba86.jpg",
      alt: "Colorful Balloons",
      title: "Modern Style",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lorem felis, egestas in posuere ac, pellentesque et nisi. Etiam id aliquam nulla. Nunc id commodo erat, at aliquet enim. Maecenas ut tempus est.",
    },
  ]

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 4rem)" }}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="relative h-full w-full">
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-3xl mx-auto text-center px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    className="bg-white text-black hover:bg-white/90 transition-colors duration-300"
                  >
                    READ MORE
                  </Button>
                  <Button className="bg-[#f87171] hover:bg-[#ef4444] text-white border-none transition-colors duration-300">
                    READ LESS
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current?.swiper.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Custom Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.swiper.slideTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

