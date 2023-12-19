/* eslint-disable */
import { useState } from "react"

//import useNavigate
import {useNavigate} from 'react-router-dom'
import api from '../api/posts'


const Post = ({posts, setPosts}) => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const navigate = useNavigate()
  
  const agregarPost = async (e) => {
    e.preventDefault()
    const id = crypto.getRandomValues(new Uint32Array(1))[0]
    //date fecha y hora actual
    const dateTime = new Date().toLocaleString()
    const newPost = {id, title:title, dateTime:dateTime,  body:body}
    try {
      const response = await api.post('/posts', newPost)
      const allPost = [response.data, ...posts ]
      console.log(allPost)
      setPosts(allPost)
      setTitle('')
      setBody('')
      navigate('/')  
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div className="app4-post">
      <h2>New Post</h2>
      <form className="app4-post-form" onSubmit={agregarPost}>
        <div className="app4-post-title">
          <label>Title</label>
          <input 
            onChange={(e)=> setTitle(e.target.value)} 
            type="text" 
            value={title} />
        </div>

        <div className="app4-post-content" >
          <label>Post</label>
          <input 
            type="text"
            onChange={(e)=> setBody(e.target.value)} 
            value={body} />
        </div>
        <button type="submit" className="app4-post-button" >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Post