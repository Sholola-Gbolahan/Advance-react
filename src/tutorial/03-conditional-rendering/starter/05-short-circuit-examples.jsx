import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return ( <>
  {/* No: 1 */}
  <h3>{text || 'default value'} </h3>
    {/* {
      // No: 2
      !text && <div>
        <h2>Whatever Returns</h2>
        <h3>{name}</h3>
      </div>
    
    } */}
    {/* N0: 3 */}
    { user && <SomeComponent name={user.name}/>}
  </>
    
  )
};

const SomeComponent = ({name})=>{
  return <div>
    <h2>Whatver returns</h2>
    <h2>{name}</h2>
  </div>

}

export default ShortCircuitExamples;
