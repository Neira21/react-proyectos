import { Navigate, Outlet } from "react-router-dom"
// outlet, en este componente se renderizan los componentes hijos de un componente padre

const ProtectedRouter = ({children, isAllowed, redirecTo='/landingpage'}) => {
  if(!isAllowed) {
    return <Navigate to={redirecTo}></Navigate>
  }
  return (
    children ? children : <Outlet />
  )
}

export default ProtectedRouter