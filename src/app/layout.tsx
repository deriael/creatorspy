import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PodcastProvider } from "@/context/PodcastContext";
import Header from "@/components/Header"; // <-- Add this line

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CreatorSpy",
  description: "Benchmark your content and beat the algorithm.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <PodcastProvider>
          <Header /> {/* Add the header above content */}
          <div className="min-h-screen">{children}</div>
        </PodcastProvider>
      </body>
    </html>
  );
}
