import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Main = ({ children, className }: Props) => {
  return (
    <main className={`flex-1 container mx-auto ${className}`}>
      {children}
    </main>
  )
}

export default Main