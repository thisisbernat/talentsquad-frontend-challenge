import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

const Heart = ({ size, active }: { size: number, active: boolean }) => {
  if (active) {
    return <HeartIconSolid className={`text-white h-${size} w-${size}`} />
  } else {
    return <HeartIconOutline className={`text-white h-${size} w-${size}`} />
  }
}

export default Heart