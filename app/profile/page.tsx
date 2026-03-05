"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { mockUser, GENRES } from "@/lib/mock-data"
import { BookOpen, Eye, Clock, Star } from "lucide-react"

export default function ProfilePage() {
  const user = mockUser
  const [displayName, setDisplayName] = useState(user.username)
  const [bio, setBio] = useState(user.bio)
  const [selectedGenres, setSelectedGenres] = useState(user.favoriteGenres)
  const [spoilerToggle, setSpoilerToggle] = useState(false)

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    )
  }

  const stats = [
    { label: "Completed", value: user.stats.completed, icon: BookOpen },
    { label: "Watching", value: user.stats.watching, icon: Eye },
    { label: "Plan to Watch", value: user.stats.planToWatch, icon: Clock },
    { label: "Ratings", value: user.stats.totalRatings, icon: Star },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
          <Image
            src={user.avatar}
            alt={user.username}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
            {user.username}
          </h1>
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">{user.bio}</p>
          <div className="flex flex-wrap justify-center gap-1.5 sm:justify-start">
            {user.favoriteGenres.map((g) => (
              <Badge key={g} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {g}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4"
          >
            <stat.icon className="h-5 w-5 text-primary" />
            <span className="text-2xl font-bold text-foreground">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>

      <Tabs defaultValue="ratings" className="w-full">
        <TabsList className="bg-secondary mb-6">
          <TabsTrigger value="ratings" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Ratings
          </TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Activity
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-background data-[state=active]:text-foreground">
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ratings">
          <div className="flex flex-col gap-3">
            {[
              { title: "Fullmetal Alchemist: Brotherhood", rating: 10 },
              { title: "Steins;Gate", rating: 9 },
              { title: "Death Note", rating: 9 },
              { title: "Your Name", rating: 8 },
              { title: "Spirited Away", rating: 9 },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-4"
              >
                <span className="text-sm font-medium text-foreground">{item.title}</span>
                <Badge className="bg-chart-4/10 text-chart-4 border-chart-4/20">{item.rating}/10</Badge>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <div className="flex flex-col gap-3">
            {[
              { action: "Completed", title: "Mob Psycho 100", time: "2 days ago" },
              { action: "Started watching", title: "Demon Slayer", time: "1 week ago" },
              { action: "Rated 9/10", title: "Steins;Gate", time: "2 weeks ago" },
              { action: "Added to watchlist", title: "Violet Evergarden", time: "3 weeks ago" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-4"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.action}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="flex max-w-lg flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="displayName" className="text-foreground">Display Name</Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="bg-secondary text-foreground border-border"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="bio" className="text-foreground">Bio</Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="bg-secondary text-foreground border-border"
              />
            </div>

            <Separator />

            <div className="flex flex-col gap-2">
              <Label className="text-foreground">Favorite Genres</Label>
              <div className="flex flex-wrap gap-2">
                {GENRES.map((genre) => (
                  <Badge
                    key={genre}
                    variant={selectedGenres.includes(genre) ? "default" : "secondary"}
                    className={`cursor-pointer transition-colors ${
                      selectedGenres.includes(genre)
                        ? "bg-primary text-primary-foreground hover:bg-primary/80"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                    onClick={() => toggleGenre(genre)}
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <Label htmlFor="spoiler" className="text-foreground">Hide Spoilers</Label>
                <p className="text-xs text-muted-foreground">Hide spoiler content in reviews</p>
              </div>
              <Switch
                id="spoiler"
                checked={spoilerToggle}
                onCheckedChange={setSpoilerToggle}
              />
            </div>

            <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
              Save Changes
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
