import './Contador.css'

const Contador = ({children}) =>{
    return(
      <>
        <div className='contador'>
            {children}
        </div>
      </>
    )
}
export default Contador