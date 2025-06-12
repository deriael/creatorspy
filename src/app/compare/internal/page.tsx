"use client";

import { useState } from "react";
import { usePodcastContext } from "@/context/PodcastContext";
import { analyzeEpisodes } from "@/lib/analyzeFeed";
import PodcastComparisonChart from "@/components/PodcastComparisonChart";
import ComparisonBadge from "@/components/ComparisonBadge";
import Tooltip from "@/components/Tooltip";

export default function InternalComparePage() {
  const { podcasts } = usePodcastContext();
  const [firstId, setFirstId] = useState<number | null>(null);
  const [secondId, setSecondId] = useState<number | null>(null);

  const first = firstId !== null ? podcasts[firstId] : null;
  const second = secondId !== null ? podcasts[secondId] : null;

  const insights1 = first ? analyzeEpisodes(first.episodes) : null;
  const insights2 = second ? analyzeEpisodes(second.episodes) : null;

  const resetComparison = () => {
    setFirstId(null);
    setSecondId(null);
  };

  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">📊 Compare Your Podcasts</h1>

      {podcasts.length < 2 ? (
        <p className="text-gray-600">
          You need at least two saved podcasts to use this feature.
        </p>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <select
              className="border p-2 rounded"
              onChange={(e) => setFirstId(Number(e.target.value))}
              value={firstId !== null ? firstId : ""}
            >
              <option disabled value="">Select first podcast</option>
              {podcasts.map((pod, index) => (
                <option key={index} value={index}>
                  {pod.title}
                </option>
              ))}
            </select>

            <select
              className="border p-2 rounded"
              onChange={(e) => setSecondId(Number(e.target.value))}
              value={secondId !== null ? secondId : ""}
            >
              <option disabled value="">Select second podcast</option>
              {podcasts.map((pod, index) => (
                <option key={index} value={index}>
                  {pod.title}
                </option>
              ))}
            </select>

            {(firstId !== null || secondId !== null) && (
              <button
                onClick={resetComparison}
                className="text-sm text-red-600 underline ml-2"
              >
                Reset
              </button>
            )}
          </div>

          {first && second && insights1 && insights2 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {[{ feed: first, insights: insights1 }, { feed: second, insights: insights2 }].map((set, idx) => {
                  const other = idx === 0 ? insights2 : insights1;
                  const isBetter = (key: keyof typeof set.insights, reverse = false) => {
                    const a = set.insights[key];
                    const b = other[key];
                    if (typeof a === "number" && typeof b === "number") {
                      return reverse ? a < b : a > b;
                    }
                    return false;
                  };

                  return (
                    <div key={idx} className="rounded-lg border p-4 bg-white shadow">
                      <h2 className="text-xl font-bold mb-2">{set.feed.title}</h2>
                      <p className="text-sm text-gray-500 mb-4">{set.feed.description}</p>

                      <div className="grid gap-2 text-sm">
                        <Tooltip text="Total number of episodes published">
                          <p className={isBetter("episodeCount") ? "font-semibold text-green-600" : ""}>
                            <strong>Episodes:</strong> {set.insights.episodeCount}
                            <ComparisonBadge better={isBetter("episodeCount")} />
                          </p>
                        </Tooltip>
                        <Tooltip text="Average days between episodes (lower is better)">
                          <p className={isBetter("averageDaysBetween", true) ? "font-semibold text-green-600" : ""}>
                            <strong>Avg Days Between:</strong> {set.insights.averageDaysBetween}
                            <ComparisonBadge better={isBetter("averageDaysBetween", true)} />
                          </p>
                        </Tooltip>
                        <Tooltip text="Publishing frequency detected from schedule">
                          <p className={isBetter("frequency") ? "font-semibold text-green-600" : ""}>
                            <strong>Frequency:</strong> {set.insights.frequency}
                            <ComparisonBadge better={isBetter("frequency")} />
                          </p>
                        </Tooltip>
                        <Tooltip text="An actionable insight based on episode pattern">
                          <p className="text-blue-800 mt-2">
                            💡 <strong>Tip:</strong> {set.insights.tip}
                          </p>
                        </Tooltip>
                      </div>
                    </div>
                  );
                })}
              </div>

              <PodcastComparisonChart
                name1={first.title}
                name2={second.title}
                insights1={insights1}
                insights2={insights2}
              />
            </>
          )}
        </div>
      )}
    </main>
  );
}
