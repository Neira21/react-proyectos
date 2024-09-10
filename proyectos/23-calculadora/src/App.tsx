import './App.css'
import ButtonContainer from './components/ButtonContainer'
import Screen from './components/Screen'
import { useState } from 'react'
//importar calculo de una expresion matematica
import { evaluate } from 'mathjs'

function App() {
  const [operacion, setOperacion] = useState<string>('');

  const agregarInput = (input: string) => {
    if(operacion === 'Error') {
      setOperacion(input);
    }else{
      setOperacion(operacion + input);
    }
  }

  const calcularOperacion = () => {
    try {
      const resultado = evaluate(operacion);
      setOperacion(resultado.toString());
      //eslint-disable-next-line
    } catch (e) {
      setOperacion('Error');
    }

  }

  const limpiarOperacion = () => {
    setOperacion('');
  }

  const borrarUltimo = () => {
    const nuevaOperacion = operacion.slice(0, -1);
    setOperacion(nuevaOperacion);
  }


  return (
    <>
      <h1>Calculadora</h1>
      <div className='contenedor-calculadora'>
        <Screen operacion={operacion}/>
        <div className='fila'>
          <ButtonContainer agregarInput={agregarInput}>1</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>2</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>3</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>+</ButtonContainer>
        </div>
        <div className='fila'>
          <ButtonContainer agregarInput={agregarInput}>4</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>5</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>6</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>-</ButtonContainer>
          
        </div>
        <div className='fila'>
          <ButtonContainer agregarInput={agregarInput}>7</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>8</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>9</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>*</ButtonContainer>
          
        </div>
        <div className='fila'>
          <ButtonContainer agregarInput={agregarInput}>0</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>.</ButtonContainer>
          <ButtonContainer agregarInput={calcularOperacion}>=</ButtonContainer>
          <ButtonContainer agregarInput={agregarInput}>/</ButtonContainer>
          
        </div>
        <div className='fila'>
          <button className='boton-contenedor clear' onClick={limpiarOperacion}>Clear</button>
          <button className='boton-contenedor delete' onClick={borrarUltimo} >Delete</button>


        </div>
      </div>
    </>
  )
}

export default App
