import { Link } from "react-router-dom"
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link className="Link" to='/'>Home</Link>
      <Link className="Link" to='/create'>Create</Link>
    </div>
  )
}

export default Navbar