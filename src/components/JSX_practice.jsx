import React from 'react'
import bear from '../images/bear.png'
import house from '../images/house.png'
import flower from '../images/flower.png'

const JSX_practice = () => {
  const fname = "nchang";
  const lname = "denzel";

  const date = new Date();
  const currentYear = date.getFullYear();

  const hours = date.getHours();
  console.log(hours);

  let greeting ;
  if (hours < 12) {
    greeting = 'good morning'
  }
  else if ( hours < 18 ) {
   greeting = 'good afternoon'
  }
  else{
    greeting = 'good evening'
  }
  return (
    <div className='p-3'>
      <h1  spellCheck="false" draggable="true">created by {fname + " " + lname}</h1>
      <h1>Copyright {currentYear}</h1>

    <div className=' flex w-[200px] h-[200px]  gap-10 '>
      <img src={bear} alt="" />
      <img src={flower} alt="" />
      <img src={house} alt="" />
    </div>

    <div>
      <h1 className='p-3 text-4xl'>
        {greeting}
      </h1>
    </div>
    </div>
  )
}

export default JSX_practice