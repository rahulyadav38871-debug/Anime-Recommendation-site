"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { mockAnime } from "@/lib/mock-data"
import Link from "next/link"
import Image from "next/image"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  showSuggestions?: boolean
  className?: string
}

export function SearchBar({
  placeholder = "Search anime...",
  onSearch,
  showSuggestions = true,
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const suggestions = showSuggestions && query.length > 1
    ? mockAnime.filter((a) =>
        a.title.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : []

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch?.(query)
              setOpen(false)
            }
          }}
          onFocus={() => setOpen(true)}
          className="h-11 rounded-xl bg-secondary pl-10 pr-10 text-foreground placeholder:text-muted-foreground border-border focus-visible:border-primary focus-visible:ring-primary/20"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setOpen(false)
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && suggestions.length > 0 && (
        <div className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-border bg-popover shadow-xl">
          {suggestions.map((anime) => (
            <Link
              key={anime.id}
              href={`/anime/${anime.id}`}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-secondary"
              onClick={() => setOpen(false)}
            >
              <Image
                src={anime.image}
                alt={anime.title}
                width={32}
                height={44}
                className="rounded object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">{anime.title}</span>
                <span className="text-xs text-muted-foreground">
                  {anime.year} &middot; {anime.format}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
