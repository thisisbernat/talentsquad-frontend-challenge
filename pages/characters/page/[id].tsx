import type { NextPage } from 'next'
import CharactersGrid from '../../../components/CharactersGrid'
import Card from '../../../components/Card'
import { GetCharacterResults, Character } from '../../../types'
import { pageParamsArray } from '../../../utils/utils'

const CharactersPage: NextPage<{ characters: Character[] }> = ({ characters }) => {

  return (
    <CharactersGrid>
      {characters.map(character => {
        return <Card key={character.id} character={character} />
      })}
    </CharactersGrid>
  )
}

// export const getStaticPaths = async () => {
//   return {
//     paths: pageParamsArray,
//     fallback: true
//   }
// }

export const getServerSideProps = async ({ params }: { params: { id: string } }) => {
  const charactersRes = await fetch(`https://rickandmortyapi.com/api/character/?page=${params.id}`)
  const { results }: GetCharacterResults = await charactersRes.json()
  return {
    props: {
      characters: results
    }
  }
}

export default CharactersPage
