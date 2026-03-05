export interface Anime {
  id: number
  title: string
  titleJapanese: string
  image: string
  banner?: string
  year: number
  score: number
  rank: number
  episodes: number
  duration: string
  season: string
  studios: string[]
  genres: string[]
  synopsis: string
  format: "TV" | "Movie" | "OVA" | "ONA" | "Special"
  status: "Airing" | "Finished" | "Upcoming"
  contentWarnings?: string[]
}

export interface UserProfile {
  username: string
  avatar: string
  bio: string
  favoriteGenres: string[]
  stats: {
    completed: number
    watching: number
    planToWatch: number
    totalRatings: number
  }
}

export type ListType = "watchlist" | "favorites" | "completed"

export interface AnimeListItem {
  anime: Anime
  addedAt: string
  status: ListType
  userRating?: number
}
