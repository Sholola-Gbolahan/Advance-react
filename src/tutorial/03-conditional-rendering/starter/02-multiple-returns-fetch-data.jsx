import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLaoding] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState();

  const fetchData = async () =>{
    try{
      const resp = await fetch(url)
      if(!resp.ok){
        setIsError(true),
        setIsLaoding(false)
      }
      const user = await resp.json()
      setUser(user)
    
    }
    catch(error){
      setIsError(true)
      console.log(error)
    }

    setIsLaoding(false)
    
  }

  useEffect(()=>{
    fetchData()
  },[])

  if(isLoading){
    return <h1>Loading......</h1>
  }

  if(isError){
    return <h1>Error showing data</h1>
  }

  const {name,avatar_url,company,bio,html_url} = user

  return <div>
      <h1>{name}</h1>
      <img 
      style={{width:"150px",borderRadius:"25px" }}
      src={avatar_url} alt={name} /> 
      <h2>Works at: {company}</h2>
      <p>{bio}</p>
      <a href={html_url}> profile</a>
  </div>;
};
export default MultipleReturnsFetchData;
