import './App.css'
import Testimonio from './components/Testimonio'
import image1 from './img/image1.png'
import image2 from './img/image2.png'
import image3 from './img/image3.png'

function App() {
  return (
    <div className="App">
      <main className='contenedor-Principal' >
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
          image={image1} 
          nombre='Shawn Wang' 
          pais='Singapore' 
          cargo='Software Engineer' 
          empresa='Amazon' 
          descripcion={`"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."`}   />
        <Testimonio 
          image={image2} 
          nombre='Sarah Chima' 
          pais='Nigeria' 
          cargo='Software Engineer' 
          empresa='ChatDesk' 
          descripcion={`"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."`}   />
        <Testimonio 
          image={image3} 
          nombre='Emma Bostian' 
          pais='Sweden'
          cargo='Software Engineer'
          empresa='Spotify' 
          descripcion={`"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."`}   />
      </main>
    </div>
  )
}

export default App
