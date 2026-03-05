"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Plus, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Anime } from "@/lib/types"
import { cn } from "@/lib/utils"

interface AnimeCardProps {
  anime: Anime
  reason?: string
  className?: string
}

export function AnimeCard({ anime, reason, className }: AnimeCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      <Link href={`/anime/${anime.id}`} className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={anime.image}
          alt={anime.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
          <Star className="h-3 w-3 fill-chart-4 text-chart-4" />
          <span className="text-xs font-semibold text-foreground">{anime.score}</span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <Link href={`/anime/${anime.id}`}>
          <h3 className="line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
            {anime.title}
          </h3>
        </Link>

        <p className="text-xs text-muted-foreground">
          {anime.year} &middot; {anime.format}
        </p>

        <div className="flex flex-wrap gap-1">
          {anime.genres.slice(0, 2).map((genre) => (
            <Badge
              key={genre}
              variant="secondary"
              className="text-[10px] px-1.5 py-0 h-5 bg-secondary text-secondary-foreground"
            >
              {genre}
            </Badge>
          ))}
          {anime.genres.length > 2 && (
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-5 bg-secondary text-secondary-foreground">
              +{anime.genres.length - 2}
            </Badge>
          )}
        </div>

        {reason && (
          <div className="mt-auto">
            <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
              {reason}
            </span>
          </div>
        )}

        <div className="mt-auto flex items-center gap-1 pt-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            aria-label="Add to favorites"
            onClick={(e) => e.preventDefault()}
          >
            <Heart className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-primary hover:bg-primary/10"
            aria-label="Add to watchlist"
            onClick={(e) => e.preventDefault()}
          >
            <Plus className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
