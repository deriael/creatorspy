// src/lib/fakeData.ts
export type Creator = {
  id: string;
  name: string;
  avatar: string;
  category: string;
  platform: "Podcast" | "YouTube" | "Music";
  followers: number;
  consistencyScore: number; // 0–100
  engagementRate: number; // 0–1
  avgEpisodeLength: number; // in minutes
  lastActive: string; // ISO date
  tip: string;
};

export const fakeCreators: Creator[] = [
  {
    id: "1",
    name: "CreativeFuel",
    avatar: "/images/creativefuel.jpg",
    category: "Self-Improvement",
    platform: "Podcast",
    followers: 8400,
    consistencyScore: 87,
    engagementRate: 0.72,
    avgEpisodeLength: 48,
    lastActive: "2025-06-08T14:22:00Z",
    tip: "Try shorter episodes with sharper titles for better engagement.",
  },
  {
    id: "2",
    name: "DevTalk Weekly",
    avatar: "/images/devtalk.jpg",
    category: "Technology",
    platform: "Podcast",
    followers: 15300,
    consistencyScore: 91,
    engagementRate: 0.65,
    avgEpisodeLength: 38,
    lastActive: "2025-06-09T10:10:00Z",
    tip: "Try shorter episodes with sharper titles for better engagement.",
  },
  {
    id: "3",
    name: "VisualThinkers",
    avatar: "/images/visualthinkers.jpg",
    category: "Design",
    platform: "YouTube",
    followers: 27600,
    consistencyScore: 78,
    engagementRate: 0.81,
    avgEpisodeLength: 12,
    lastActive: "2025-06-07T17:45:00Z",
    tip: "Try shorter episodes with sharper titles for better engagement.",
  }
];
