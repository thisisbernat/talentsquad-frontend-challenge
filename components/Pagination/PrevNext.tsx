import Link from 'next/link'

const PrevNext = ({ text, href, disabled }: { text: string, href: number, disabled?: boolean }) => {
  if (disabled) {
    return <div><a className="py-2 px-3 ml-0 leading-tight rounded-l-lg bg-zinc-700 text-zinc-600 cursor-default">{text}</a></div>
  }

  return (
    <li>
      <Link href={String(href)}>
        <a className="py-2 px-3 ml-0 leading-tight rounded-l-lg bg-zinc-700 text-white hover:bg-zinc-600">{text}</a>
      </Link>
    </li>
  )
}

export default PrevNext