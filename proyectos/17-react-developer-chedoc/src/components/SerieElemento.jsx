import PropTypes from 'prop-types'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const SerieElemento = ({item}) => {
  SerieElemento.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired,
      images: PropTypes.shape({
        'Poster Art': PropTypes.shape({
          url: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  return (
    <>
    <div className='contenedor-serie'>
      <Popup trigger={<p>{item.title}</p>}
        position="center">
          <div>
            <div><b>Title:</b>{item.title}</div>
            <div><b>Description:</b>  {item.description}</div>
            <div><b>Year:</b>{item.releaseYear}</div>
            <div>
              <img src={item.images['Poster Art'].url} onError={(e) => e.target.src = 'https://via.placeholder.com/120x150'} alt={item.title} width={180} height={270} />
            </div>
          </div>
      </Popup>
      <img src={item.images['Poster Art'].url} onError={(e) => e.target.src = 'https://via.placeholder.com/120x150'} alt={item.title} width={200} height={280} />

    </div>
    
  </>

  )
}

export default SerieElemento