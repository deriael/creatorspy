"use client";

import { usePodcastContext } from "@/context/PodcastContext";
import Link from "next/link";
import PodcastCard from "@/components/PodcastCard";

export default function MyPodcastsPage() {
  const { podcasts } = usePodcastContext();

  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">🎧 My Podcasts</h1>

      {podcasts.length === 0 ? (
        <p className="text-gray-600">
          You haven&apos;t added any podcasts yet.{" "}
          <Link href="/add" className="text-blue-600 underline">
            Add one now
          </Link>
          .
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {podcasts.map((feed, index) => (
            <PodcastCard key={index} feed={feed} />
          ))}
        </div>
      )}
    </main>
  );
}
