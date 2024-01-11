import React from 'react'

const States = () => {

    let isDone = false;
    const strikeThrough = {textDecoration: "line-through"}

    const strike = () => {
        document.getElementById("root").style.textDecoration = "line-through"
    }

    const unstrike = () => {
        document.getElementById("root").style.textDecoration = null
    }
  return (
    <div>
        <h1 style={isDone ? strikeThrough : null}>Do something not really stupid </h1>
        <button onClick={strike} className='bg-blue-400 p-2 rounded-lg'>Strike</button>
        <button onClick={unstrike} className='bg-blue-400 p-2 rounded-lg'>Unstrike</button>
    </div>
  )
}

export default States