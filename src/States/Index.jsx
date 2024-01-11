import React, {useState} from 'react'

const Index = () => {

  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1 className='text-4xl'>{count}</h1>
      <button className='bg-blue-300 p-2 px-2 mx-2 rounded-lg' onClick={decrease}>-</button>
      <button className='bg-blue-300 p-2 px-2 mx-2 rounded-lg' onClick={increase}>+</button>
    </div>
  )
}

export default Index