import './App.css'
import { Link, NavLink, Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DashBoard from './DashBoard'
import {LandingPage, Home1, DashBoard1, Analytics, Admin} from './pages/Index'
import { useState } from 'react'
import ProtectedRouter from './components/ProtectedRouter'

const SearchPage  = () => {
  const tacos = ['carne asada', 'pollo', 'barbacoa', 'lengua']
  return (
    <div>
      {tacos.map((taco)=>{
        return (
          <Link style={{padding:'10px'}} to={`/tacos/${taco}`} key={taco}>
            {taco}
          </Link>
        )
      })}
    </div>
  )
}

const Tacos = () => {
  const { name } = useParams()
  return(
    <div>
      <h1>Taco seleccionado</h1>
      <h4>{name}</h4>
    </div>
  )
}

const flex = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 50px',
  backgroundColor: 'lightblue',

}

/* eslint-disable */
const NavLinkRT = ({to, children, ...props }) => {
  return (
    <NavLink 
      {...props} 
      to={to} 
      className={({isActive}) => {return isActive ? 'is-active' : undefined} }
    >
      {children}
    </NavLink>
  )
}

const User = () => {
  const { user } = useParams()
  return (
    <div>
      <h1>User {user}</h1>
    </div>
  )
}

// function navigate for Routes Protected
const Navigate = () => {
  return(
    <nav style={{margin:'60px'}} >
      <ul style={{display:'flex', flexDirection:'row', fontSize:'36px'}} >
        <li><Link to='/LandingPage'>Landing</Link></li>
        <li><Link to='/home1'>Home1</Link></li>
        <li><Link to='/dashboard1'>DashBoard1</Link></li>
        <li><Link to='/analytics'>Analytics</Link></li>
        <li><Link to='/admin'>Admin</Link></li>  
      </ul>
    </nav>

  )
}



function App() {

  const [user, setUser] = useState(null)

  const login = () => {
    //peticiones al backend
    //peticiones terminadas
    setUser({id:1, username:'alvaro', permissions:['analize', 'admin']})
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <>
      <div style={flex}>
        <h1>Alvaro Neira Tacos 🌮🌮🌮</h1>
        <nav>
          <ul>
            <li><NavLinkRT to='/'>Inicio</NavLinkRT></li>
            <li><NavLinkRT to='/about'>Acerca de</NavLinkRT></li>
            <li><NavLinkRT to='/search-page'>Lista de tacos</NavLinkRT></li>
          </ul>
        </nav>
      </div>

      <div>
        <Navigate/>
      </div>
      
      {user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>} 

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/:name' element={<Tacos />} />
        <Route path='/user/:user' element={<User />} />
        <Route path='/dashboard/*' element={<DashBoard />} >
          <Route path='welcome' element={<h1>Welcome !!!</h1>} > </Route>
          <Route path='goodbye' element={<h1>GoodBye !!!</h1>} > </Route>
        </Route>

        {/* Rutas Protegidas */}

        <Route path='/landingpage' element={<LandingPage />} />
        
        <Route element={<ProtectedRouter isAllowed={user ? true : false }/>}> 
          <Route path='/home1' element={<Home1 />} />
          <Route path='/dashboard1' element={<DashBoard1 />} />
        </Route>

        <Route path='/analytics' element={
          <ProtectedRouter isAllowed={!!user && user.permissions.includes('analize')} redirecTo='/home1' >
            <Analytics />
          </ProtectedRouter>
        } />
        <Route path='/admin' element={
          <ProtectedRouter isAllowed={!!user && user.permissions.includes('admin')} redirecTo='/home1' >
            <Admin />
          </ProtectedRouter>
        } />
        <Route path='*' element={<h1>Not Found</h1>} />

      </Routes>

      

    </>
  )
}

export default App
