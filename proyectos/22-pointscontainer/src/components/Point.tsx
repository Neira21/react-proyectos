import { PointType } from "../types/Point"

const Point = ({point} : {point: PointType}) => {
  return (
    <div className="point" style={{
      left: point.x,
      top: point.y
    }}>
    </div>
  )
}

export default Point