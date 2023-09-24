import "./Testimonio.css"
import PropTypes from 'prop-types';


const Testimonio = ({image, nombre, pais, cargo, empresa, descripcion}) => {
  Testimonio.propTypes = {
    image: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    pais: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
    empresa: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
  }
  return (
    <div className="contenedor-testimonio">
      
      <img className='imagen-testimonio' src={image} alt={nombre} />
      <div className="contenedor-texto-testimonio"> 
        <div className="texto-nombre"> <strong>{nombre}</strong>  in {pais}</div>
        <div className="texto-trabajo">{cargo} at <strong>{empresa}</strong></div>
        <div className="texto-descripcion">
          {descripcion}
        </div>
      </div>
      
    </div>
  )
}

export default Testimonio