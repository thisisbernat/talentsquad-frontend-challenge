import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ContentLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-800">
      {children}
    </div>
  )
}

export default ContentLayout