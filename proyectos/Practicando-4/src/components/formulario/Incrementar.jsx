import React from 'react'

const Incrementar = React.memo(({incrementarPadre}) => {
  console.log("Me volvi a generar :(")

  return (
    <div>
      <button onClick={()=>incrementarPadre(10)} >+10</button>
    </div>
  )

}
)
export default Incrementar