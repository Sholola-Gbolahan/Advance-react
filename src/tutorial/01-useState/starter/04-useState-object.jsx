import { useState } from 'react';

const UseStateObject = () => {  
  
  const [age, setAge] = useState(24);
  const [name,setName] = useState('James');
  const [hobby,setHobby ] =useState('Hearing Stories');

  const displayPerson = () => {
    setAge(30)
    setName('Dayo')
    setHobby('Readiing Books')
  }

  return (
    <div>
      <h1>UseState Object Example</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>Enjoys : {hobby}</h2>

      <button onClick={displayPerson} className='btn'>Show John</button>
    </div>
  )

};

export default UseStateObject;
