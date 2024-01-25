import Navbar from './Navbar'
import { useState } from 'react'
import hamburgerMenu from '../assets/hamburgerMenu.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(true)
  const HandleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className='flex justify-between bg-slate-400 items-center py-1'>
      <div className='ml-5' >ALVARO Neira Repositorio</div>
      <div>
        <img
          className='cursor-pointer'
          width={40}
          src={hamburgerMenu} 
          alt="HamburgerMenu" 
          onClick={HandleMenu} />
        {showMenu && <Navbar HandleMenu={HandleMenu} />}
        
      </div>
      {/* <Navbar /> */}
    </div>
  )
}

export default Header