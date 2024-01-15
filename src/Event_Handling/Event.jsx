import React, { useState } from 'react'

const Event = () => {

  const [text, setText] = useState("Hello")

  const handleClick = () => {
    setText("Submitted");
  }

  return (
    <>
    <div className='flex justify-center items-center '>
        <div>
            <h1 className='text-4xl'>{text}</h1>
            <div>
                <input type="text" placeholder="What's your name" />
                <button className='p-2 bg-blue-300 rounded-lg mx-2' style={{backgroundColor:"red"}} onClick={handleClick}>Submit</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Event