import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  return <div>
    <button className="btn" onClick={()=>{setToggle(!toggle)}}>Toggle Component</button>

    { toggle && <RandomComponent /> } 
  </div>
};

const RandomComponent = () =>{
  // [1]
  useEffect(()=>{
    console.log("Hey There, Hope all is good!")
  },[])
  return <h4> Random component initiated</h4> 
}

export default CleanupFunction;
