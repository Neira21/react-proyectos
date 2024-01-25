/* eslint-disable */

import { Link } from "react-router-dom"

const Navbar = ({HandleMenu}) => {  
  return (
    <div className="px-7 py-4 flex flex-col absolute right-0 top-[-8px] w-[240px] h-full bg-slate-50 ">
      <div className="bg-slate-400 absolute right-6 w-10 h-10 flex items-center justify-center cursor-pointer text-center rounded-full "  onClick={HandleMenu} > X </div>
      <Link className="m-[18px] cursor-pointer" to={'/about'}> Acerca de </Link>
      <Link className="m-[18px] cursor-pointer " to={'/projects'}> Projects</Link>
      <Link className="m-[18px] cursor-pointer " to={'/movies'}> Movies </Link>
      <Link className="m-[18px] cursor-pointer " to={'/todo'}> ToDo </Link>
    </div>
  )
}

export default Navbar