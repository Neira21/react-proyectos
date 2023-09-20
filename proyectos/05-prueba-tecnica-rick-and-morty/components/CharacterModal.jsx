import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const CharacterModal = ({ character, episode, modal, toggle }) => {
  return (
    <Modal isOpen={modal} className='modal-dialog modal-dialog-scrollable'>
      <ModalHeader>
        {character.name}
      </ModalHeader>
      <ModalBody>
        <table>
          <tbody>
            <tr>
              <td>
                <img className='img-fluid' src={character.image} alt={character.name} />
              </td>
              <td className='px-3'>
                <p> Estado: {character.status}</p>
                <p>Especie: {character.species}</p>
                Tipo: {!character.type ? <p>Desconocido</p> : <p>{character.type}</p>}
                <p>Género: {character.gender}</p>
              </td>
            </tr>
            <tr>
              <td>
                Lista de episodios
              </td>
            </tr>
          </tbody>
        </table>
      </ModalBody>
      <ModalFooter>
        <Button color='danger' onClick={toggle}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  )
}

export default CharacterModal
