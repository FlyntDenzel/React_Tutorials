import React, { useState } from 'react'

const Exercise = () => {

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    })

    const handleChange = (event) =>{
        // const name = event.target.name;
        // console.log(name);
        // const value = event.target.value;
        // console.log(value);

        const {value, name} = event.target;
        // console.log(name);
        setContact((prevContact) => {
            if (name === "fName") {
                return {
                    fName: value,
                    lName: prevContact.lName,
                    email: prevContact.email
                }
            }
            else if (name === "lName") {
                return {
                    fName: prevContact.fName,
                    lName: value,
                    email: prevContact.email
                }
            }
            else if (name === "email") {
                return {
                    fName: prevContact.fName,
                    lName: prevContact.lName,
                    email:value
                }
            }
        })
    }

  return (
    <>
       <div className='flex items-center justify-center min-h-screen bg-blue-400'>
             <div className=''>
                 <h1 className='text-4xl flex justify-center items-center'>
                    Hello {contact.fName} {contact.lName}
                 </h1>
                 <p className='flex justify-center items-center'>{contact.email}</p>
                 <form>
                     <div className='grid'>
                         <input type="text" placeholder="What's your First Name"  className='p-2 bg-transparent border my-2 text-black'  onChange={handleChange} name='fName' value={contact.fName}/>
                         <input type="text" placeholder="What's your Second Name"  className='p-2 bg-transparent border my-2 text-black' onChange={handleChange} name='lName' value={contact.lName}/>
                         <input type="text" placeholder="What's your Email"  className='p-2 bg-transparent border my-2 text-black' onChange={handleChange} name='email' value={contact.email}/>
                         <button className='p-2 bg-blue-300 rounded-lg mx-2 my-2'>Submit</button>
                     </div>
                 </form>
             </div>
         </div>
    </>
  )
}

export default Exercise