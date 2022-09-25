import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../context/auth.context'

const Heart = ({ size, charId }: { size: string, charId: number }) => {
  const { isLoggedIn, checkLogStatus } = useContext(AuthContext)

  const [isThisFav, setIsThisFav] = useState(false)

  useEffect(() => {
    checkLogStatus()
  }, [])

  const addToFavourites = (charId: number) => {
    if (isLoggedIn) {
      const favourites = window.localStorage.getItem("r&m-favourites")
      if (favourites) {
        const updatedFav = [...eval(favourites), charId]
        window.localStorage.setItem("r&m-favourites", JSON.stringify(updatedFav))
        setIsThisFav(!isThisFav)
      } else {
        const newFav = [charId]
        window.localStorage.setItem("r&m-favourites", JSON.stringify(newFav))
        setIsThisFav(!isThisFav)
      }
    }
  }

  const deleteFromFavourites = (charId: number) => {
    if (isLoggedIn) {
      const favourites = window.localStorage.getItem("r&m-favourites")
      if (favourites) {
        const currentFav = eval(favourites)
        const pos = currentFav.indexOf(charId)
        if (pos != -1) {
          currentFav.splice(pos, 1)
        }
        window.localStorage.setItem("r&m-favourites", JSON.stringify(currentFav))
        setIsThisFav(!isThisFav)
      }
    }
  }

  const checkFavouriteStatus = (charId: number) => {
    if (isLoggedIn) {
      const favourites = window.localStorage.getItem("r&m-favourites")
      if (favourites) {
        const currentFav = eval(favourites)
        if (currentFav.includes(charId)) {
          return true
        }
      } else {
        return false
      }
    }
    return false
  }

  if (checkFavouriteStatus(charId)) {
    return (
      <div className="absolute bottom-2 right-2 cursor-pointer" title="Remove from favourites" onClick={() => deleteFromFavourites(charId)}>
        <HeartIconSolid className={`text-white h-${size} w-${size} ${!isLoggedIn && 'hidden'}`} />
      </div>
    )
  } else {
    return (
      <div className="absolute bottom-2 right-2 cursor-pointer" title="Add to favourites" onClick={() => addToFavourites(charId)}>
        <HeartIconOutline className={`text-white h-${size} w-${size} ${!isLoggedIn && 'hidden'}`} />
      </div>
    )
  }
}

export default Heart