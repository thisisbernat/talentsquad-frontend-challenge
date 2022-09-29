import type { NextPage } from 'next'
import CharactersGrid from '../components/CharactersGrid'
import Card from '../components/Card'
import { Character } from '../types'
import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../context/auth.context'

const Favourites: NextPage = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const [favChars, setFavChars] = useState<Character[]>([])

  const getCharacters = async (charId: number) => {
    try {
      const charactersRes = await fetch(`https://rickandmortyapi.com/api/character/${charId}`)
      return await charactersRes.json()
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      const favArray = window.localStorage.getItem("r&m-favourites")
      if (favArray) {
        const evalArray: number[] = eval(favArray)
        Promise.all(evalArray.map(id => getCharacters(id))).then(results => {
          return results
        }).then(res => setFavChars(res))
      }
    }
  }, [])

  if (isLoggedIn) {
    return (
      <>
        <h1 className="text-4xl font-bold text-white text-center mt-2">Favourites</h1>
        <CharactersGrid>
          {favChars.map(character => {
            return <Card key={character.id} character={character} />
          })}
        </CharactersGrid>
      </>
    )
  } else {
    return <h1 className="text-4xl font-bold text-white text-center mt-40">Must be logged in to save favourites</h1>
  }

}

export default Favourites
