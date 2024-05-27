import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  console.log('Render')

  return <div>
    <button className="btn" onClick={()=>{setToggle(!toggle)}}>Toggle Component</button>

    { toggle && <RandomComponent /> } 
  </div>
};

const RandomComponent = () =>{

  useEffect(()=>{
  const someFunc =()=> {

  }

  // [1]
  window.addEventListener('scroll',someFunc)

  // [2]
  return ()=>{
    window.removeEventListener('scroll',someFunc)
  }

  },[])
  return <h4> Random component initiated</h4> 
}

export default CleanupFunction;
