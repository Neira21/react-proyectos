import { useState } from "react"
import { useAppContext } from "../store/Store"
import Layout from "../components/Layout"
import { useNavigate } from "react-router"

const Create = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [cover, setCover] = useState('')
  const [intro, setIntro] = useState('')
  const [completed, setCompleted] = useState(false)

  const store = useAppContext()

  const navigate = useNavigate()


  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    switch (name){
      case "title":
        setTitle(value)
        break;
      case "author":
        setAuthor(value)
        break;
      case "intro":
        setIntro(value)
        break;
      case "completed":
        setCompleted(e.target.checked)
        break;
      default:
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed
    }
    //TODO MANDAR LIBRO
    store.createItem(newBook)
    navigate('/')

  }

  const handleOnChangeFile = (e) => {
    const element = e.target
    const file = element.files[0]
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onloadend = () => {
      setCover(reader.result.toString())
    }
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <input type="text" name="title" value={title} onChange={handleChange} />
        </div>
        <div>
          <div>Author</div>
          <input type="text" name="author" value={author} onChange={handleChange} />
        </div>
        <div>
          <div>Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>{cover ? <img src={cover} width={200} alt="preview" /> : '' } </div>
        </div>
        <div>
          <div>Introduction</div>
          <input type="text" name="intro" value={intro} onChange={handleChange} />
        </div>
        <div>
          <div>Completed</div>
          <input type="checkbox" name="completed" value={completed} onChange={handleChange} />
        </div>
        <input type="submit" value="Registrar Libro" />
      </form>
    </Layout>
  )
}

export default Create