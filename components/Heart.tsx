import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

const Heart = ({ size, active }: { size: string, active: boolean }) => {
  if (active) {
    return (
      <div className="absolute bottom-2 right-2">
        <HeartIconSolid className={`text-white h-${size} w-${size}`} />
      </div>
      )
  } else {
    return (
      <div className="absolute bottom-2 right-2">
        <HeartIconOutline className={`text-white h-${size} w-${size}`} />
      </div>
      )
  }
}

export default Heart