import CharacterModal from './CharacterModal'
import { useState } from 'react'

const Character = ({ characters }) => {
  //  toggle={toggle} modal={modal}
  const [modal, setModal] = useState(false)
  const [character, setCharacter] = useState({})
  const [episodes, setEpisodes] = useState([])

  const toggle = (character = []) => {
    if (character !== null) {
      setCharacter(character)
      setTimeout(() => {
        console.log('Character', character)
      }, 1000)
    }
    console.log('Objeto', { character })
    setModal(!modal)
  }

  return (
    <div className='charactersContainer'>
      {characters.map(character => (
        <div className='character' onClick={() => toggle(character)} key={character.id}>
          <img className='image' src={character.image} alt={character.name} />
          <div className='characterName'>
            {character.name}
          </div>
          <div className='characterStatus'>
            {character.status}
          </div>
        </div>))}
      <CharacterModal character={character} episode={episodes} toggle={toggle} modal={modal} />
    </div>
  )
}

export default Character
