import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
       <h1>Home</h1>
      </Link>
      <Link to='/listaelementos'>
        <h1>Lista de elementos</h1>
      </Link>
      <Link to='/todo'>
        <h1>Todo</h1>
      </Link>
      <Link to='/formulario'>
        <h1>Formulario</h1>
      </Link>
      <Link to='/todoReducer'>
        <h1>Todo Con Reducer</h1>
      </Link>
    </div>
  )
}

export default Header
