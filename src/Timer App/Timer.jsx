import React, { useState } from 'react'

const Timer = () => {
    const [Time, setTime] = useState("TIME");
    const getTime = () =>{
        let date = new Date();
        let newDate = date.toLocaleTimeString();
        setTime(newDate)
        // console.log(newDate)
    }
  return (
    <div className='flex justify-center items-center '>
        <div>
            <p className='text-5xl'>{Time}</p>
            <button onClick={getTime} className='p-2 bg-blue-400 rounded-lg'>Get Time</button>
        </div>
    </div>
  )
}

export default Timer