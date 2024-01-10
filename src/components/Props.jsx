import React from 'react'
import list from './list'

const Props = () => {
    const Card = (props) => {
        return <div className='p-4 '>
            <h2 className='mb-2 text-2xl font-bold'>{props.name}</h2>
            <img src={props.image} alt="Halibel" className='rounded-lg'/>
            <h2>{props.rank}</h2>
        </div>
    }
  return (
    <div className=''>
        <h1 className='text-3xl font-bold'>My Arancar List</h1>
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
    </div>
  )
}

export default Props