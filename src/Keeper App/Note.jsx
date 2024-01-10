import React from 'react'

const Note = () => {
  return (
    <div className=' shadow-lg mb-3 w-1/4 m-3 p-3 rounded-lg border border-gray bg-white' contentEditable="false">
        <h1 className='font-bold'>This is the Note Title</h1>
        <p>This is the Note Content</p>
    </div>
  )
}

export default Note