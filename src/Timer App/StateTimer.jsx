import React, { useState } from 'react'

const StateTimer = () => {
    const [timer, setTimer] = useState("TIME");
    const getTimer = () => {
        let date = new Date();
        let time = date.toLocaleTimeString(); 
        setTimer(time);
    }
    setInterval(getTimer, 1000);
  return (
    <div className='flex justify-center items-center'>
        <div>
            <h1 className='text-5xl font-bold'>{timer}</h1>
            <button onClick={getTimer} className='p-2 bg-blue-400 rounded-lg'>Get Time</button>
        </div>
    </div>
  )
}

export default StateTimer