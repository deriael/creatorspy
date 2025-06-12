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
  },
  {
    id: "4",
    name: "MindfulMinutes",
    avatar: "/images/mindfulminutes.jpg",
    category: "Health",
    platform: "Podcast",
    followers: 12500,
    consistencyScore: 83,
    engagementRate: 0.6,
    avgEpisodeLength: 30,
    lastActive: "2025-06-06T09:20:00Z",
    tip: "Experiment with guest interviews to boost interest.",
  },
  {
    id: "5",
    name: "CodeCraft",
    avatar: "/images/codecraft.jpg",
    category: "Technology",
    platform: "YouTube",
    followers: 20100,
    consistencyScore: 88,
    engagementRate: 0.75,
    avgEpisodeLength: 20,
    lastActive: "2025-06-08T12:00:00Z",
    tip: "Share behind-the-scenes clips to drive engagement.",
  },
  {
    id: "6",
    name: "SoundSphere",
    avatar: "/images/soundsphere.jpg",
    category: "Music",
    platform: "Podcast",
    followers: 9300,
    consistencyScore: 70,
    engagementRate: 0.55,
    avgEpisodeLength: 60,
    lastActive: "2025-06-05T19:30:00Z",
    tip: "Break longer episodes into themed segments for replay value.",
  },
  {
    id: "7",
    name: "GrowthGurus",
    avatar: "/images/growthgurus.jpg",
    category: "Marketing",
    platform: "Podcast",
    followers: 15800,
    consistencyScore: 92,
    engagementRate: 0.68,
    avgEpisodeLength: 42,
    lastActive: "2025-06-07T15:10:00Z",
    tip: "Shorter intro music can help retain listeners.",
  }
];
