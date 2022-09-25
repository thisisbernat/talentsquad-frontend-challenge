import { Status } from '../types'

const StatusIndicator = (status: { status: Status }) => {
  switch (status.status) {
    case Status.Alive:
      return <div className="h-3 w-3 rounded-full bg-lime-500"></div>
      break
    case Status.Dead:
      return <div className="h-3 w-3 rounded-full bg-red-700"></div>
      break
    case Status.Unknown:
      return <div className="h-3 w-3 rounded-full bg-neutral-500"></div>
      break
    default:
      return <div className="h-3 w-3 rounded-full"></div>
  }
}

export default StatusIndicator