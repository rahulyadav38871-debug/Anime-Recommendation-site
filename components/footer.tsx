import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold text-primary-foreground">A</span>
              </div>
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-foreground">
                AniMatch
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover your next favorite anime with personalized recommendations.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Browse</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Discover
              </Link>
              <Link href="/search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Search
              </Link>
              <Link href="/lists" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                My Lists
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Account</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/profile" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Profile
              </Link>
              <Link href="/onboarding" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Get Started
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Privacy Policy</span>
              <span className="text-sm text-muted-foreground">Terms of Service</span>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          AniMatch. Built for anime fans, by anime fans.
        </p>
      </div>
    </footer>
  )
}
