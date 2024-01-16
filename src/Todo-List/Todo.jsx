import React from 'react'

const Todo = () => {
  return (
    <>
        <div className='flex justify-center items-center min-h-screen bg-blue-300'>
            <div className='border w-[400px] h-[500px] rounded-lg bg-white'>
                <div className='flex justify-center items-center'>
                    <h1 className='bg-gray-500 text-white font-bold p-2 rounded-lg mt-3'>TODO LIST</h1>
                </div>
                <div className='flex justify-center items-center mt-20'>
                    <form>
                        <input type="text" className='bg-gray-100 mx-4 p-2 border border-gray-400 rounded-md' />
                        <button className='p-2 bg-blue-300 rounded-md '>ADD</button>
                        <ul className='m-3'>
                            <li>hey</li>
                            <li>hey</li>
                        </ul>
                    </form>
                </div>
                <div className='flex justify-start '>
                   
                </div>
            </div>
        </div>
    </>
  )
}   

export default Todo