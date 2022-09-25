import Link from 'next/link'

const Number = ({ num, active }: { num: number, active: boolean }) => {
  return (
    <li>
      <Link href={String(num)}>
        <a className={`py-2 px-3 ml-0 leading-tight ${active ? 'bg-zinc-600' : 'bg-zinc-700'} text-zinc-200 border-x border-zinc-500 hover:bg-zinc-600`}>{num}</a>
      </Link>
    </li>
  )
}

export default Number