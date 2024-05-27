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
  // [1]
  useEffect(()=>{
    console.log("Hey There, Hope all is good!")
// [1,3]
  const intId =  setInterval(()=>{ 
      console.log('Hello from interval')
    },100)

    // [2, 4]
    return () => {
      console.log('Clear interval')
      clearInterval(intId)
    }

  },[])
  return <h4> Random component initiated</h4> 
}

export default CleanupFunction;
