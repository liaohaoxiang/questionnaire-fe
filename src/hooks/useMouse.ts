import { useState, useEffect } from 'react'

function useMouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handlePosition(e: MouseEvent) {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handlePosition)

    return () => {
      window.removeEventListener('mousemove', handlePosition)
    }
  }, [])

  return mousePosition
}

export default useMouse
