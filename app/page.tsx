import { Hero } from "@/components/hero"
import { ArtInLife } from "@/components/art-in-life"
import { Services } from "@/components/services"
import { SketchingStories } from "@/components/sketching-stories"
import { ArtWorks } from "@/components/art-works"

export default function HomePage() {
  return (
    <div className="space-y-16 py-16">
      <Hero />
      <ArtInLife />
      <Services />
      <SketchingStories />
      <ArtWorks />
    </div>
  )
}

