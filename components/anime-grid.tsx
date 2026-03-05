import { Skeleton } from "@/components/ui/skeleton"
import { AnimeCard } from "@/components/anime-card"
import type { Anime } from "@/lib/types"
import { cn } from "@/lib/utils"

interface AnimeGridProps {
  anime: Anime[]
  reasons?: Record<number, string>
  loading?: boolean
  className?: string
}

export function AnimeGrid({ anime, reasons, loading, className }: AnimeGridProps) {
  if (loading) {
    return (
      <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", className)}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="aspect-[3/4] w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", className)}>
      {anime.map((item) => (
        <AnimeCard
          key={item.id}
          anime={item}
          reason={reasons?.[item.id]}
        />
      ))}
    </div>
  )
}
