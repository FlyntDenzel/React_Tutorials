import React from 'react'

const Entry = () => {
  return (
    <div className='border bg-white w-2/6 flex justify-center items-center m-3 rounded-lg' contentEditable="true">
        <div className=''>
            <h1 >emoji</h1>
            <h2 >Name</h2>
            <h2 >description</h2>
        </div>
    </div>
  )
}

export default Entry