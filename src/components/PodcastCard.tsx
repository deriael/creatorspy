"use client";

import { analyzeEpisodes, FeedInsights } from "@/lib/analyzeFeed";
import type { PodcastFeed } from "@/lib/types";

type Props = {
  feed: PodcastFeed;
};

export default function PodcastCard({ feed }: Props) {
  const insights: FeedInsights = analyzeEpisodes(feed.episodes);

  return (
    <div className="rounded-lg border p-4 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-1">{feed.title}</h2>
      <p className="text-sm text-gray-500 mb-3">{feed.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <span className="block text-gray-400">Episodes</span>
          <span className="text-lg font-bold">{insights.episodeCount}</span>
        </div>
        <div>
          <span className="block text-gray-400">Avg Days Between</span>
          <span className="text-lg font-bold">
            {insights.averageDaysBetween}
          </span>
        </div>
        <div>
          <span className="block text-gray-400">Publishing Frequency</span>
          <span className="text-lg font-bold">{insights.frequency}</span>
        </div>
      </div>

      <div className="mt-4 text-sm text-blue-800 bg-blue-50 p-3 rounded-md border border-blue-200">
        💡 <strong>Tip:</strong> {insights.tip}
      </div>
    </div>
  );
}
