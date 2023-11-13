import { Link, Outlet } from "react-router-dom"

const DashBoard = () => {
  return (
    <div>
      <div>DashBoard 111</div>
      <Outlet />
      <br />
      <Link to='welcome'>Welcome</Link>
      <br />
      <Link to='goodbye'>GoodBye</Link>
      
    </div>
  )
}

export default DashBoard