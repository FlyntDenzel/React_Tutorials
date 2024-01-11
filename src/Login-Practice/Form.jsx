import React from 'react'
import Input from './Input'

const Form = () => {
  return (
        <div className='absolute top-1/3 left-1/3'>
            <form action="" className='grid '>
                {/* <input type="text" placeholder='Username' className='mb-2 p-2 border rounded bg-transparent'/>
                <input type="text" placeholder='Password' className='mb-2 p-2 border rounded bg-transparent'/> */}
                <Input 
                    type="text"
                    placeholder="Username"
                />
                <Input 
                    type="password"
                    placeholder="Password"
                />
                 {/* <Input 
                    type="password"
                    placeholder="Confirm password"
                /> */}
                <button type="submit" className='bg-white p-2 font-bold text-2xl text-blue-300'>Login</button>
            </form>
        </div>
  )
}

export default Form