import { useState } from "react"
import { PointType } from "../types/Point"
import { v4 as uuidv4 } from "uuid"
import Point from "./Point"

const ContainerPoints = () => {
  const [points, setPoints] = useState<Array<PointType>>([])
  const [popped, setPopped] = useState<Array<PointType>>([])

  const handleClick = (e : React.MouseEvent<HTMLDivElement>) => {
    console.log(e.clientX, e.clientY)
    const newPoint = {
      id: uuidv4(),
      x: e.clientX,
      y: e.clientY,
    }
    setPoints([...points, newPoint])
  }

  const undo = () => {
    const newPoints = [...points]
    const poppedPoint = newPoints.pop()
    setPoints(newPoints)
    if (poppedPoint) {
      setPopped([...popped, poppedPoint])
    }
  }

  const redo = () => {
    const lastPopped = popped.pop()
    if (lastPopped) {
      setPoints([...points, lastPopped])
    }
  }

  const clear = () => {
    setPoints([])
    setPopped([])
  }

  return (
    <>
      <button onClick={undo} >Atrás</button>
      <button onClick={redo} >Adelante</button>
      <button onClick={clear} >Limpiar</button>
      <div className="container-points" onClick={handleClick}>
        {points.map((point) => <Point key={point.id} point={point} />)}
      </div>

    </>
  )
}

export default ContainerPoints