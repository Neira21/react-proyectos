import { useState, useRef, useEffect } from 'react'


const Form = () => {

  const [form, setForm] = useState({
    user: '',
    email: '',
    password: '',
    acept: false
  })

  const handleChange = (e) => {
    console.log(e)
    if(e.target.id=== "exampleInputUser"){
      setForm({...form, user: e.target.value})
    } else if(e.target.id === "exampleInputEmai1"){
      setForm({...form, email: e.target.value})
    } else if(e.target.id === "exampleInputPassword"){
      setForm({...form, password: e.target.value})
    }else{
      console.log("asd")
      setForm({...form, acept: e.target.acept})
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado', form)
  }

  const ref = useRef()

  useEffect(()=>{
    ref.current.focus()
  },[])

  return (
    <div style={{margin:'20px'}}>
      <form onSubmit={onSubmit} className='formulario' >
        <div className="mb-3">
          <label htmlFor="exampleInputUser" className="form-label">Usuario</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputUser" 
            value={form.user}
            onChange={handleChange}
             />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmai1" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmai1" 
            aria-describedby="emailHelp"
            value={form.email}
            ref={ref}
            onChange={handleChange}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Password</label>
          <input 
            type="password"
            className="form-control"
            id="exampleInputPassword"
            value={form.password}
            onChange={handleChange}
            />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label 
            className="form-check-label"
            htmlFor="exampleCheck1"
            value={form.acept}
            onChange={handleChange}
            >
              Aceptar términos y condiciones
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Form