import { ReactNode } from 'react'
import Pagination from './Pagination'

interface Props {
  children: ReactNode
  className?: string
}

const CharactersGrid = ({ children, className }: Props) => {
  return (
    <div>
      <div className="lg:max-w-5xl 2xl:max-w-full mx-auto">
        <div className="grid gap-5 3xl:gap-0 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 px-2">
          {children}
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default CharactersGrid