import { useState, useEffect } from 'react'

function getInfo(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(performance.now().toString())
    }, 0)
  })
}

const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState('')

  useEffect(() => {
    getInfo().then(res => {
      setLoading(false)
      setInfo(res)
    })
  }, [])

  return { loading, info }
}

export default useFetch
