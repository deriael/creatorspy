import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">👁️ CreatorSpy</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Benchmark your podcast, video, or music content against the best in your niche.
        Compare. Improve. Dominate.
      </p>
      <Link
        href="/dashboard"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Enter Dashboard
      </Link>
    </main>
  );
}
