import type { NextPage, GetServerSideProps } from 'next'
import CharactersGrid from '../components/CharactersGrid'
import Card from '../components/Card'
import { GetCharacterResults, Character } from '../types'
import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../context/auth.context'

const Favourites: NextPage<{ characters: Character[] }> = ({ characters }) => {
  const { isLoggedIn, checkLogStatus } = useContext(AuthContext)
  const [favourites, setFavourites] = useState<any>([1])

  useEffect(() => {
    if (isLoggedIn) {
      const favArray = window.localStorage.getItem("r&m-favourites")
      if (favArray) {
        const evalArray:number[] = eval(favArray)
        setFavourites(evalArray)
      }
    }
  }, [])

  if (isLoggedIn) {
    return (
      <CharactersGrid>
        {characters.map(character => {
          if (favourites.includes(character.id)) {
            return <Card key={character.id} character={character} />
          }
          
        })}
      </CharactersGrid>
    )
  } else {
    return <div>nothing to see here</div>
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
