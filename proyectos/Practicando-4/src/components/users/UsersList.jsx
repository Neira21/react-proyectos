import { useData } from '../../hooks/useData'

const UsersList = () => {

  const { users, loading, error } = useData('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Hubo un error</p>}
      <table className="table table-striped mb-10">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default UsersList