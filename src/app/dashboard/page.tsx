"use client";

import { fakeCreators } from "@/lib/fakeData";
import CreatorCard from "@/components/CreatorCard";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(fakeCreators[0]?.id || "");

  const handleCompare = () => {
    if (selectedId) {
      router.push(`/compare/${selectedId}`);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Compare Dropdown */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2"
        >
          {fakeCreators.map((creator) => (
            <option key={creator.id} value={creator.id}>
              {creator.name} – {creator.platform}
            </option>
          ))}
        </select>
        <button
          onClick={handleCompare}
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Compare
        </button>
      </div>

      {/* Creator Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fakeCreators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </main>
  );
}
