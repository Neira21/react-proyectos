type operacion = {
  operacion: string
}

const Screen = ({operacion} : operacion) => {
  return (
    <div className="pantalla">
      {operacion}
    </div>
  )
}

export default Screen