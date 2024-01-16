import React, { useState } from 'react'

const Form = () => {

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  const updateFName = (event) => {
    const firstName = event.target.value;
    setFName(firstName);
  }

  const updateLName = (event) => {
    const lastName = event.target.value;
    setLName(lastName);
  }

    // return (
    //     <>
    //     <div className='flex items-center justify-center min-h-screen bg-blue-400'>
    //         <div className=''>
    //             <h1 className='text-4xl'>Hello {fname} {lname}</h1>
    //             <form>
    //                 <div className='grid'>
    //                     {/* assigning the value of the state to the input  */}
    //                     <input type="text" placeholder="What's your First Name" onChange={updateFName} className='p-2 bg-transparent border my-2 text-black' value={fname}/>
    //                     <input type="text" placeholder="What's your Second Name" onChange={updateLName} className='p-2 bg-transparent border my-2 text-black' value={lname}/>
    //                     <button className='p-2 bg-blue-300 rounded-lg mx-2 my-2'>Submit</button>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    //     </>
    //   )

      return (
        <>
             <div className='flex items-center justify-center min-h-screen bg-blue-400'>
             <div className=''>
                 <h1 className='text-4xl'>Hello </h1>
                 <form>
                     <div className='grid'>
                         {/* assigning the value of the state to the input  */}
                         <input type="text" placeholder="What's your First Name"  className='p-2 bg-transparent border my-2 text-black' />
                         <input type="text" placeholder="What's your Second Name"  className='p-2 bg-transparent border my-2 text-black'/>
                         <button className='p-2 bg-blue-300 rounded-lg mx-2 my-2'>Submit</button>
                     </div>
                 </form>
             </div>
         </div>
        </>
      )
}

export default Form