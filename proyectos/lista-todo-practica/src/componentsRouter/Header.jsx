import Navbar from "./Navbar"

const Header = ({title, search, setSearch}) => {
  return (
    <div className="app4-header">
      <div className="app4-header-title">
        <p>{title}</p>
      </div>
      <Navbar setSearch={setSearch} />
    </div>
  )
}

export default Header