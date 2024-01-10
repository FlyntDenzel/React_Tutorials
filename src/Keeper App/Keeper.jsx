import React from 'react'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import notes from './notes'

function viewNote(note) {
  return <Note 
      title = {note.title}
      content = {note.content}
  />
}

const Keeper = () => {
  return (
    <div className=''>
      <Header />
      <div>
          {notes.map(viewNote)}
      </div>
      <Footer />
    </div>
  )
}

export default Keeper