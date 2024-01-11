import React, {useState} from 'react'

const Index = () => {
  const [count, setCount] = useState(0);

  const increase = () =>{
    setCount(count + 1);
  }

  return (
    <div className='flex justify-center items-center'>
      <div className=' justify-center items-center'>
        <h2 className='text-6xl'>{count}</h2>
        <button className='bg-blue-300 p-2 text-3xl px-2 rounded-lg' onClick={increase}>+</button>
      </div>
    </div>
  )
}

export default Index