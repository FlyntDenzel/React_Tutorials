import React from 'react'
import Add from '../data/calculator'
import Substract from '../data/calculator'
import Multiply from '../data/calculator'
import Divide from '../data/calculator'

const Components = () => {
  return (
    <div>
      <ul className='p-3'>
        <li>{Add(1, 3)}</li>
        <li>{Substract(1, 3)}</li>
        <li>{Multiply(1, 3)}</li>
        <li>{Divide(1, 3)}</li>
      </ul>
    </div>
  )
}

export default Components