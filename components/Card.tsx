import Image from 'next/future/image'
import Link from 'next/link'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

const Card = () => {
  return (
    <div className="flex flex-col sm:flex-row mx-auto sm:max-h-full bg-zinc-700 rounded-xl relative">
      <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" className="min-w-full sm:min-w-0 rounded-t-xl sm:rounded-none sm:rounded-l-xl w-52" alt="Rick Sanchez" height="300" width="300" />
      <div className="flex flex-col justify-between text-white py-3 px-4">
        <div>
          <Link href="#">
            <a className="text-white hover:text-orange-400 text-3xl font-black">Rick Sanchez</a>
          </Link>
          <div className="flex items-center gap-1 font-medium">
            <div className="h-3 w-3 bg-lime-500 rounded-full"></div>
            <span>Alive</span>
            -
            <span>Human</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400 font-semibold">Last known location:</span>
          <span>Earth (Replacement Dimension)</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-400 font-semibold">First seen in:</span>
          <span>Rick Potion #9</span>
        </div>
        <div className="absolute bottom-2 right-2">
          <HeartIconOutline className="text-white h-7 w-7" />
        </div>
      </div>
    </div>
  )
}

export default Card