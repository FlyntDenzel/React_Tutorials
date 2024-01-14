import React from 'react'
import animals from '../data/data';
import cars from '../data/practice';
import Tables from './Tables';

// Destructuring Arrays
// console.log(data);
// const [cat, dog] = animals;
// console.log(cat);

// Destructuring Objects
// const {name, sound, foodRequirements: {food, water}} = cat
// console.log(water)
// console.log(dog);

const [honda, tesla] = cars;
// console.log(cars);

const {speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {speedStats: {topSpeed: teslaTopSpeed}} = tesla;
// console.log(hondaTopSpeed);
// const {model, speedStats: {topSpeed, zeroToSixty}} = tesla;

const {coloursByPopularity : [hondaTopColour]} = honda
const {coloursByPopularity : [teslaTopColour]} = tesla

const Array = () => {
  return (
    <>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
    </table>
    </>
  )
}

export default Array

// const viewTable = () => {
//   return <Tables 
//       name = {cars.model}
//       key = {cars.id}
//   />
// }

// const Table = () => {
//   return (
//     <div>
//       {cars.map(viewTable)}
//     </div>
//   )
// }

// export default Table