import { Hero } from "@/components/hero"
import { ArtInLife } from "@/components/art-in-life"
import { Services } from "@/components/services"
import { SketchingStories } from "@/components/sketching-stories"
import { ArtWorks } from "@/components/art-works"

export default function HomePage() {
  return (
    <div className="space-y">
      <Hero />
      <ArtInLife />
      <Services />
      <SketchingStories />
      <ArtWorks />
    </div>
  )
}

