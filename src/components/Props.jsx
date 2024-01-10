import React from 'react'
import list from './list'
import Card from './Card'

const Props = () => {
   
  return (
    <div className=''>
        <h1 className='text-3xl font-bold'>My Arancar List</h1>
        <div className='grid grid-cols-3'>
            <Card 
                name = {list[0].name}
                image = {list[0].image}
                rank = {list[0].rank}
                />
            <Card 
                name = {list[1].name}
                image = {list[1].image}
                rank = {list[1].rank}
            />
            <Card 
                name = {list[2].name}
                image = {list[2].image}
                rank = {list[2].rank}
                />
            <Card 
                name = {list[3].name}
                image = {list[3].image}
                rank = {list[3].rank}
            />
            <Card 
                name = {list[4].name}
                image = {list[4].image}
                rank = {list[4].rank}
                />
        </div>
    </div>
  )
}

export default Props