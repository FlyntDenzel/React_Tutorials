import React from 'react'
import Form from './Form'
import Register from './Register';

const View = () => {
    let isRegisterdUser = false;
  return (
    <div>
        {isRegisterdUser ? <Form /> : <Register />}
        
    </div>
  )
}

export default View