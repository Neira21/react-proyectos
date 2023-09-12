import { useImageCat } from './hooks/useImageCat'

const App2 = () => {
  const { image } = useImageCat({ fact: 'Hello Cat' })
  return (
    <>
      <img src={image} />
    </>
  )
}

export default App2
