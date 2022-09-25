const EPISODE_COUNT = 826

export const getRandomEpisodeId = () => {
  return Math.floor(Math.random() * (EPISODE_COUNT)) + 1
}