/* eslint-disable */
import {useState} from 'react'

const Formulario = ({postComment}) => {
  const [newComment, setNewComment] = useState({
    name: '',
    body: ''
  })


  const handleForm = (e) => {
    e.preventDefault()
    const newValue = {
      id: 503,
      postId: 1,
      name: newComment.name,
      body: newComment.body
    }
    postComment(newValue)
    setNewComment({
      name: '',
      body: ''
    })
  }

  return (
    <form className='formulario' onSubmit={handleForm}>
      <input type="text" placeholder="Nombre" value={newComment.name} onChange={
        (e) => setNewComment({...newComment, name: e.target.value})
      } />
      <input type="text" placeholder="Comentario" value={newComment.body}  onChange={
        (e) => setNewComment({...newComment, body: e.target.value})
      } />
      <button>Agregar Comentario</button>
    </form>
  )
}

export default Formulario