import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ArtInLife } from "@/components/art-in-life"
import { Services } from "@/components/services"
import { SketchingStories } from "@/components/sketching-stories"
import { ArtWorks } from "@/components/art-works"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <Navigation />
      <main>
        <Hero />
        <ArtInLife />
        <Services />
        <SketchingStories />
        <ArtWorks />
      </main>
      <Footer />
    </div>
  )
}

