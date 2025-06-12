import Parser from "rss-parser";

export type PodcastFeed = {
  title: string;
  description: string;
  episodes: { title: string; pubDate: string }[];
};

export async function parsePodcastRSS(url: string): Promise<PodcastFeed | null> {
  const parser = new Parser();

  try {
    const feed = await parser.parseURL(url);

    return {
      title: feed.title || "Untitled Podcast",
      description: feed.description || "No description provided.",
      episodes: (feed.items || []).map((item) => ({
        title: item.title || "Untitled Episode",
        pubDate: item.pubDate || "Unknown Date",
      })),
    };
  } catch (error) {
    console.error("RSS Parse Error:", error);
    return null;
  }
}
