import { useState } from 'react';



const ShortCircuitOverview = () => {
  // Falsy
  const [text ,setText] =useState('');

// Truty
const [name, setName] = useState('Susan');


  return <div>
    {/* {if(someCondition){"This won't work"}} */}

    <h4>Falsy OR: { text || 'Hello Wolrd'}</h4>
    <h4>Falsy AND: { text && 'Hello Wolrd'}</h4>
    <h4>Truty OR: { name || 'Hello Wolrd'}</h4>
    <h4>Truty AND: { name && 'Hello Wolrd'}</h4>
   
  </div>
};
export default ShortCircuitOverview;
