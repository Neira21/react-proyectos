import PropTypes from 'prop-types';

const Contenido = ({title, children}) => {
  Contenido.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  };
  return (
    <div className='contenido'>
      <div className='contenido-title'>
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  )
}

export default Contenido