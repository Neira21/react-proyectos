
interface ButtonContainerProps {
  children: React.ReactNode;
  agregarInput: (input: string) => void; // Definir el tipo de la función agregarInput
}

const ButtonContainer = ({children, agregarInput}: ButtonContainerProps) => {
  const esOperador = (valor : number | string) => {
    return isNaN(Number(valor)) && valor !== '.' && valor !== '=';
  }

  const valor = children?.toString() || '';  // Convertimos el children a string o lo dejamos como cadena vacía si es undefined

  return (
    <div className={`boton-contenedor ${esOperador(valor) ? 'operador' : ''}`} onClick={()=>agregarInput(valor)}>
      {children}
    </div>
  )
}

export default ButtonContainer