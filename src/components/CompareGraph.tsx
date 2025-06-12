"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Creator } from "@/lib/fakeData";

type Props = {
  creator: Creator;
  benchmark: Creator;
};

export default function CompareGraph({ creator, benchmark }: Props) {
  const data = [
    {
      metric: "Consistency",
      [creator.name]: creator.consistencyScore,
      [benchmark.name]: benchmark.consistencyScore,
    },
    {
      metric: "Engagement",
      [creator.name]: Math.round(creator.engagementRate * 100),
      [benchmark.name]: Math.round(benchmark.engagementRate * 100),
    },
    {
      metric: "Avg Length",
      [creator.name]: creator.avgEpisodeLength,
      [benchmark.name]: benchmark.avgEpisodeLength,
    },
    {
      metric: "Followers",
      [creator.name]: creator.followers,
      [benchmark.name]: benchmark.followers,
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">📊 Performance Comparison</h2>
      <div className="w-full h-[300px] bg-white border rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={32}>
            <XAxis dataKey="metric" />
            <YAxis />
            <Tooltip />
            <Bar dataKey={creator.name} fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey={benchmark.name} fill="#EF4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
