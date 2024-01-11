import React from 'react'

let isLoggedIn = false;
const renderConditionally = () => {
    if (isLoggedIn) {
        return  <h1 className='flex justify-center items-center text-5xl mb-2 text-white'>Hello</h1>
    }
    else{
        return (
            <div className='absolute top-1/3 left-1/3'>
            <form action="" className='grid '>
                <input type="text" placeholder='Username' className='mb-2 p-2 border rounded bg-transparent'/>
                <input type="text" placeholder='Password' className='mb-2 p-2 border rounded bg-transparent'/>
                <button type="submit" className='bg-white p-2 font-bold text-2xl text-blue-300'>Login</button>
            </form>
        </div>
        )
    }
}

const Login = () => {
  return (
    <>
        <div className='bg-blue-300 h-screen static'>
           {renderConditionally()}
        </div>
    </>
  )
}

export default Login