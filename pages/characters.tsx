import type { NextPage } from 'next'
import CharactersGrid from '../components/CharactersGrid'
import Card from '../components/Card'
import { GetStaticProps } from 'next'
import { GetCharacterResults, Character } from '../types'

const Characters: NextPage<{ characters: Character[] }> = ({ characters }) => {

  return (
    <CharactersGrid>
      {characters.map(character => {
        return <Card key={character.id} character={character} />
      })}
    </CharactersGrid>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("https://rickandmortyapi.com/api/character")
  const { results }: GetCharacterResults = await response.json()
  return {
    props: {
      characters: results
    }
  }
}

export default Characters
