import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <h2>Alvaro Neira Riveros</h2>
      <div>
        <a style={{display:'flex'}} href="https://github.com/Neira21">
           GitHub <FaGithub color="blue" size={25} />
        </a>
      </div>      
    </div>
  )
}

export default Footer
