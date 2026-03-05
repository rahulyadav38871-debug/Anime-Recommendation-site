import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/search-bar"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-8 px-4 pb-8 pt-20 text-center lg:pt-32 lg:pb-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          Personalized Recommendations
        </span>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
          Find your next
          <br />
          <span className="text-primary">anime</span>
        </h1>
        <p className="max-w-lg text-base text-muted-foreground leading-relaxed text-pretty">
          Discover shows tailored to your taste. Get smart recommendations,
          track your watchlist, and explore thousands of titles.
        </p>
      </div>

      <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <SearchBar placeholder="Search for anime..." className="flex-1" />
        <Link href="/onboarding">
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-11 w-full sm:w-auto">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
