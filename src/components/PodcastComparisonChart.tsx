// src/components/PodcastComparisonChart.tsx
"use client";

import { FeedInsights } from "@/lib/analyzeFeed";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Props = {
  name1: string;
  name2: string;
  insights1: FeedInsights;
  insights2: FeedInsights;
};

export default function PodcastComparisonChart({
  name1,
  name2,
  insights1,
  insights2,
}: Props) {
  const data = [
    {
      metric: "Episodes",
      [name1]: insights1.episodeCount,
      [name2]: insights2.episodeCount,
    },
    {
      metric: "Avg Days Between",
      [name1]: insights1.averageDaysBetween,
      [name2]: insights2.averageDaysBetween,
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">📉 Visual Comparison</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="metric" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={name1} fill="#4F46E5" />
          <Bar dataKey={name2} fill="#DC2626" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
