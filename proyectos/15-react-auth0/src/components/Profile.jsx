import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
  const {user, isAuthenticated, isLoading} = useAuth0()
  return (
    <div>
      {user}
    </div>
  )
}

export default Profile