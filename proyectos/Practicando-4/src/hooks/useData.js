/* eslint-disable */
import { useEffect, useState } from 'react'
export const useData = (url) => {
  const [data, setData] = useState({
    users: [],
    loading: true,
    error: null
  })
  const fetchUsers = async () => {
    try {
      const response = await fetch(url)
      const info = await response.json()
      setData({
        users: info, loading: false, error: null
      })
      
    } catch (error) {
      setData({
        users: [], loading: false, error: error
      }) 
    }
  }
  useEffect(()=>{ fetchUsers() }, [])
  return {
    users: data.users, loading: data.loading, error: data.error
  }
}
