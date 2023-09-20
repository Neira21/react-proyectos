import { useState } from 'react'
import { getCharacter } from '../services/Characters'

export function useCharacter () {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchCharacters = async ({ status, infoNext, infoPrev }) => {
    try {
      setLoading(true)
      setError(null)
      if (infoNext) {
        console.log('infoNext')
        const newCharacters = await getCharacter({ link: infoNext.next })
        setCharacters(newCharacters.results)
        setInfo(newCharacters.info)
      } else if (infoPrev) {
        console.log('infoPrev')
        const newCharacters = await getCharacter({ link: infoPrev.prev })
        setCharacters(newCharacters.results)
        setInfo(newCharacters.info)
      } else {
        console.log('sstuas')
        const newCharacters = await getCharacter({ status })
        setCharacters(newCharacters.results)
        setInfo(newCharacters.info)
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { characters, info, loading, error, fetchCharacters }
}
