import React from 'react'

const Navigation = ({ handlePrev, HandleNext }) => {
  return (
    <div className='navegation'>
      <button className='primary' onClick={handlePrev} type='button'>Anterior</button>
      <button className='primary' onClick={HandleNext} type='button'>Siguiente</button>
    </div>
  )
}

export default Navigation
