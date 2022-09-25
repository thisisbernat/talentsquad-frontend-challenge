import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const CharactersGrid = ({ children, className }: Props) => {
  return (
    <div className="lg:max-w-5xl 2xl:max-w-full mx-auto pt-10">
      <div className="grid gap-5 3xl:gap-0 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 px-2">
        {children}
      </div>
    </div>
  )
}

export default CharactersGrid