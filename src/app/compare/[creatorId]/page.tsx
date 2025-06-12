"use client";

import { useParams } from "next/navigation";
import { fakeCreators } from "@/lib/fakeData";
import CreatorCard from "@/components/CreatorCard";
import CompareGraph from "@/components/CompareGraph";
import InsightCard from "@/components/InsightCard";

export default function ComparePage() {
  const { creatorId } = useParams();
  const creator = fakeCreators.find((c) => c.id === creatorId);
  const benchmark = fakeCreators[0];

  if (!creator) return <p className="p-8 text-lg">Creator not found</p>;

  const insights = [
    {
      title: "Your episode length is above average",
      description: "Try keeping episodes under 45 minutes for better retention in your category.",
    },
    {
      title: "Post frequency could improve",
      description: "Top creators in your niche post weekly. You're currently at 2 per month.",
    },
    {
      title: "Titles lack keywords",
      description: "Use words like 'how to', 'mistakes', and 'secrets' to boost clickthrough.",
    },
  ];

  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">
        Comparing <span className="text-blue-600">{creator.name}</span> to{" "}
        <span className="text-red-600">{benchmark.name}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreatorCard creator={creator} />
        <CreatorCard creator={benchmark} />
      </div>

      <CompareGraph creator={creator} benchmark={benchmark} />
      <InsightCard insights={insights} />
    </main>
  );
}
