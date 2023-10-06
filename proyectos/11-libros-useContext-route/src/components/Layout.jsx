import Navbar from './Navbar'
import PropTypes from 'prop-types'

const Layout = ({children}) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout