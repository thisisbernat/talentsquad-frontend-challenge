import type { NextPage } from 'next'
import Image from 'next/future/image'

const Home: NextPage = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <Image src="/portal.png" className="px-7 md:px-0 -mt-36 md:mt-0" alt="Rick and Morty Logo" width={700} height={684} priority={true} />
    </div>
  )
}

export default Home
