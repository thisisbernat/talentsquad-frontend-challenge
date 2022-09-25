import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { useEffect, useContext } from 'react'
import { AuthContext } from '../context/auth.context'

const Heart = ({ size, active }: { size: string, active: boolean }) => {
  const { isLoggedIn, checkLogStatus } = useContext(AuthContext)
  
  useEffect(() => {
    checkLogStatus()
  }, [])

  if (active) {
    return (
      <div className="absolute bottom-2 right-2">
        <HeartIconSolid className={`text-white h-${size} w-${size} ${!isLoggedIn && 'hidden'}`} />
      </div>
      )
  } else {
    return (
      <div className="absolute bottom-2 right-2">
        <HeartIconOutline className={`text-white h-${size} w-${size} ${!isLoggedIn && 'hidden'}`} />
      </div>
      )
  }
}

export default Heart