import { AnimeRow } from "@/components/anime-row"
import { fetchTrending } from "@/lib/mock-data"

export async function TrendingSection() {
  const trending = await fetchTrending()

  return <AnimeRow title="Trending Now" anime={trending} />
}
