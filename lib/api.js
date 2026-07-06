import {
  aboutPillars,
  achievements,
  clubFacts,
  clubQuote,
  clubTimeline,
  clubValues,
  matches,
  mediaCategories,
  mediaItems,
  missionVision,
  news,
  newsCategories,
  players,
  socialLinks,
  squadFilters,
  tournaments,
} from "../data/siteData";

const PUBLIC_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://topteam21.pythonanywhere.com";
const SERVER_API_BASE_URL =
  process.env.TOPTEAM_API_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://topteam21.pythonanywhere.com";

function getApiBaseUrl() {
  return typeof window === "undefined" ? SERVER_API_BASE_URL : PUBLIC_API_BASE_URL;
}

async function fetchJson(path, options = {}) {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export async function getClubData() {
  try {
    return await fetchJson("/api/club", { next: { revalidate: 60 } });
  } catch {
    return {
      hero: {
        eyebrow: "О клубе",
        title: "Больше чем футбольный клуб",
        description:
          "Top Team KG — это команда, медиа, энергия, победы и культура нового футбола Кыргызстана. Мы объединяем игру на поле и контент за его пределами в один сильный бренд.",
      },
      club_facts: clubFacts,
      about_pillars: aboutPillars,
      club_quote: clubQuote,
      club_timeline: clubTimeline,
      achievements,
      mission_vision: missionVision,
      club_values: clubValues,
      social_links: socialLinks,
    };
  }
}

export async function getPlayersData() {
  try {
    return await fetchJson("/api/players");
  } catch {
    return { results: players, filters: squadFilters };
  }
}

export async function getPlayerDetail(slug) {
  try {
    return await fetchJson(`/api/players/${slug}`);
  } catch {
    const player = players.find((item) => item.id === slug);
    if (!player) return null;
    return {
      ...player,
      slug: player.id,
      related_players: players.filter((item) => item.id !== slug).slice(0, 4),
    };
  }
}

export async function getMatchesData() {
  try {
    return await fetchJson("/api/matches");
  } catch {
    return {
      results: matches,
      tournaments,
      competitions: ["Все турниры", ...new Set(matches.map((match) => match.competition))],
    };
  }
}

export async function getNewsData() {
  try {
    return await fetchJson("/api/news");
  } catch {
    const featured = news.find((article) => article.featured) || news[0] || null;
    return {
      results: news,
      categories: newsCategories,
      featured,
    };
  }
}

export async function getArticleDetail(slug) {
  try {
    return await fetchJson(`/api/news/${slug}`);
  } catch {
    const article = news.find((item) => item.id === slug);
    if (!article) return null;
    return {
      ...article,
      slug: article.id,
      related_news: news.filter((item) => item.id !== slug).slice(0, 3),
    };
  }
}

export async function getMediaData() {
  try {
    return await fetchJson("/api/media");
  } catch {
    return {
      results: mediaItems,
      categories: mediaCategories,
      social_links: socialLinks,
    };
  }
}
