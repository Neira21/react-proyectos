import { useEffect, useState } from "react";
import Layout from "../components/Layout"
import { useAppContext } from "../store/Store"
import { useParams } from 'react-router-dom';

const View = () => {
  const [value, setValue] = useState('')
  const store = useAppContext()
  const params = useParams()

  const obtenerLibro = () => {
    const libro = store.getItem(params.bookId)
    setValue(libro)
  }

  useEffect(()=>{
    obtenerLibro()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  if(!value) return <div>Book not found</div>
  
  return (
    <Layout>
      <h1>{value?.title}</h1>
      <h2>{value?.author}</h2>
      <p>{value?.intro}</p>
      <img src={value?.cover} alt={value.title} />
    </Layout>
  )
}

export default View