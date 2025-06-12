export type Episode = {
  title: string;
  pubDate: string;
};

export type PodcastFeed = {
  title: string;
  description: string;
  episodes: Episode[];
  url: string;
};
