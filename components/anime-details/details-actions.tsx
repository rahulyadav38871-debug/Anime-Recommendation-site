"use client"

import { useState } from "react"
import { Heart, Plus, CheckCircle2, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AnimeDetailsActions() {
  const [rating, setRating] = useState<number | null>(null)

  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
        <Plus className="h-4 w-4" />
        Add to Watchlist
      </Button>
      <Button
        variant="outline"
        className="gap-2 border-border text-foreground hover:bg-secondary rounded-lg"
      >
        <Heart className="h-4 w-4" />
        Favorite
      </Button>
      <Button
        variant="outline"
        className="gap-2 border-border text-foreground hover:bg-secondary rounded-lg"
      >
        <CheckCircle2 className="h-4 w-4" />
        Completed
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="gap-2 border-border text-foreground hover:bg-secondary rounded-lg"
          >
            <Star className="h-4 w-4" />
            {rating ? `${rating}/10` : "Rate"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <DropdownMenuItem key={n} onClick={() => setRating(n)}>
              {n}/10
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg"
        aria-label="Share"
      >
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  )
}
