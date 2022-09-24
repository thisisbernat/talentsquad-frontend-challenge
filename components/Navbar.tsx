import Image from 'next/future/image'
import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Modal from './Modal'

const Navbar = () => {
  const [isModalOn, setModalOn] = useState(false)
  const [isMenuOn, setMenuOn] = useState(false)

  const toggleModal = () => {
    setModalOn(!isModalOn)
  }

  const toggleMenu = () => {
    setMenuOn(!isMenuOn)
  }

  return (
    <>
      <div className="bg-gradient-to-t from-zinc-800 to-zinc-900 px-5 pt-3 pb-10 md:pb-2 text-white flex flex-col md:flex-row justify-between z-30 w-full">
        <Link href="/">
          <div className="flex cursor-pointer">
            <Image src="/rickandmorty.svg" className="h-6 sm:h-9 w-auto" alt="Rick and Morty Logo" width={30} height={30} />
            <span className="ml-2 self-center whitespace-nowrap text-xl font-bold subpixel-antialiased">Rick and Morty</span>
          </div>
        </Link>
        <div className="text-white h-6 w-6 md:hidden absolute right-5 top-3.5" onClick={toggleMenu}><Bars3Icon /></div>
        <div className={`flex flex-col md:flex-row items-center gap-7 text-sm font-semibold pt-5 md:pt-1 ${isMenuOn ? 'visible' : 'invisible'} transition-all ease-in-out duration-100`}>
          <Link href="/">
            <a onClick={toggleMenu} className="hover:text-lime-600 hover:underline underline-offset-4">Home</a>
          </Link>
          <Link href="/characters">
            <a onClick={toggleMenu} className="hover:text-lime-600 hover:underline underline-offset-4">All Characters</a>
          </Link>
          <Link href="/favourites">
            <a onClick={toggleMenu} className="hover:text-lime-600 hover:underline underline-offset-4">Favourites</a>
          </Link>
          <Link href="/random">
            <a onClick={toggleMenu} className="hover:text-lime-600 hover:underline underline-offset-4">Random character</a>
          </Link>
          <button className="rounded-full bg-lime-600 hover:bg-lime-700 py-1 px-3 font-semibold" onClick={() => {toggleModal(); toggleMenu()}}>Log in</button>
        </div>
      </div>
      {isModalOn && <Modal toggleModal={toggleModal} />}
    </>
  )
}

export default Navbar