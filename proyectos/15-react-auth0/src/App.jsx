import './App.css'
import { LoginButton } from './components/LoginButton'
import Profile from './components/Profile'
  

function App() {
  
  return (
    <div className='App'>
      <h1>Aplicación Auth0</h1>
      <LoginButton />
      <Profile />    
    </div>
  )
}

export default App
