import { useState, useEffect } from 'react'

const useData = (url) => {
  const [data, setData] = useState({
    posts: [],
    loading: true,
    error: null
  })

  const getData = async () => {
    try {
      const response = await fetch(url)
      const data1 = await response.json()
      setData({
        posts: data1,
        loading: false,
        error: null
      })
    } catch (err) {
      setData({
        posts: [],
        loading: false,
        error: err
      })
      console.log(data)
    }
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [url])

  return {
    data,
    setData
  }
}

export default useData
