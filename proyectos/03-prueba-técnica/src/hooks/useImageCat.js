import { useState, useEffect } from 'react'
const API_URL_IMAGE = 'https://cataas.com/'

export function useImageCat ({ fact }) {
  const [image, setImage] = useState()
  // Para recuperar la imagen con las 3 primeras palabras del fact
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImage(url)
      })
  }, [fact])
  return { image: `${API_URL_IMAGE}${image}` }
}
