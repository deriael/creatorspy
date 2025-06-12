"use client";

import { useState } from "react";
import { analyzeEpisodes, FeedInsights } from "@/lib/analyzeFeed";
import { usePodcastContext } from "@/context/PodcastContext";
import type { PodcastFeed } from "@/lib/types";

export default function AddPodcastPage() {
  const [rssUrl, setRssUrl] = useState("");
  const [parsedFeed, setParsedFeed] = useState<PodcastFeed | null>(null);
  const [insights, setInsights] = useState<FeedInsights | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { addPodcast } = usePodcastContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setParsedFeed(null);
    setInsights(null);
    setLoading(true);

    try {
      const res = await fetch("/api/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: rssUrl }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unknown error");
      }

      const fullFeed: PodcastFeed = {
        ...data,
        url: rssUrl,
      };

      setParsedFeed(fullFeed);
      setInsights(analyzeEpisodes(fullFeed.episodes));
      addPodcast(fullFeed);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">🎙️ Add Your Podcast</h1>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <label className="block">
          <span className="text-gray-700 font-medium">RSS Feed URL</span>
          <input
            type="url"
            required
            value={rssUrl}
            onChange={(e) => setRssUrl(e.target.value)}
            placeholder="https://feeds.simplecast.com/54nAGcIl"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </label>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <p className="mt-6 text-red-600">{error}</p>}

      {parsedFeed && (
        <div className="mt-10 bg-gray-50 p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-2">{parsedFeed.title}</h2>
          <p className="text-gray-600 mb-4">{parsedFeed.description}</p>

          <h3 className="font-semibold mb-2">Recent Episodes:</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            {parsedFeed.episodes.map((ep, index) => (
              <li key={index}>
                {ep.title} <span className="text-gray-400">({ep.pubDate})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {insights && (
        <div className="mt-6 bg-blue-50 border border-blue-300 text-blue-800 p-4 rounded-md">
          <h3 className="font-semibold text-lg mb-1">🧠 Podcast Insights</h3>
          <p><strong>Total Episodes:</strong> {insights.episodeCount}</p>
          <p><strong>Avg. Days Between Episodes:</strong> {insights.averageDaysBetween}</p>
          <p><strong>Publishing Frequency:</strong> {insights.frequency}</p>
          <p className="mt-2"><strong>💡 Tip:</strong> {insights.tip}</p>
        </div>
      )}
    </main>
  );
}
