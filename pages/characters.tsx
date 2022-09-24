import type { NextPage } from 'next'
import CharactersGrid from '../components/CharactersGrid'
import Card from '../components/Card'

const Characters: NextPage = () => {
  return (
    <CharactersGrid>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CharactersGrid>
  )
}

export default Characters
