import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [text, setText] = useState("")

    const handleChange = (event) =>{
        // console.log(event.target.value);
        setName(event.target.value)
    }

    const handleClick = (event) => {
        setText(name)
        setName("")
        event.preventDefault;
    }
    return (
        <>
        <div className='flex items-center justify-center min-h-screen bg-blue-400'>
            <div className=''>
                <h1 className='text-4xl'>Hello {text}</h1>
                <form onSubmit={handleClick}>
                    <div className='grid'>
                        <input type="text" placeholder="What's your name" value={name} onChange={handleChange}/>
                        <button className='p-2 bg-blue-300 rounded-lg mx-2 my-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
      )
}

export default Form