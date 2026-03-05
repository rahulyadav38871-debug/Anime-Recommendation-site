"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Check, ArrowRight, ArrowLeft, Sparkles } from "lucide-react"
import { GENRES, mockAnime } from "@/lib/mock-data"

const preferences = [
  "More Action",
  "More Romance",
  "Short Series (< 13 ep)",
  "Long Epics",
  "Movies Only",
  "Dark & Psychological",
  "Feel-good & Slice of Life",
  "Classic Must-Watch",
]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedAnime, setSelectedAnime] = useState<number[]>([])
  const [selectedPrefs, setSelectedPrefs] = useState<string[]>([])
  const [animeSearch, setAnimeSearch] = useState("")

  const totalSteps = 3
  const progress = ((step + 1) / totalSteps) * 100

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    )
  }

  const toggleAnime = (id: number) => {
    setSelectedAnime((prev) =>
      prev.includes(id)
        ? prev.filter((a) => a !== id)
        : prev.length < 5
          ? [...prev, id]
          : prev
    )
  }

  const togglePref = (pref: string) => {
    setSelectedPrefs((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    )
  }

  const filteredAnime = animeSearch
    ? mockAnime.filter((a) =>
        a.title.toLowerCase().includes(animeSearch.toLowerCase())
      )
    : mockAnime

  const canContinue =
    (step === 0 && selectedGenres.length >= 1) ||
    (step === 1 && selectedAnime.length >= 1) ||
    (step === 2 && selectedPrefs.length >= 1)

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-2xl flex-col px-4 py-8 lg:px-8">
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
            {step === 0 && "Pick your favorite genres"}
            {step === 1 && "Select anime you like"}
            {step === 2 && "What are you looking for?"}
          </h1>
          <span className="text-sm text-muted-foreground">
            Step {step + 1} of {totalSteps}
          </span>
        </div>
        <Progress value={progress} className="h-1.5" />
        <p className="text-sm text-muted-foreground">
          {step === 0 && "Choose genres you enjoy. This helps us personalize your recommendations."}
          {step === 1 && `Pick up to 5 anime you've watched and liked. (${selectedAnime.length}/5 selected)`}
          {step === 2 && "Tell us what kind of content you're interested in."}
        </p>
      </div>

      <div className="flex-1">
        {step === 0 && (
          <div className="flex flex-wrap gap-2">
            {GENRES.map((genre) => (
              <Badge
                key={genre}
                variant={selectedGenres.includes(genre) ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                  selectedGenres.includes(genre)
                    ? "bg-primary text-primary-foreground hover:bg-primary/80 shadow-md shadow-primary/20"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                onClick={() => toggleGenre(genre)}
              >
                {selectedGenres.includes(genre) && <Check className="mr-1.5 h-3 w-3" />}
                {genre}
              </Badge>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col gap-4">
            <Input
              placeholder="Search anime to add..."
              value={animeSearch}
              onChange={(e) => setAnimeSearch(e.target.value)}
              className="bg-secondary text-foreground border-border"
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {filteredAnime.map((anime) => {
                const isSelected = selectedAnime.includes(anime.id)
                return (
                  <button
                    key={anime.id}
                    onClick={() => toggleAnime(anime.id)}
                    className={`group relative flex flex-col overflow-hidden rounded-xl border transition-all ${
                      isSelected
                        ? "border-primary shadow-md shadow-primary/20"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={anime.image}
                        alt={anime.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center bg-primary/30">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                            <Check className="h-5 w-5 text-primary-foreground" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-2">
                      <p className="line-clamp-1 text-xs font-medium text-foreground">{anime.title}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-wrap gap-2">
            {preferences.map((pref) => (
              <Badge
                key={pref}
                variant={selectedPrefs.includes(pref) ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                  selectedPrefs.includes(pref)
                    ? "bg-primary text-primary-foreground hover:bg-primary/80 shadow-md shadow-primary/20"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                onClick={() => togglePref(pref)}
              >
                {selectedPrefs.includes(pref) && <Check className="mr-1.5 h-3 w-3" />}
                {pref}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-8">
        <Button
          variant="ghost"
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
          className="gap-2 text-muted-foreground hover:text-foreground hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        {step < totalSteps - 1 ? (
          <Button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canContinue}
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={() => router.push("/")}
            disabled={!canContinue}
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Sparkles className="h-4 w-4" />
            Finish
          </Button>
        )}
      </div>
    </div>
  )
}
