import { useEffect, useState } from 'react'

function ClosureTrap() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count) // 这里拿到的count一直都是初始值0, 闭包陷阱
    }, 1000)
    return () => clearInterval(timer)
  }, [count]) // 除非在这里加上count作为依赖,每次count更新,effect的里的count闭包会进行更新

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ClosureTrap
