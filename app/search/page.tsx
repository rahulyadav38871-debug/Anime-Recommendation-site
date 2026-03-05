"use client"

import { useState } from "react"
import { SearchBar } from "@/components/search-bar"
import { AnimeGrid } from "@/components/anime-grid"
import { FilterSidebar, FilterDrawer } from "@/components/filter-sidebar"
import { EmptyState } from "@/components/empty-state"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mockAnime } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(mockAnime)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (q: string) => {
    setQuery(q)
    setHasSearched(true)
    if (!q.trim()) {
      setResults(mockAnime)
      return
    }
    const filtered = mockAnime.filter(
      (a) =>
        a.title.toLowerCase().includes(q.toLowerCase()) ||
        a.genres.some((g) => g.toLowerCase().includes(q.toLowerCase()))
    )
    setResults(filtered)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="mb-8 flex flex-col gap-4">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground">
          Search Anime
        </h1>
        <div className="flex items-center gap-3">
          <SearchBar
            placeholder="Search by title, genre..."
            onSearch={handleSearch}
            showSuggestions={false}
            className="flex-1"
          />
          <FilterDrawer />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {results.length} result{results.length !== 1 ? "s" : ""}
            {query && ` for "${query}"`}
          </p>
          <Select defaultValue="popularity">
            <SelectTrigger className="w-40 bg-secondary text-foreground border-border">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="release">Release Date</SelectItem>
              <SelectItem value="title">Title</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-8">
        <FilterSidebar />
        <div className="flex-1">
          {results.length > 0 ? (
            <AnimeGrid anime={results} />
          ) : (
            <EmptyState
              title="No results found"
              description={`We couldn't find any anime matching "${query}". Try a different search term or adjust your filters.`}
              action={
                <Link href="/">
                  <Button variant="outline" className="border-border text-foreground hover:bg-secondary">
                    Browse Discover
                  </Button>
                </Link>
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}
