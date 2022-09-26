import type { NextPage } from 'next'
import { Character } from '../../types'
import File from '../../components/File'
import { CHAR_COUNT } from '../../utils/utils'

const CharacterDetails: NextPage<{ character: Character, firstSeen: string, lastSeen: string }> = ({ character, firstSeen, lastSeen }) => {
  return (
    <File character={character} firstSeen={firstSeen} lastSeen={lastSeen} />
  )
}

export const getStaticPaths = async () => {
  return {
    paths: Array.from(Array(CHAR_COUNT).keys()).map(element => {
      return { params: { id: String(element + 1) } }
    }),
    fallback: true
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