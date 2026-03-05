"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AnimeGrid } from "@/components/anime-grid"
import type { Anime } from "@/lib/types"

interface AnimeDetailsTabsProps {
  anime: Anime
  recommendations: Anime[]
  reasons: Record<number, string>
}

export function AnimeDetailsTabs({ anime, recommendations, reasons }: AnimeDetailsTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="bg-secondary mb-6">
        <TabsTrigger value="overview" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
          Overview
        </TabsTrigger>
        <TabsTrigger value="characters" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
          Characters
        </TabsTrigger>
        <TabsTrigger value="reviews" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
          Reviews
        </TabsTrigger>
        <TabsTrigger value="recommendations" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
          Recommendations
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="flex flex-col gap-6">
        <div>
          <h3 className="mb-2 text-base font-semibold text-foreground">Synopsis</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{anime.synopsis}</p>
        </div>

        <Separator />

        <div>
          <h3 className="mb-2 text-base font-semibold text-foreground">Genres</h3>
          <div className="flex flex-wrap gap-2">
            {anime.genres.map((genre) => (
              <Badge key={genre} variant="secondary" className="bg-secondary text-secondary-foreground">
                {genre}
              </Badge>
            ))}
          </div>
        </div>

        {anime.contentWarnings && anime.contentWarnings.length > 0 && (
          <>
            <Separator />
            <div>
              <h3 className="mb-2 text-base font-semibold text-foreground">Content Warnings</h3>
              <div className="flex flex-wrap gap-2">
                {anime.contentWarnings.map((warning) => (
                  <Badge key={warning} variant="secondary" className="bg-destructive/10 text-destructive-foreground border-destructive/20">
                    {warning}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}

        <Separator />

        <div>
          <h3 className="mb-2 text-base font-semibold text-foreground">Trailer</h3>
          <div className="flex aspect-video max-w-lg items-center justify-center rounded-xl border border-border bg-secondary">
            <p className="text-sm text-muted-foreground">Trailer placeholder</p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="characters">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Protagonist", "Deuteragonist", "Antagonist", "Supporting"].map((role, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold text-muted-foreground">
                {role[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Character {i + 1}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="reviews">
        <div className="flex flex-col gap-4">
          {[
            { user: "AnimeFan99", rating: 9, text: "An absolute masterpiece. The character development and storytelling are top-notch." },
            { user: "OtakuKing", rating: 8, text: "Great show with amazing animation. Some pacing issues but overall very enjoyable." },
            { user: "CasualViewer", rating: 7, text: "Solid anime that delivers on its promises. Would recommend to newcomers." },
          ].map((review, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{review.user}</span>
                <Badge variant="secondary" className="bg-chart-4/10 text-chart-4 border-chart-4/20">
                  {review.rating}/10
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="recommendations">
        <AnimeGrid anime={recommendations} reasons={reasons} />
      </TabsContent>
    </Tabs>
  )
}
