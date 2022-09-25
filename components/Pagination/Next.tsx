import Link from 'next/link'

const Next = ({ text, href, disabled }: { text: string, href: number, disabled?: boolean }) => {
  if (disabled) {
    return <div><a className="py-2 px-3 ml-0 leading-tight rounded-r-lg bg-zinc-700 text-zinc-600 cursor-default">{text}</a></div>
  }
  return (
    <li>
      <Link href={String(href)}>
        <a className="py-2 px-3 ml-0 leading-tight rounded-r-lg bg-zinc-700 text-white border-l border-zinc-500 hover:bg-zinc-600">{text}</a>
      </Link>
    </li>
  )
}

export default Next