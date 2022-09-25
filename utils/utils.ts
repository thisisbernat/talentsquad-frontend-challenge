export const CHAR_COUNT = 826
export const PAGES_COUNT = 42

export const getRandomEpisodeId = () => {
  return Math.floor(Math.random() * (CHAR_COUNT)) + 1
}