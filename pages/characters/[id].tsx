import { GetCharacterResults, Character } from '../../types'
import File from '../../components/File'

const CharacterDetails = ({ character, firstSeen, lastSeen }: { character: Character, firstSeen: string, lastSeen: string }) => {
  return (
    <File character={character} firstSeen={firstSeen} lastSeen={lastSeen} />
  )
}

export const getStaticPaths = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`)
  const { results }: GetCharacterResults = await response.json()

  return {
    paths: results.map((character) => {
      return { params: { id: String(character.id) } }
    }),
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const characterRes = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
  const character = await characterRes.json()
  const { episode }: { episode: string[] } = character

  const firstEpisodeRes = await fetch(`${episode.at(0)}`)
  const firstEpisode = await firstEpisodeRes.json()

  const lastEpisodeRes = await fetch(`${episode.at(-1)}`)
  const lastEpisode = await lastEpisodeRes.json()

  return {
    props: {
      character,
      firstSeen: firstEpisode.name,
      lastSeen: lastEpisode.name
    }
  }
}


export default CharacterDetails