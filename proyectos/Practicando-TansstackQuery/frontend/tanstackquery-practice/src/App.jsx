import './App.css'
import CardMovie from './components/CardMovie'


function App() {  
  
  return (
    <>

    <div className='button-style'>
      <button className='btn'>Click Me</button>
    </div>

    <div className='images-container gap-10 gap-y-60 '>
      <CardMovie title="Título" description="Descripción" image="https://posters.movieposterdb.com/24_02/2024/12584954/l_twisters-movie-poster_a76b8a6c.jpg" />
      <CardMovie title="Título" description="Descripción" image="https://posters.movieposterdb.com/24_02/2024/7510222/l_despicable-me-4-movie-poster_3c4ff16e.jpg" />
      <CardMovie title="Título" description="Descripción" image="https://posters.movieposterdb.com/24_03/2024/22022452/l_inside-out-2-movie-poster_4b749fa4.jpg" />
      <CardMovie title="Título" description="Descripción" image="https://posters.movieposterdb.com/24_04/2024/23468450/l_longlegs-movie-poster_0eb7ec11.jpg" />
      <CardMovie title="Título" description="Descripción" image="https://posters.movieposterdb.com/24_05/2024/13433802/l_a-quiet-place-day-one-movie-poster_a978381b.jpg" />
      <CardMovie title="Título" description="Descripción" image="https://posters.movieposterdb.com/24_06/2024/1896747/l_fly-me-to-the-moon-movie-poster_aeb8c4ea.jpg" />
      <CardMovie title="Título" description="Descripción" image="https://posters.movieposterdb.com/24_04/2024/4919268/l_bad-boys-ride-or-die-movie-poster_94c04697.jpg" />
      <CardMovie title="Título" description="Descripción" image="https://posters.movieposterdb.com/24_05/2024/21454134/l_the-bikeriders-movie-poster_95cd633e.jpg" />
      <CardMovie title="Título" description="Descripción" image="https://posters.movieposterdb.com/24_05/2024/17505010/l_horizon-an-american-saga-chapter-1-movie-poster_bd914ba0.jpg" />
    </div>

    <div className='gallery'>
      <div className='card'>1</div>
      <div className='card'>2</div>
      <div className='card'>3</div>
      <div className='card'>4</div>
      <div className='card'>5</div>
    </div>
    </>
  )
}

export default App
