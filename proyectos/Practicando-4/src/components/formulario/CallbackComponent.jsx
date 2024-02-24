import Incrementar from "./Incrementar"
import { useCallback, useState } from "react"

const CallbackComponent = () => {

  const [counter, setCounter] = useState(0)

  const incrementarPadre = useCallback((value) => {
      setCounter(contador => contador + value)
    },[]
  )
  
  

  return (
    <>
      <h1>Callback Component</h1>
      <h3>contador {counter} </h3>
      <Incrementar incrementarPadre={incrementarPadre} />
    </>
  )
}

export default CallbackComponent