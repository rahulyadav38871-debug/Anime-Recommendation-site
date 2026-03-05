import { notFound } from "next/navigation"
import { fetchAnimeById, mockAnime, recommendationReasons } from "@/lib/mock-data"
import { AnimeDetailsHeader } from "@/components/anime-details/details-header"
import { AnimeDetailsActions } from "@/components/anime-details/details-actions"
import { AnimeDetailsTabs } from "@/components/anime-details/details-tabs"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function AnimeDetailsPage({ params }: PageProps) {
  const { id } = await params
  const anime = await fetchAnimeById(Number(id))

  if (!anime) {
    notFound()
  }

  const recommendations = mockAnime
    .filter((a) => a.id !== anime.id)
    .slice(0, 6)

  return (
    <div className="flex flex-col">
      <AnimeDetailsHeader anime={anime} />
      <div className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8">
        <AnimeDetailsActions />
        <AnimeDetailsTabs anime={anime} recommendations={recommendations} reasons={recommendationReasons} />
      </div>
    </div>
  )
}
