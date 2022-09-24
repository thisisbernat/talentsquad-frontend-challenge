import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Header = ({ children, className }: Props) => {
  return (
    <header className={className}>
      {children}
    </header>
  )
}

export default Header