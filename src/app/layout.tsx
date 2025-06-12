import "./globals.css";
import type { Metadata } from "next";
// Using system fonts to avoid external download issues
import { PodcastProvider } from "@/context/PodcastContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "CreatorSpy",
  description: "Benchmark your content and beat the algorithm.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <PodcastProvider>
          <Header />
          <div className="min-h-screen">{children}</div>
        </PodcastProvider>
      </body>
    </html>
  );
}
