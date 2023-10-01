import { useEffect, useState } from 'react'
import './App.css'

import WeatherForm from './components/WeatherForm'
import WeatherMainInfo from './components/WeatherMainInfo'
import Loading from './components/Loading'


function App() {
  
  const APP_URL='http://api.weatherapi.com/v1/current.json?aqi=no'
  const APP_KEY='d0419b5a08534944af4222620232909'
  
  const [weather, setWeather] = useState(null)

  const loadInfo = async (city = 'london') => {
    const response = await fetch(`${APP_URL}&key=${APP_KEY}&q=${city}`)
    const data = await response.json()
    console.log(data)
    if(data.error){
      console.log(data.error.message)
      return
    }
    setWeather(data)
  }

  const handleChangeCity = (city) =>{
    setWeather(null)
    loadInfo(city)
  }

  useEffect(() => {
    loadInfo()
  },[])

  useEffect(() => {
    document.title=`Weather | ${weather?.location?.name}}`
  },[weather])


  return (
    <div className='weatherContainer'>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  )
}

export default App
