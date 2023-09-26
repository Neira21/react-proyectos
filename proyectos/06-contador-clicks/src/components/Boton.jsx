import PropTypes from 'prop-types'
import './Boton.css'

const Boton = (props) => {
  Boton.propTypes = {
    esContador: PropTypes.bool.isRequired,
    texto: PropTypes.string.isRequired,
    manejarClick: PropTypes.func.isRequired
  }

  const clase = props.esContador ? 'boton-contador' : 'boton-reinicio'
  return (
    <button className={`boton ${clase}`} onClick={props.manejarClick} >
      {props.texto}
    </button>
  )
}

export default Boton