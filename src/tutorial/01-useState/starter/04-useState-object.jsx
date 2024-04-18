import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "James",
    age: 24,
    hobby: "Hearing Stories",
  });

  const displayPerson = () => {
    setPerson({
      age: 30,
      name: "Dayo",
      hobby: "eading Books",
    });

    
  };

  // const [name, age, hobby] = person;

  return (
    <div>
      <h1>UseState Object Example</h1>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>Enjoys : {person.hobby}</h2>

      <button onClick={displayPerson} className="btn">
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
