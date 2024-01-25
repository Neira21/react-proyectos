import Formulario from './components/Formulario'
import CommentsContainer from './components/CommentsContainer.jsx'

import { get, post } from './services/Comments.js'
import { useEffect, useState } from 'react'

function App() {
  const [comments, setComments] = useState([])
  
  const getComments = async () => {
    const comments = await get()
    setComments(comments)
  }
  const postComment = async (newComment) => {
    console.log(newComment)
    const response = await post(newComment)
    console.log(response)
    setComments([...comments, response])
  }

  useEffect(() => { 
    getComments()
  },[])

  return (
    <div className='app'>
      <h1>Comentarios</h1>
      <Formulario postComment={postComment} />
      <CommentsContainer comments={comments} />
    </div>
    
  )
}

export default App
