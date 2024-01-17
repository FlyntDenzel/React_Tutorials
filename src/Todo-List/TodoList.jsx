import React, { useState } from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [item, setItem] = useState([]);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setTodo(newValue);
    }

    const addItem = (event) => {
        event.preventDefault();

        setItem((prevItem) => {
            return [...prevItem, todo];
        })
        setTodo("")
    }
  return (
    <>
        <div className='flex justify-center items-center min-h-screen bg-yellow-300'>
            <div className='border w-[400px] h-[500px] rounded-lg bg-white'>
                <div className='flex justify-center p-2 mt-3 font-bold text-4xl'>
                    <h1 className='bg-[#8af0ce] p-2 rounded-tr-xl rounded-bl-xl text-white'>TODO LIST</h1>               
                </div>
                <div className='flex justify-center mt-10'>
                    <form>
                        <input type="text" placeholder='enter task here' className='p-2 mx-4 bg-transparent border border-gray-900 rounded-md' value={todo} name='todo' onChange={handleChange}/>
                        <button className='border border-black p-2 px-3 rounded-lg' onClick={addItem}>Add</button>
                    </form>
                </div>
                <div className='px-10 mt-4'>
                        <ul>
                            {
                                item.map((newItem) => {
                                    return(
                                        <li className=''>{newItem}</li>
                                        )
                                    })
                                }
                        </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoList