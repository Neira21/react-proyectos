import Layout from "../components/Layout"
import Libro from "../components/Libro"
import { useAppContext } from "../store/Store"
import '../styles/index.css'

const Index = () => {
  const store = useAppContext()
  return (
    <Layout>
      <div className="Contenedor-libros">
        {store.items.map(item => <Libro key={item.id} item={item} />)}
      </div>
      
    </Layout>
  )
}

export default Index