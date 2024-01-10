import React from 'react'
import Entry from './Entry'
import emojipedia from './emojipedia'

function viewEmoji(emoji) {
    return <Entry 
        key = {emoji.id}
        image = {emoji.emoji}
        name = {emoji.name}
        meaning = {emoji.meaning}
    /> 
}

const Emoji = () => {
  return (
    <div >
        <div className='flex justify-center items-center pt-2'>
            <h1 className='bg-[#00ffc8] w-2/3 p-2 text-5xl font-bold flex justify-center items-center text-white mb-3'>EmojiPedia</h1>
        </div>
        <div className='grid grid-cols-3'>
            {emojipedia.map(viewEmoji)}
        </div>
    </div>
  )
}

export default Emoji