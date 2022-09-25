import { useState, useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { AuthContext } from '../context/auth.context'

interface Props {
  toggleModal: () => void
}

const Modal = ({ toggleModal }: Props) => {
  const [username, setUsername] = useState('')
  const { logIn } = useContext(AuthContext)

  const saveUsername = () => {
    logIn(username)
    toggleModal()
  }

  return (
    <>
      <div className="bg-zinc-900 opacity-70 fixed inset-0 z-40 h-screen"></div>
      <div className="flex h-screen justify-center items-center fixed inset-0 z-50">
        <div className="relative">
          <XMarkIcon className="text-white h-6 w-auto absolute top-7 right-7 cursor-pointer" onClick={toggleModal} />
          <div className="bg-zinc-700 rounded-xl p-6 z-51 flex flex-col justify-between items-center text-white m-5">
            <h1 className="text-2xl font-bold mb-3">Log in</h1>
            <p className="text-center mb-5">Log in with a username to be able to select your favourite characters</p>
            <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Username" />
            <div className="mt-6">
              <button className="rounded-full bg-lime-600 hover:bg-lime-700 py-1 px-3 font-semibold" onClick={saveUsername} >Log in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal