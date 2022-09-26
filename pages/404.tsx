import Image from 'next/future/image'
const Custom404 = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <Image src="/error404.png" className="h-auto w-full md:w-7/12" alt="Rick and Morty Logo" width={813} height={880} priority={true} />
    </div>
  )
}

export default Custom404