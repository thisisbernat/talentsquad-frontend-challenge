import { useRouter } from 'next/router'
import PrevNext from './Pagination/PrevNext'
import Number from './Pagination/Number'
import Next from './Pagination/Next'
import { PAGES_COUNT } from '../utils/utils'

const Pagination = () => {
  const router = useRouter()
  const id = router.query.id


  const renderPagination = (id: string | string[] | undefined) => {
    if (typeof id !== 'string') {
      return <Number num={1} active={true} />
    }

    const pageId: number = +id

    if (pageId === 1) {
      return (
        <>
          <PrevNext text={'Previous'} href={pageId - 1} disabled={true}/>
          <Number num={pageId} active={true} />
          <Number num={pageId + 1} active={false} />
          <Number num={pageId + 2} active={false} />
          <Number num={pageId + 3} active={false} />
          <Number num={pageId + 4} active={false} />
          <Next text="Next" href={pageId + 1} />
        </>
      )
    } else if (pageId === 2) {
      return (
        <>
          <PrevNext text={'Previous'} href={pageId - 1} />
          <Number num={pageId - 1} active={false} />
          <Number num={pageId} active={true} />
          <Number num={pageId + 1} active={false} />
          <Number num={pageId + 2} active={false} />
          <Number num={pageId + 3} active={false} />
          <Next text="Next" href={pageId + 1} />
        </>
      )
    } else if ((pageId > 2) && (pageId < PAGES_COUNT-1)) {
      return (
        <>
          <PrevNext text={'Previous'} href={pageId - 1} />
          <Number num={pageId - 2} active={false} />
          <Number num={pageId - 1} active={false} />
          <Number num={pageId} active={true} />
          <Number num={pageId + 1} active={false} />
          <Number num={pageId + 2} active={false} />
          <Next text="Next" href={pageId + 1} />
        </>
      )
    } else if (pageId < PAGES_COUNT ) {
      return (
        <>
          <PrevNext text={'Previous'} href={pageId - 1} />
          <Number num={pageId - 3} active={false} />
          <Number num={pageId - 2} active={false} />
          <Number num={pageId - 1} active={false} />
          <Number num={pageId} active={true} />
          <Number num={pageId+1} active={false} />
          <Next text="Next" href={pageId + 1} />
        </>
      )
    } else if (pageId === PAGES_COUNT ) {
      return (
        <>
          <PrevNext text={'Previous'} href={pageId - 1} />
          <Number num={pageId - 4} active={false} />
          <Number num={pageId - 3} active={false} />
          <Number num={pageId - 2} active={false} />
          <Number num={pageId - 1} active={false} />
          <Number num={pageId} active={true} />
          <Next text="Next" href={pageId + 1} disabled={true}/>
        </>
      )
    }
  }

  return (
    <nav className="text-center mt-10 mb-5">
      <ul className="inline-flex -space-x-px">
        {renderPagination(id)}
      </ul>
    </nav>

  )
}

export default Pagination