import React from 'react'
import Entry from './Entry'

const Emoji = () => {
  return (
    <div>
        <div className='flex justify-center items-center pt-2'>
            <h1 className='bg-[#00ffc8] w-2/3 p-2 text-5xl font-bold flex justify-center items-center text-white mb-3'>EmojiPedia</h1>
        </div>
        <Entry />
    </div>
  )
}

export default Emoji