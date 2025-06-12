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
    avatar:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgZmlsbD0nI2NjYycvPjx0ZXh0IHg9JzUwJScgeT0nNTAlJyBkb21pbmFudC1iYXNlbGluZT0nbWlkZGxlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LXNpemU9JzM2JyBmaWxsPScjMDAwJz5DRjwvdGV4dD48L3N2Zz4=",
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
    avatar:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgZmlsbD0nI2NjYycvPjx0ZXh0IHg9JzUwJScgeT0nNTAlJyBkb21pbmFudC1iYXNlbGluZT0nbWlkZGxlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LXNpemU9JzM2JyBmaWxsPScjMDAwJz5EVzwvdGV4dD48L3N2Zz4=",
    category: "Technology",
    platform: "Podcast",
    followers: 15300,
    consistencyScore: 91,
    engagementRate: 0.67,
    avgEpisodeLength: 38,
    lastActive: "2025-06-09T10:10:00Z",
    tip: "Include more code demos in your show notes to boost retention.",
  },
  {
    id: "3",
    name: "VisualThinkers",
    avatar:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgZmlsbD0nI2NjYycvPjx0ZXh0IHg9JzUwJScgeT0nNTAlJyBkb21pbmFudC1iYXNlbGluZT0nbWlkZGxlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LXNpemU9JzM2JyBmaWxsPScjMDAwJz5WVDwvdGV4dD48L3N2Zz4=",
    category: "Design",
    platform: "YouTube",
    followers: 27600,
    consistencyScore: 78,
    engagementRate: 0.81,
    avgEpisodeLength: 12,
    lastActive: "2025-06-07T17:45:00Z",
    tip: "Custom thumbnails can help your videos stand out to viewers.",
  },
  {
    id: "4",
    name: "MindfulMinutes",
    avatar:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgZmlsbD0nI2NjYycvPjx0ZXh0IHg9JzUwJScgeT0nNTAlJyBkb21pbmFudC1iYXNlbGluZT0nbWlkZGxlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LXNpemU9JzM2JyBmaWxsPScjMDAwJz5NTTwvdGV4dD48L3N2Zz4=",
    category: "Health",
    platform: "Podcast",
    followers: 12500,
    consistencyScore: 86,
    engagementRate: 0.63,
    avgEpisodeLength: 30,
    lastActive: "2025-06-06T09:20:00Z",
    tip: "Experiment with guest interviews to boost interest.",
  },
  {
    id: "5",
    name: "CodeCraft",
    avatar:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgZmlsbD0nI2NjYycvPjx0ZXh0IHg9JzUwJScgeT0nNTAlJyBkb21pbmFudC1iYXNlbGluZT0nbWlkZGxlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LXNpemU9JzM2JyBmaWxsPScjMDAwJz5DQzwvdGV4dD48L3N2Zz4=",
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
    avatar:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgZmlsbD0nI2NjYycvPjx0ZXh0IHg9JzUwJScgeT0nNTAlJyBkb21pbmFudC1iYXNlbGluZT0nbWlkZGxlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LXNpemU9JzM2JyBmaWxsPScjMDAwJz5TUzwvdGV4dD48L3N2Zz4=",
    category: "Music",
    platform: "Podcast",
    followers: 9300,
    consistencyScore: 72,
    engagementRate: 0.82,
    avgEpisodeLength: 60,
    lastActive: "2025-06-05T19:30:00Z",
    tip: "Break longer episodes into themed segments for replay value.",
  },
  {
    id: "7",
    name: "GrowthGurus",
    avatar:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgZmlsbD0nI2NjYycvPjx0ZXh0IHg9JzUwJScgeT0nNTAlJyBkb21pbmFudC1iYXNlbGluZT0nbWlkZGxlJyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LXNpemU9JzM2JyBmaWxsPScjMDAwJz5HRzwvdGV4dD48L3N2Zz4=",
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
