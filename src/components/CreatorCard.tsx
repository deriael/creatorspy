import { Creator } from "@/lib/fakeData";
import Image from "next/image";
import Link from "next/link";

type Props = {
  creator: Creator;
};

export default function CreatorCard({ creator }: Props) {
  const isTopPerformer = creator.engagementRate >= 0.8;
  const isHighlyConsistent = creator.consistencyScore >= 85;

  return (
    <Link href={`/compare/${creator.id}`} className="block hover:scale-[1.01] transition">
      <div className="rounded-xl border p-4 bg-white shadow-md hover:shadow-lg transition">

        {/* Performance Badges */}
        {(isTopPerformer || isHighlyConsistent) && (
          <div className="mb-2 flex gap-2">
            {isTopPerformer && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                🏆 Top 10% Engagement
              </span>
            )}
            {isHighlyConsistent && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                📅 High Consistency
              </span>
            )}
          </div>
        )}

        {/* Avatar + Name */}
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16">
            <Image
              src={creator.avatar}
              alt={creator.name}
              fill
              sizes="64px"
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{creator.name}</h2>
            <p className="text-sm text-gray-500">
              {creator.category} · {creator.platform}
            </p>
          </div>
        </div>

        {/* Stats Block */}
        <div className="mt-4 grid grid-cols-3 text-center text-sm text-gray-700">
          <div>
            <span className="block font-bold">
              {creator.followers.toLocaleString()}
            </span>
            <span className="text-gray-400">Followers</span>
          </div>
          <div>
            <span className="block font-bold">{creator.consistencyScore}%</span>
            <span className="text-gray-400">Consistency</span>
          </div>
          <div>
            <span className="block font-bold">
              {Math.round(creator.engagementRate * 100)}%
            </span>
            <span className="text-gray-400">Engagement</span>
          </div>
        </div>

        {/* Tip/Advice Block */}
        {creator.tip && (
          <div className="mt-4 p-3 bg-gray-50 text-sm text-gray-600 border rounded-md">
            💡 {creator.tip}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-4 flex justify-between text-sm">
          <button
            onClick={(e) => e.preventDefault()}
            className="text-blue-600 hover:underline"
          >
            Export Report
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="text-green-600 hover:underline"
          >
            Share Profile
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="text-gray-500 hover:underline"
          >
            View Full Stats
          </button>
        </div>
      </div>
    </Link>
  );
}
