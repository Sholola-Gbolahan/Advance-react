import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
const [people,setPeople] = useState(data)

const removeItem = (id) => {
  const newPeople = people.filter( (person) => person.id !== id );
  setPeople(newPeople)
}


const clearAllItems = () => {
  setPeople([]);
}

  return(
    <>
    {people.map( (person) => {
      const {id,name} = person 
      // console.log(person)
      return (
        <div key={id}>
          <p> {name} </p>
          <button className="btn" onClick={ () => removeItem(id)}>remove</button>
        </div>
      )

    })}

    <button className="btn" style={{marginTop:'2rem'}} onClick={clearAllItems}>Clear All</button>
    </>
  );
};

export default UseStateArray;
