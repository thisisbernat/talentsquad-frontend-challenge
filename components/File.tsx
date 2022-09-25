import type { NextPage } from 'next'
import Image from 'next/future/image'
import Heart from './Heart'
import { Character } from '../types'
import StatusIndicator from './StatusIndicator'

const File: NextPage<{ character: Character, firstSeen: string, lastSeen: string }> = ({ character, firstSeen, lastSeen }) => {
  return (
    <div className="bg-zinc-700 my-10 mx-12 md:mx-auto rounded-xl px-4 md:px-8 pt-8 pb-5 md:pb-8 relative">
      <div className="flex flex-col sm:flex-row sm:justify-evenly items-center sm:items-stretch">
        <Image src={character.image} className="min-w-60 min-h-60 rounded-full md:mr-4" alt={character.name} height="300" width="300" priority={true} />
        <div className="flex flex-col gap-1 mt-2 items-center md:justify-start sm:mt-4">
          <div className="flex flex-col items-center mt-2">
            <h1 className="text-white text-3xl font-black subpixel-antialiased">{character.name}</h1>
            <div className="flex items-center gap-1 font-medium text-white">
              <StatusIndicator status={character.status} />
              <span>{character.status}</span> - <span>{character.species}</span> - <span>{character.gender}</span>
            </div>
          </div>
          <div className="md:flex md:flex-col md:items-center md:my-auto mt-2">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 font-semibold">Origin:</span>
              <span className="subpixel-antialiased text-white">{character.origin.name}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 font-semibold">Last known location:</span>
              <span className="subpixel-antialiased text-white">{character.location.name}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 font-semibold">First seen in:</span>
              <span className="subpixel-antialiased text-white">{firstSeen}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 font-semibold">Last seen in:</span>
              <span className="subpixel-antialiased text-white">{lastSeen}</span>
            </div>
          </div>
          <Heart size={'10'} active={true} />
        </div>
      </div>
    </div>
  )
}

export default File