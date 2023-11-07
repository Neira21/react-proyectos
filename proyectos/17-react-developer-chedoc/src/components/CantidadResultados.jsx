// eslint-disable-next-line
const CantidadResultados = ({ CantidadResultado }) => {

  const OnChangeValue = (e) => {
    const newChange = e.target.value
    CantidadResultado(newChange)
  }

  return (
    <div>
      <h6>Selecciona cantidad de resultados </h6>
      <select onChange={OnChangeValue}>
        <option value="20">20</option>
        <option value="10">10</option>
        <option value="5">5</option>
      </select>
    </div>
  )
}

export default CantidadResultados