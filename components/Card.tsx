import Image from 'next/future/image'
import Link from 'next/link'
import { Character, Status } from '../types'
import Heart from './Heart'

interface CharacterProps {
  character: Character
}

const StatusIndicator = (status: { status: Status }) => {
  switch (status.status) {
    case Status.Alive:
      return <div className="h-3 w-3 rounded-full bg-lime-500"></div>
      break
    case Status.Dead:
      return <div className="h-3 w-3 rounded-full bg-red-700"></div>
      break
    case Status.Unknown:
      return <div className="h-3 w-3 rounded-full bg-neutral-500"></div>
      break
    default:
      return <div className="h-3 w-3 rounded-full"></div>
  }
}

const Card = ({ character }: CharacterProps) => {
  return (
    <div className="flex flex-col sm:flex-row min-w-min lg:min-w-full mx-12 sm:mx-24 lg:mx-auto bg-zinc-700 rounded-xl relative">
      <Image src={character.image} className="min-w-full sm:min-w-0 rounded-t-xl sm:rounded-none sm:rounded-l-xl w-52 object-cover" alt={character.name} height="300" width="300" priority={true} />
      <div className="flex flex-col justify-between text-white py-3 px-4">
        <div className="max-w-fit">
          <Link href={`/characters/${character.id}`}>
            <a className="text-white hover:text-orange-400 text-3xl font-black">{character.name}</a>
          </Link>
          <div className="flex items-center gap-1 font-medium">
            <StatusIndicator status={character.status} />
            <span>{character.status}</span> - <span>{character.species}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400 font-semibold">Last known location:</span>
          <span>{character.location.name}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400 font-semibold">First seen in:</span>
          <span>------</span>
        </div>
        <Heart size={'6'} active={true} />
      </div>
    </div>
  )
}

export default Card