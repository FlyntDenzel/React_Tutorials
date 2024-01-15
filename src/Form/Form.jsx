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
        event.preventDefault();
    }
    return (
        <>
        <div className='flex items-center justify-center min-h-screen bg-blue-400'>
            <div className=''>
                <h1 className='text-4xl'>Hello {text}</h1>
                <form onSubmit={handleClick}>
                    <div className='grid'>
                        <input type="text" placeholder="What's your First Name" className='p-2 bg-transparent border my-2 text-black' value={name} onChange={handleChange}/>
                        <input type="text" placeholder="What's your Second Name" className='p-2 bg-transparent border my-2 text-black'/>
                        <button className='p-2 bg-blue-300 rounded-lg mx-2 my-2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
      )
}

export default Form