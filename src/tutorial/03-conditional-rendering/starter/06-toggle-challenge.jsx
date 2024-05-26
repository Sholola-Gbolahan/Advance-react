import { useState } from "react";


const ToggleChallenge = () => {

  const [showAlert, setShowAlert] = useState(false)

  // const toggleAlert = () => {
  //   if (showAlert){
  //     setShowAlert(false)
  //     // [1]
  //     return;
  //   }
  //    setShowAlert(true)
  // }

  return (
    <div>
      {/* [2] */}
      <button className="btn" onClick={ () => setShowAlert(!showAlert)}>View Users</button>

      {showAlert && <Alert/>}

    </div>
  )
};

const Alert = ()=>{
 return <div>
  <h2 className="alert alert-danger">Hello World </h2>
 </div>
}

export default ToggleChallenge;
