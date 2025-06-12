import { NextRequest, NextResponse } from "next/server";
import Parser from "rss-parser";

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  try {
    const parser = new Parser();
    const feed = await parser.parseURL(url);

    const result = {
      title: feed.title || "Untitled Podcast",
      description: feed.description || "No description provided.",
      episodes: (feed.items || []).slice(0, 5).map((item) => ({
        title: item.title || "Untitled Episode",
        pubDate: item.pubDate || "Unknown Date",
      })),
    };

    return NextResponse.json(result);
  } catch (err) {
    console.error("RSS Error:", err);
    return NextResponse.json({ error: "Failed to fetch RSS" }, { status: 500 });
  }
}
