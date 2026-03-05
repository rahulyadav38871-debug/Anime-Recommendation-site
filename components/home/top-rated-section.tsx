import { AnimeRow } from "@/components/anime-row"
import { fetchTopRated } from "@/lib/mock-data"

export async function TopRatedSection() {
  const topRated = await fetchTopRated()

  return <AnimeRow title="Top Rated" anime={topRated} />
}
