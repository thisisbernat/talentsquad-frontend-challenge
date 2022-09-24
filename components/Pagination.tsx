const Pagination = () => {
  return (
    <nav className="text-center mt-10 mb-5">
      <ul className="inline-flex -space-x-px">
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight rounded-l-lg bg-zinc-700 text-white hover:bg-zinc-600">Previous</a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight bg-zinc-700 text-zinc-200 border-x border-zinc-500 hover:bg-zinc-600">1</a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight bg-zinc-700 text-zinc-200 border-x border-zinc-500 hover:bg-zinc-600">2</a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight bg-zinc-600 text-zinc-200 border-x border-zinc-500 hover:bg-zinc-600">3</a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight bg-zinc-700 text-zinc-200 border-x border-zinc-500 hover:bg-zinc-600">4</a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight bg-zinc-700 text-zinc-200 border-x border-zinc-500 hover:bg-zinc-600">5</a>
        </li>
        <li>
          <a href="#" className="py-2 px-3 ml-0 leading-tight rounded-r-lg bg-zinc-700 text-white border-l border-zinc-500 hover:bg-zinc-600">Next</a>
        </li>
      </ul>
    </nav>

  )
}

export default Pagination