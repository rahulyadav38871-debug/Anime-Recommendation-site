import { AnimeGrid } from "@/components/anime-grid"
import { fetchRecommended, recommendationReasons } from "@/lib/mock-data"

export async function RecommendedSection() {
  const recommended = await fetchRecommended()

  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
        Recommended For You
      </h2>
      <AnimeGrid anime={recommended} reasons={recommendationReasons} />
    </section>
  )
}
