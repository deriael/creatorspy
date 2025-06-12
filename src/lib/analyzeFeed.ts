type Episode = {
  title: string;
  pubDate: string;
};

export type FeedInsights = {
  episodeCount: number;
  averageDaysBetween: number;
  frequency: string;
  tip: string;
};

export function analyzeEpisodes(episodes: Episode[]): FeedInsights {
  if (episodes.length < 2) {
    return {
      episodeCount: episodes.length,
      averageDaysBetween: 0,
      frequency: "Not enough data",
      tip: "Try publishing more frequently to establish a rhythm.",
    };
  }

  const dates = episodes
    .map((ep) => new Date(ep.pubDate).getTime())
    .filter((t) => !isNaN(t))
    .sort((a, b) => b - a); // Newest first

  const gaps = [];
  for (let i = 0; i < dates.length - 1; i++) {
    const diff = Math.abs(dates[i] - dates[i + 1]);
    gaps.push(diff / (1000 * 60 * 60 * 24)); // days
  }

  const avgDays = gaps.reduce((a, b) => a + b, 0) / gaps.length;

  let frequency = "";
  let tip = "";

  if (avgDays < 2) {
    frequency = "Daily";
    tip = "Great job staying consistent! Keep it up.";
  } else if (avgDays < 8) {
    frequency = "Weekly";
    tip = "Solid weekly schedule! Promote your drop days in advance.";
  } else if (avgDays < 20) {
    frequency = "Biweekly";
    tip = "You’re somewhat regular — consider tightening your schedule.";
  } else {
    frequency = "Irregular";
    tip = "Consistency is key. Try sticking to a publishing calendar.";
  }

  return {
    episodeCount: episodes.length,
    averageDaysBetween: Math.round(avgDays),
    frequency,
    tip,
  };
}
