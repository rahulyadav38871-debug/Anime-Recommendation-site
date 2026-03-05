"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimeCard } from "@/components/anime-card"
import { EmptyState } from "@/components/empty-state"
import { mockWatchlist, mockFavorites, mockCompleted } from "@/lib/mock-data"
import type { AnimeListItem } from "@/lib/types"
import Link from "next/link"

function ListGrid({ items }: { items: AnimeListItem[] }) {
  if (items.length === 0) {
    return (
      <EmptyState
        title="Nothing here yet"
        description="Start exploring and add anime to your list."
        action={
          <Link href="/search">
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
              Browse Anime
            </Button>
          </Link>
        }
      />
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.anime.id} className="relative">
          <AnimeCard anime={item.anime} />
          {item.userRating && (
            <Badge className="absolute right-2 top-2 z-10 bg-chart-4/90 text-background border-0">
              {item.userRating}/10
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}

export default function ListsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground">
          My Lists
        </h1>
        <Select defaultValue="added">
          <SelectTrigger className="w-36 bg-secondary text-foreground border-border">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="added">Date Added</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
            <SelectItem value="title">Title</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="watchlist" className="w-full">
        <TabsList className="bg-secondary mb-6">
          <TabsTrigger value="watchlist" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Watchlist ({mockWatchlist.length})
          </TabsTrigger>
          <TabsTrigger value="favorites" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Favorites ({mockFavorites.length})
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Completed ({mockCompleted.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="watchlist">
          <ListGrid items={mockWatchlist} />
        </TabsContent>

        <TabsContent value="favorites">
          <ListGrid items={mockFavorites} />
        </TabsContent>

        <TabsContent value="completed">
          <ListGrid items={mockCompleted} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
