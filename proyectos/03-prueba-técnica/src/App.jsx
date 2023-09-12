import '../app.css'
import { useImageCat } from './hooks/useImageCat'
import { useCatFact } from './hooks/useCatFact'
import App2 from './App2'

const App = () => {
  const { fact, getRandomFactCat } = useCatFact()
  const { image } = useImageCat({ fact })

  const handleFact = async () => {
    getRandomFactCat()
  }

  return (
    <main className='clase'>
      <h1>App de Gatos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {image && <img className='img' src={`${image}`} alt={`Image extrated ${fact}`} />}
      </section>
      <br />
      <button onClick={handleFact}>Actualizar Fact</button>
      <br />
      <br />
      <App2 />
    </main>
  )
}
export default App
