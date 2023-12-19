/* eslint-disable */
import { useParams } from "react-router-dom"
import {useNavigate} from 'react-router-dom'

const PostSelect = ({posts, handleDelete, handleEdit}) => {
  const { id } = useParams()
  const FindPost = posts.find((post) => post.id === parseInt(id))
  const navigate = useNavigate()

  return (
    <div className="app4-post-container">
      <h2>{FindPost.title}</h2>
      <p style={{margin:'20px 0'}}>{FindPost.dateTime}</p>
      <p>{FindPost.body}</p>
      
      <button onClick={()=>{navigate('/') }} style={{color:'white', backgroundColor:'Green', padding:'10px 20px'}} >Edit</button>
      <button onClick={()=>{handleDelete(FindPost.id), navigate('/') }} style={{color:'white', backgroundColor:'red', padding:'10px 20px'}} >Delete</button>
    </div>
  )
}

export default PostSelect