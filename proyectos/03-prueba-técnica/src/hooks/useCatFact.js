import { useState, useEffect } from 'react'
import { Fact } from '../logica/Fact'

export const useCatFact = () => {
  const [fact, setFact] = useState()
  const getRandomFactCat = () => {
    Fact().then(newFact => setFact(newFact))
  }
  useEffect(getRandomFactCat, [])
  return { fact, getRandomFactCat }
}
