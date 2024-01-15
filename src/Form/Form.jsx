import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [text, setText] = useState("")

    const handleChange = (event) =>{
        // console.log(event.target.value);
        setName(event.target.value)
    }

    const handleClick = () => {
        setText(name)
        setName("")
    }
    return (
        <>
        <div className='flex items-center justify-center min-h-screen bg-blue-400'>
            <div className=''>
                <h1 className='text-4xl'>Hello {text}</h1>
                <div className='grid'>
                    <input type="text" placeholder="What's your name" value={name} onChange={handleChange}/>
                    <button className='p-2 bg-blue-300 rounded-lg mx-2 my-2' onClick={handleClick}>Submit</button>
                </div>
            </div>
        </div>
        </>
      )
}

export default Form