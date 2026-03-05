import Image from "next/image"
import { Star, Tv, Clock, Calendar, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Anime } from "@/lib/types"

export function AnimeDetailsHeader({ anime }: { anime: Anime }) {
  return (
    <section className="relative">
      <div className="absolute inset-0 h-64 overflow-hidden sm:h-80">
        <Image
          src={anime.banner || anime.image}
          alt=""
          fill
          className="object-cover opacity-20 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-12 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <div className="relative h-64 w-44 shrink-0 overflow-hidden rounded-xl border border-border shadow-2xl sm:h-72 sm:w-48">
            <Image
              src={anime.image}
              alt={anime.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-4 pb-4">
            <div className="flex flex-col gap-1">
              <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
                {anime.title}
              </h1>
              <p className="text-sm text-muted-foreground">{anime.titleJapanese}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-lg bg-chart-4/10 px-3 py-1.5">
                <Star className="h-4 w-4 fill-chart-4 text-chart-4" />
                <span className="text-sm font-bold text-chart-4">{anime.score}</span>
              </div>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                #{anime.rank} Ranked
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Tv className="h-3.5 w-3.5" /> {anime.format}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {anime.season} {anime.year}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {anime.episodes} ep &middot; {anime.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" /> {anime.studios.join(", ")}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {anime.genres.map((genre) => (
                <Badge key={genre} variant="secondary" className="bg-secondary text-secondary-foreground">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
