import React from 'react'

const Note = (props) => {
  return (
    <div className=' shadow-lg mb-3 w-1/4 m-3 p-3 rounded-lg border border-gray bg-white' contentEditable="false">
        <h1 className='font-bold'>{props.title}</h1>
        <p>{props.content}</p>
    </div>
  )
}

export default Note