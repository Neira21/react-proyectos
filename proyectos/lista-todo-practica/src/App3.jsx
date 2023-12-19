 /* eslint-disable */

import { useEffect, useState } from "react"
import './index2.css'

const Button = ({children, buttonText, value, setValue}) => {
  return (
    <button className={`app3-option ${value===buttonText ? 'select': null}`} onClick={()=>setValue(buttonText)} >
      {children}
    </button>
  )
}


const Menu = ({value, setValue}) => {
  return (
    <form className='app3-menu' onSubmit={(e)=> e.preventDefault()} >
      <Button buttonText='users'  value={value} setValue={setValue} >Users</Button>
      <Button buttonText= 'posts' value={value} setValue={setValue} >Posts</Button>
      <Button buttonText='comments' value={value} setValue={setValue} >Comments</Button>
    </form>
  )
}


const App3 = () => {
  const [value, setValue ] = useState('users')
  const [items, setItems] = useState([])

  useEffect(()=> {
    const obtenerDatos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${value}`)
      const data = await response.json()
      setItems(data)
    }
    obtenerDatos()
    
  },[value])

  return (
    <div>
      <Menu value={value} setValue={setValue}/>
      {/* <ul>
        {items.map(element => 
          <li style={{margin:'1rem 0'}} key={element.id}>{JSON.stringify(element)}</li>
        )}
      </ul> */}

      <div className="table-container">
        <table>
          <tbody>
            {items.map(element => 
              <tr key={element.id} >
                {Object.entries(element).map(([key, value]) =>
                  <td key={key}>{JSON.stringify(value)}</td> 
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App3