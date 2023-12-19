import Header from "./componentsRouter/Header"
import Footer from "./componentsRouter/Footer"

import './componentsRouter/index4.css'
import { Routes, Route, BrowserRouter} from "react-router-dom";

import Home from "./componentsRouter/Home"
import Post from "./componentsRouter/Post"
import PostSelect from "./componentsRouter/PostSelect"
import Contact from "./componentsRouter/Contact"
import Error from "./componentsRouter/Error";

import api from './api/posts'

import { useEffect, useState } from 'react'

const App4 = () => {

  const [posts, setPosts] = useState([])
  const [search, setSearch ] = useState('')
  
  const handleEdit = async (id, updatedPost) => {
    const dateTime = new Date().toLocaleString()
    // TODO
    const updatePost = {id, dateTime, }
    try {
      const response = await api.put(`/posts/${id}`, updatedPost)
      const { id: postId, title, body } = response.data
      setPosts(posts.map(post => post.id === postId ? {...response.data} : post
      ))  
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const newPosts = posts.filter(post => post.id !== id)
      setPosts(newPosts)
    }catch (error) {
      console.log(error)
    } 
  }

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    const getPosts = async () => {
      try {
        console.log('getPosts')
        const response = await api.get('/posts')
        setPosts(response.data)
        //setPosts(postsFromServer.data)  
      } catch (error) {
        if(error.response){
          console.log(error.message)
          console.log(error.status)
          console.log(error.headers)
        } else {
          console.log(`Error: ${error.message}`)
        }
      }
    }
    getPosts()
  }, [])

  return (
    <BrowserRouter>
      <div className="app4">
        <Header title='React JS Blog' search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home posts={filteredPosts} />} />
          <Route path="/post" element={<Post setPosts={setPosts} posts={posts} />} />
          <Route path="/post/:id" element={<PostSelect posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App4