import React from 'react'

const Card = (props) => {
    return <div className='p-4'>
        <div className='border'>
            <h2 className='mb-2 text-2xl font-bold'>{props.name}</h2>
            <img src={props.image} alt="Halibel" className='rounded-lg'/>
            <h2>{props.rank}</h2>
        </div>
    </div>
}

export default Card