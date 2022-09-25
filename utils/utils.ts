export const CHAR_COUNT = 826

export const getRandomEpisodeId = () => {
  return Math.floor(Math.random() * (CHAR_COUNT)) + 1
}