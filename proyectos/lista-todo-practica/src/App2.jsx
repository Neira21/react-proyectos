import { useEffect, useState } from "react"
import './index2.css'

const App2 = () => {
  const URL_API = 'https://jsonplaceholder.typicode.com/todos'

  const [todos, setTodos ] = useState([]) 
  const [userId, setUserId] = useState(1)


  useEffect(()=> {
    const ObtenerTodos = async (userId) =>{
      const response = await fetch(URL_API)
      const data = await response.json()
      const filtrado = data.filter((todo) => todo.userId === userId)
      
      setTodos([...filtrado])
    }
    ObtenerTodos(userId)
  },[userId ])

  const next = () => {
    if(userId === 10) return
    setUserId((anterior) => anterior +1)
  }

  const prev = () => {
    if(userId === 1) return
    setUserId((anterior) => anterior -1)
  }

  return (
    <main style={{border:'1px solid #000', margin:'5px auto', display:"flex", flexDirection:'column', gap:'10px', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{width:'100%', display:'flex', justifyContent:'space-around', padding:'15px 0', borderBottom: '2px solid #000'}}>
        <button onClick={prev} style={{fontSize:'40px', padding:'10px', color:'white', background:'blue', boxShadow:'5px 2px 5px #000' }}>Prev</button>
        <button onClick={next} style={{fontSize:'40px', padding:'10px', color:'white', background:'blue', boxShadow:'5px 2px 5px #000' }}>Next</button>
      </div>
      
      <div style={{width:'460px'}}>
        <h1>Tareas del usuario {userId}</h1>
        <h3>Usando table</h3>

        <table style={{width:'100%', fontSize:['18px']} }>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody className="fila" >
            {todos.map((todo)=> 
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'Completado' : 'Pendiente'}</td>
              </tr>)}
          </tbody>
        </table>
        
        <br />
        <h3>Sin usar table</h3>

        <div style={{marginBottom:'100px'}} className="clase">
          <div style={{display:'flex',gap:'10px', margin:'20px 0' }} >
            <b style={{width:'20px'}} >Id</b>
            <b style={{width:'450px', textAlign:'left'}} >Titulo</b> 
            <b style={{width:'100px',textAlign:'left'}} >Estado</b>
          </div>
        {todos.map((todo)=> 
          <div key={todo.id} style={{display:'flex',gap:'10px', margin:'20px 0' }} >
            <p style={{width:'20px'}} >{todo.id}</p>
            <p style={{width:'450px', textAlign:'left'}} >{todo.title}</p> 
            <p style={{width:'100px',textAlign:'left'}} >{todo.completed ? 'Completado' : 'Pendiente'}</p>
          </div>)}
        
        </div>
      </div>
      
      <p style={{position:'fixed', bottom:'0px', backgroundColor:'blue',width: '100%', textAlign:'center'}} >Hecho por: <b>Alvaro Neira Riveros</b></p>
    </main>
  )
}

export default App2