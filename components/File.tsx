import Image from 'next/future/image'
import Heart from './Heart'

const File = () => {
  return (
    <div className="bg-zinc-700 my-10 mx-6 rounded-xl px-4 py-10 relative sm:max-w-3xl lg:mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-evenly items-center sm:items-stretch">
        <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" className="min-w-60 min-h-60 rounded-full" alt="Rick Sanchez" height="300" width="300" priority={true} />
        <div className="flex flex-col gap-1 mt-2 items-center md:justify-start sm:mt-4">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-3xl font-black subpixel-antialiased">Rick Sanchez</h1>
            <div className="flex items-center gap-1 font-medium">
              <div className="h-3 w-3 bg-lime-500 rounded-full"></div>
              <span>Alive</span>
              -
              <span>Human</span>
              -
              <span>Male</span>
            </div>
          </div>
          <div className="md:flex md:flex-col md:gap-2 md:my-auto">
            <div className="flex flex-col md:flex-row md:gap-2 items-center">
              <span className="text-gray-400 font-semibold">Origin:</span>
              <span className="subpixel-antialiased">Earth (C-137)</span>
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 items-center">
              <span className="text-gray-400 font-semibold">Last known location:</span>
              <span className="subpixel-antialiased">Citadel of Ricks</span>
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 items-center">
              <span className="text-gray-400 font-semibold">First seen in:</span>
              <span className="subpixel-antialiased">Pilot</span>
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 items-center">
              <span className="text-gray-400 font-semibold">Last seen in:</span>
              <span className="subpixel-antialiased">Pilot</span>
            </div>
          </div>
          <Heart size={'10'} active={true} />
        </div>
      </div>
    </div>
  )
}

export default File