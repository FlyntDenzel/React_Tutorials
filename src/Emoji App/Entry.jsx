import React from 'react'

const Entry = (props) => {
  return (
    <div className='border bg-white w-11/12 flex justify-center items-center m-3 rounded-lg p-3'>
        <div className=''>
            <h1 className='text-5xl flex justify-center items-center py-2'>{props.image}</h1>
            <h2 className='flex justify-center items-center font-bold text-2xl'>{props.name}</h2>
            <h2 className='p-3'>{props.meaning}</h2>
        </div>
    </div>
  )
}

export default Entry