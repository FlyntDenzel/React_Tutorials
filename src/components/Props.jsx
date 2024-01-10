import React from 'react'

const Props = () => {
    const Card = (props) => {
        return <div className='p-4 '>
            <h2 className='mb-2'>{props.name}</h2>
            <img src={props.image} alt="Halibel" className='rounded-lg'/>
            <h2>{props.rank}</h2>
        </div>
    }
  return (
    <div>
        <h1 className='text-3xl font-bold'>My Arancar List</h1>
        <Card 
            name = "Halibel"
            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKYZdG5YoKzCo9LljmZhVaRpyALLu1yGN9Q&usqp=CAU"
            rank = "Espada Tres"
        />
        <Card />
        <Card />
    </div>
  )
}

export default Props