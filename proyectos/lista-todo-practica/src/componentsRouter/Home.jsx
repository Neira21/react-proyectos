/* eslint-disable */

import { Link } from "react-router-dom"

const Home = ({posts}) => {

  const postResumido = (body) => {
    const resumen = body.split(' ').slice(0, 10).join(' ')
    return resumen
  }

  return (
    <div>
      <h2>Home</h2>
      {posts.length === 0 ? <p>No hay posts</p> : 
      <div className="app4-posts-container" >
      {posts.map(post => (
        <div key={post.id} className="app4-posts" >
          <h2>{post.title}</h2>
          <p>{post.dateTime}</p>
          <p style={{marginBottom:'20px'}} >{postResumido(post.body)}...</p>
          <Link to={`/post/${post.id}`} >Read more</Link>
        </div>
        ))
      }
    </div>
      }
      
 
    </div>
  )
}

export default Home