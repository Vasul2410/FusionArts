import type { Metadata } from "next"
import AboutContent from "./about"

export const metadata: Metadata = {
  title: "About | Fusion Art Gallery",
  description: "Learn more about Fusion Art Gallery and our artistic journey.",
}

export default function AboutPage() {
  return (
    <div>
      <AboutContent />
    </div>
  )
}