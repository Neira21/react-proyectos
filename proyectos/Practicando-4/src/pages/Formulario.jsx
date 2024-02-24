import Form from '../components/formulario/Form'
import CalculosPesados from '../components/formulario/CalculosPesados'
import CallbackComponent from '../components/formulario/CallbackComponent'

const Formulario = () => {
  return (
    <>
    <CallbackComponent />
    <CalculosPesados></CalculosPesados>
    <Form />
    </>
  )
}

export default Formulario