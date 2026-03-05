import type { Anime, UserProfile, AnimeListItem } from "./types"

export const GENRES = [
  "Action", "Adventure", "Comedy", "Drama", "Fantasy",
  "Horror", "Mystery", "Romance", "Sci-Fi", "Slice of Life",
  "Sports", "Supernatural", "Thriller", "Mecha", "Music",
  "Psychological", "Historical",
]

export const mockAnime: Anime[] = [
  {
    id: 1,
    title: "Fullmetal Alchemist: Brotherhood",
    titleJapanese: "Hagane no Renkinjutsushi",
    image: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
    banner: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
    year: 2009,
    score: 9.1,
    rank: 1,
    episodes: 64,
    duration: "24 min",
    season: "Spring",
    studios: ["Bones"],
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    synopsis: "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Edward loses his left leg and Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor.",
    format: "TV",
    status: "Finished",
    contentWarnings: ["Violence", "Death"],
  },
  {
    id: 2,
    title: "Steins;Gate",
    titleJapanese: "Shutainzu Geto",
    image: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
    year: 2011,
    score: 9.07,
    rank: 2,
    episodes: 24,
    duration: "24 min",
    season: "Spring",
    studios: ["White Fox"],
    genres: ["Drama", "Sci-Fi", "Thriller", "Psychological"],
    synopsis: "Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and the otaku hacker Itaru Hashida, Rintarou founds the Future Gadget Laboratory in a small apartment.",
    format: "TV",
    status: "Finished",
  },
  {
    id: 3,
    title: "Attack on Titan",
    titleJapanese: "Shingeki no Kyojin",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    year: 2013,
    score: 8.53,
    rank: 6,
    episodes: 25,
    duration: "24 min",
    season: "Spring",
    studios: ["Wit Studio"],
    genres: ["Action", "Drama", "Fantasy", "Mystery"],
    synopsis: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls.",
    format: "TV",
    status: "Finished",
    contentWarnings: ["Violence", "Gore"],
  },
  {
    id: 4,
    title: "Your Name",
    titleJapanese: "Kimi no Na wa.",
    image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
    year: 2016,
    score: 8.85,
    rank: 3,
    episodes: 1,
    duration: "1 hr 46 min",
    season: "Summer",
    studios: ["CoMix Wave Films"],
    genres: ["Drama", "Romance", "Supernatural"],
    synopsis: "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo. Meanwhile, Taki Tachibana, a high school boy in Tokyo, dreams of a countryside life.",
    format: "Movie",
    status: "Finished",
  },
  {
    id: 5,
    title: "Death Note",
    titleJapanese: "Desu Noto",
    image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    year: 2006,
    score: 8.62,
    rank: 5,
    episodes: 37,
    duration: "23 min",
    season: "Fall",
    studios: ["Madhouse"],
    genres: ["Thriller", "Mystery", "Psychological", "Supernatural"],
    synopsis: "A shinigami drops a notebook into the human world. Light Yagami, a genius high school student, discovers it and vows to eliminate all criminals with it.",
    format: "TV",
    status: "Finished",
  },
  {
    id: 6,
    title: "Spirited Away",
    titleJapanese: "Sen to Chihiro no Kamikakushi",
    image: "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
    year: 2001,
    score: 8.78,
    rank: 4,
    episodes: 1,
    duration: "2 hr 5 min",
    season: "Summer",
    studios: ["Studio Ghibli"],
    genres: ["Adventure", "Drama", "Fantasy", "Supernatural"],
    synopsis: "Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new home.",
    format: "Movie",
    status: "Finished",
  },
  {
    id: 7,
    title: "Demon Slayer",
    titleJapanese: "Kimetsu no Yaiba",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    year: 2019,
    score: 8.51,
    rank: 7,
    episodes: 26,
    duration: "23 min",
    season: "Spring",
    studios: ["ufotable"],
    genres: ["Action", "Fantasy", "Adventure", "Supernatural"],
    synopsis: "Ever since the death of his father, Tanjirou has taken it upon himself to support his family. One day, Tanjirou decides to go down to the local village to sell charcoal. On his way back, darkness falls and he is forced to take shelter.",
    format: "TV",
    status: "Finished",
  },
  {
    id: 8,
    title: "Jujutsu Kaisen",
    titleJapanese: "Jujutsu Kaisen",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    year: 2020,
    score: 8.67,
    rank: 8,
    episodes: 24,
    duration: "23 min",
    season: "Fall",
    studios: ["MAPPA"],
    genres: ["Action", "Fantasy", "Supernatural"],
    synopsis: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital.",
    format: "TV",
    status: "Finished",
  },
  {
    id: 9,
    title: "Violet Evergarden",
    titleJapanese: "Vaioretto Evagaden",
    image: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg",
    year: 2018,
    score: 8.66,
    rank: 9,
    episodes: 13,
    duration: "24 min",
    season: "Winter",
    studios: ["Kyoto Animation"],
    genres: ["Drama", "Fantasy", "Slice of Life"],
    synopsis: "The Great War finally came to an end after four long years of conflict; fractured in two, the continent of Telesis slowly began to flourish once again.",
    format: "TV",
    status: "Finished",
  },
  {
    id: 10,
    title: "Mob Psycho 100",
    titleJapanese: "Mobu Saiko Hyaku",
    image: "https://cdn.myanimelist.net/images/anime/8/80356.jpg",
    year: 2016,
    score: 8.48,
    rank: 10,
    episodes: 12,
    duration: "24 min",
    season: "Summer",
    studios: ["Bones"],
    genres: ["Action", "Comedy", "Supernatural", "Slice of Life"],
    synopsis: "Eighth-grader Shigeo Mob Kageyama has tapped into his inner wellspring of psychic prowess at a young age.",
    format: "TV",
    status: "Finished",
  },
  {
    id: 11,
    title: "Cowboy Bebop",
    titleJapanese: "Kauboi Bibappu",
    image: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
    year: 1998,
    score: 8.75,
    rank: 11,
    episodes: 26,
    duration: "24 min",
    season: "Spring",
    studios: ["Sunrise"],
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    synopsis: "Crime is timeless. By the year 2071, humanity has colonized several planets and moons of the solar system. In the sprawling cityscapes and ports of these celestial bodies, the Bebop crew carry on the tradition of bounty hunting.",
    format: "TV",
    status: "Finished",
  },
  {
    id: 12,
    title: "Neon Genesis Evangelion",
    titleJapanese: "Shinseiki Evangerion",
    image: "https://cdn.myanimelist.net/images/anime/1314/108941.jpg",
    year: 1995,
    score: 8.35,
    rank: 12,
    episodes: 26,
    duration: "24 min",
    season: "Fall",
    studios: ["Gainax"],
    genres: ["Action", "Drama", "Mecha", "Sci-Fi", "Psychological"],
    synopsis: "In the year 2015, the world stands on the brink of destruction. Humanity's last hope lies in NERV, a special agency under the UN, and their Evangelions, giant machines capable of defeating the Angels.",
    format: "TV",
    status: "Finished",
    contentWarnings: ["Violence", "Psychological themes"],
  },
]

export const recommendationReasons: Record<number, string> = {
  1: "Because you liked action adventures",
  2: "Top rated sci-fi thriller",
  3: "Similar vibe to your favorites",
  4: "Highly rated romance film",
  5: "Because you enjoyed psychological thrillers",
  6: "Classic must-watch",
  7: "Trending in your genres",
  8: "Popular this season",
  9: "Emotional storytelling you love",
  10: "Comedy fans also enjoyed",
  11: "A timeless classic",
  12: "Because you like mecha",
}

export const mockUser: UserProfile = {
  username: "AnimeWatcher42",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=anime",
  bio: "Just a casual anime fan exploring new worlds one episode at a time.",
  favoriteGenres: ["Action", "Sci-Fi", "Drama"],
  stats: {
    completed: 142,
    watching: 5,
    planToWatch: 38,
    totalRatings: 89,
  },
}

export const mockWatchlist: AnimeListItem[] = [
  { anime: mockAnime[2], addedAt: "2024-01-15", status: "watchlist" },
  { anime: mockAnime[6], addedAt: "2024-02-10", status: "watchlist" },
  { anime: mockAnime[8], addedAt: "2024-03-01", status: "watchlist" },
]

export const mockFavorites: AnimeListItem[] = [
  { anime: mockAnime[0], addedAt: "2023-06-20", status: "favorites", userRating: 10 },
  { anime: mockAnime[1], addedAt: "2023-08-15", status: "favorites", userRating: 9 },
  { anime: mockAnime[4], addedAt: "2023-11-01", status: "favorites", userRating: 9 },
]

export const mockCompleted: AnimeListItem[] = [
  { anime: mockAnime[3], addedAt: "2023-05-10", status: "completed", userRating: 8 },
  { anime: mockAnime[5], addedAt: "2023-04-22", status: "completed", userRating: 9 },
  { anime: mockAnime[9], addedAt: "2024-01-30", status: "completed", userRating: 8 },
]

export async function fetchAnimeById(id: number): Promise<Anime | undefined> {
  return mockAnime.find((a) => a.id === id)
}

export async function fetchTrending(): Promise<Anime[]> {
  return mockAnime.slice(0, 6)
}

export async function fetchRecommended(): Promise<Anime[]> {
  return mockAnime.slice(2, 8)
}

export async function fetchTopRated(): Promise<Anime[]> {
  return [mockAnime[0], mockAnime[1], mockAnime[3], mockAnime[5], mockAnime[10], mockAnime[11]]
}

export async function searchAnime(query: string): Promise<Anime[]> {
  const q = query.toLowerCase()
  return mockAnime.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.genres.some((g) => g.toLowerCase().includes(q))
  )
}
