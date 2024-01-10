import React from 'react'

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
  return (
    <div className=' static'>
        <div>
            <h1 className=' absolute bottom-0 left-1/2'>Copyright © {currentYear}</h1>
        </div>
    </div>
  )
}

export default Footer