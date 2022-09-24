import type { NextPage } from 'next'
import Image from 'next/future/image'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center">
      <Image src="/portal.png" className="h-fit w-auto" alt="Rick and Morty Logo" width={700} height={684} priority={true} />
    </div>
  )
}

export default Home
