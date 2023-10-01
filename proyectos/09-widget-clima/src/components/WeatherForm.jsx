import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from "./weatherForm.module.css";

const WeatherForm = ({onChangeCity}) => {
  
  WeatherForm.propTypes = {
    onChangeCity: PropTypes.func.isRequired,
  };


  const [city, setCity] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    if(value !== '')
      setCity(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onChangeCity(city)
  }

  return(
    
    <form className={styles.container} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" onChange={handleChange} value={city} />
    </form>
    
  )
}

export default WeatherForm