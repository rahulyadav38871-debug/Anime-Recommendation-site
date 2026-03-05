"use client"

import { useState } from "react"
import { SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { GENRES } from "@/lib/mock-data"

interface FilterState {
  genres: string[]
  yearRange: [number, number]
  scoreRange: [number, number]
  format: string
  status: string
  sort: string
}

const defaultFilters: FilterState = {
  genres: [],
  yearRange: [1990, 2026],
  scoreRange: [0, 10],
  format: "all",
  status: "all",
  sort: "popularity",
}

function FilterContent({
  filters,
  setFilters,
}: {
  filters: FilterState
  setFilters: (f: FilterState) => void
}) {
  const toggleGenre = (genre: string) => {
    setFilters({
      ...filters,
      genres: filters.genres.includes(genre)
        ? filters.genres.filter((g) => g !== genre)
        : [...filters.genres, genre],
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Genres</h3>
        <div className="flex flex-wrap gap-2">
          {GENRES.map((genre) => (
            <Badge
              key={genre}
              variant={filters.genres.includes(genre) ? "default" : "secondary"}
              className={`cursor-pointer transition-colors ${
                filters.genres.includes(genre)
                  ? "bg-primary text-primary-foreground hover:bg-primary/80"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              onClick={() => toggleGenre(genre)}
            >
              {genre}
              {filters.genres.includes(genre) && <X className="ml-1 h-3 w-3" />}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">
          Year Range: {filters.yearRange[0]} - {filters.yearRange[1]}
        </h3>
        <Slider
          min={1990}
          max={2026}
          step={1}
          value={filters.yearRange}
          onValueChange={(v) =>
            setFilters({ ...filters, yearRange: v as [number, number] })
          }
          className="w-full"
        />
      </div>

      <Separator />

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">
          Min Score: {filters.scoreRange[0]}
        </h3>
        <Slider
          min={0}
          max={10}
          step={0.5}
          value={[filters.scoreRange[0]]}
          onValueChange={(v) =>
            setFilters({ ...filters, scoreRange: [v[0], 10] })
          }
          className="w-full"
        />
      </div>

      <Separator />

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Format</h3>
        <Select
          value={filters.format}
          onValueChange={(v) => setFilters({ ...filters, format: v })}
        >
          <SelectTrigger className="bg-secondary text-foreground border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Formats</SelectItem>
            <SelectItem value="TV">TV</SelectItem>
            <SelectItem value="Movie">Movie</SelectItem>
            <SelectItem value="OVA">OVA</SelectItem>
            <SelectItem value="ONA">ONA</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Status</h3>
        <Select
          value={filters.status}
          onValueChange={(v) => setFilters({ ...filters, status: v })}
        >
          <SelectTrigger className="bg-secondary text-foreground border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Airing">Airing</SelectItem>
            <SelectItem value="Finished">Finished</SelectItem>
            <SelectItem value="Upcoming">Upcoming</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => setFilters(defaultFilters)}
        className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
      >
        Reset Filters
      </Button>
    </div>
  )
}

export function FilterSidebar({ className }: { className?: string }) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)

  return (
    <aside className={`hidden w-64 shrink-0 lg:block ${className ?? ""}`}>
      <div className="sticky top-20 rounded-xl border border-border bg-card p-4">
        <h2 className="mb-4 text-base font-semibold text-foreground">Filters</h2>
        <FilterContent filters={filters} setFilters={setFilters} />
      </div>
    </aside>
  )
}

export function FilterDrawer() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 border-border text-foreground hover:bg-secondary lg:hidden">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 overflow-y-auto bg-background border-border">
        <SheetHeader>
          <SheetTitle className="text-foreground">Filters</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <FilterContent filters={filters} setFilters={setFilters} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
