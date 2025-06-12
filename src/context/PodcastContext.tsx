"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Episode = {
  title: string;
  pubDate: string;
};

type PodcastFeed = {
  title: string;
  description: string;
  episodes: Episode[];
  url: string; // include original feed URL for later refetching
};

type PodcastContextType = {
  podcasts: PodcastFeed[];
  addPodcast: (podcast: PodcastFeed) => void;
};

const PodcastContext = createContext<PodcastContextType | undefined>(undefined);

export function PodcastProvider({ children }: { children: ReactNode }) {
  const [podcasts, setPodcasts] = useState<PodcastFeed[]>([]);

  const addPodcast = (podcast: PodcastFeed) => {
    // prevent duplicates
    if (!podcasts.find((p) => p.url === podcast.url)) {
      setPodcasts([...podcasts, podcast]);
    }
  };

  return (
    <PodcastContext.Provider value={{ podcasts, addPodcast }}>
      {children}
    </PodcastContext.Provider>
  );
}

export function usePodcastContext() {
  const context = useContext(PodcastContext);
  if (!context) throw new Error("usePodcastContext must be used within PodcastProvider");
  return context;
}
