import React from 'react'

const Intro = () => {
    const fname = "nchang";
    const lname = "denzel";
  return (
    <div className='p-3'>
        <h1 className='font-bold text-3xl'>List of favorite games</h1>
        <ul className='pl-3'>
            <li>Call of Duty</li>
            <li>Tom's Clancy</li>
            <li>The Last of Us</li>
        </ul>
        {/* <h1>rendering of js expressions in jsx</h1> */}
            <h2>hello {fname} {lname}!</h2>
            <p>Your number is {Math.floor(Math.random() * 10)}</p>
    </div>
  )
}

export default Intro