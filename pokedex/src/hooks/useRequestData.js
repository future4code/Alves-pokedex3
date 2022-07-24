import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useRequestData = (url) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setIsLoading(true)
    axios.get(url)
      .then((res) => {
        setIsLoading(false)
        setData(res.data)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
        console.log(err.response)
      })
  }, [url])

  return (
    { data, isLoading, error }
  )
}

export default useRequestData