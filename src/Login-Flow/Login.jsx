import React from 'react'
import Form from './Form';

let isLoggedIn = false;
const renderConditionally = () => {
    //using tenary operator to render component conditionally
    isLoggedIn === true ? <h1 className='flex justify-center items-center text-5xl mb-2 text-white'>Hello</h1> : <Form />
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