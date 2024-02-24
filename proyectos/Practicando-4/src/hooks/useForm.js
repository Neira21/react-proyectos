import { useState } from "react"

const useForm = (initialState = {}) => {

  const [formState, setFormState] = useState(initialState)

  const InputChange = ({target}) => {
    const {name, value} = target
    
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return {
    ...formState,
    formState,
    InputChange
  }
}

export default useForm