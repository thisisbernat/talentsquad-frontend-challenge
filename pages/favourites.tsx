import type { NextPage, GetServerSideProps } from 'next'
import CharactersGrid from '../components/CharactersGrid'
import Card from '../components/Card'
import { GetCharacterResults, Character } from '../types'
import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../context/auth.context'

const Favourites: NextPage<{ characters: Character[] }> = ({ characters }) => {
  const { isLoggedIn, checkLogStatus } = useContext(AuthContext)
  const [favourites, setFavourites] = useState<any>([0])

  useEffect(() => {
    if (isLoggedIn) {
      const favArray = window.localStorage.getItem("r&m-favourites")
      if (favArray) {
        const evalArray: number[] = eval(favArray)
        setFavourites(evalArray)
      }
    }
  }, [])

  if (isLoggedIn) {
    return (
      <>
        <h1 className="text-4xl font-bold text-white text-center mt-2">Favourites</h1>
        <CharactersGrid>
          {characters.map(character => {
            if (favourites.includes(character.id)) {
              return <Card key={character.id} character={character} />
            }
          })}
        </CharactersGrid>
      </>
    )
  } else {
    return <h1 className="text-4xl font-bold text-white text-center mt-40">Must be logged in to save favourites</h1>
  }

}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const charactersRes = await fetch("https://rickandmortyapi.com/api/character/")
  const { results }: GetCharacterResults = await charactersRes.json()
  return {
    props: {
      characters: results
    }
  }
}

export default Favourites
