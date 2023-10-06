import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import '../styles/Libro.css'

const Libro = ({item}) => {
  Libro.propTypes = {
    item: PropTypes.object.isRequired,
  };
  return (
    <Link to={`/list/${item.id}`}>
      <div className="Libro-contenedor">
        <div className="Libro-imagen">
          <img src={item.cover} width="200" alt={item.title} />
        </div>
        <div className="Libro-title">
          {item.title}
        </div>
      </div>
    </Link>
  )
}

export default Libro