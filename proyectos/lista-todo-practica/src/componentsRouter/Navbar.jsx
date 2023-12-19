import { Link } from "react-router-dom"

const Navbar = ({setSearch}) => {

  return (
    <div className="app4-navbar" >
      <input type="text" className="app4-input" onChange={(e)=> setSearch(e.target.value)} />
      <ul className="app4-lista" >
        <Link to={'./'} >
          <li>Home</li>
        </Link>
        <Link to={'./post'} >
          <li>Post</li>
        </Link>
        <Link to={'./contact'} >
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar