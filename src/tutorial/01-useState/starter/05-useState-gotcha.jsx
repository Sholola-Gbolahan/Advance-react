import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)


  const handleClick = () => {
    setValue ((currentState) => {
      const newSate = currentState +1;
      return newSate;
     
    });

    // Gotcha here i sthat value is starting from zero 0 on console while it's starting from 1 on UI
    // console.log(value)
  }

  return <>
      <h2>{value}</h2>
     <button className="btn" onClick={handleClick} > Click me</button>
  
  </> 
};

export default UseStateGotcha;
