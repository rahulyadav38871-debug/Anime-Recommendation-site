import { HeroSection } from "@/components/home/hero-section"
import { TrendingSection } from "@/components/home/trending-section"
import { RecommendedSection } from "@/components/home/recommended-section"
import { TopRatedSection } from "@/components/home/top-rated-section"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 lg:px-8">
        <TrendingSection />
        <RecommendedSection />
        <TopRatedSection />
      </div>
    </div>
  )
}
