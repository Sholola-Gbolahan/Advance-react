import React, { useState } from 'react'
import {people} from '../data'

const UseStateChallenge = () => {

    const [peopledata, setPeopledata] = useState(people)

    const handleRemove = (id) => {
        console.log(id)
    }

const removeAll = () => {
    setPeopledata([])
}


  return (
    <div>
         {peopledata.map( (person) => {
            const {id,name} =  person;
        return (
            <div key={id}>

            <p>{name}</p>

            <button className="btn" onClick={handleRemove(id)}> Remove </button>

            </div>

        ) 
    }) }

    <button className="btn" onClick={removeAll}> Remove all</button>
    </div>
   
  )
}

export default UseStateChallenge 