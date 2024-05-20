const url = "https://api.github.com/users";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [user, setUsers] = useState([]) ;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const users = await response.json( );
        setUsers(users);
        console.log(users);
      } catch (err) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1> Github Users </h1>

      <div className="users_container">
      {user.map(({ login, avatar_url, html_url, id, node_id }) => {
        return (
          
            <div key={id} className="user_container">
              <img src={avatar_url} alt={node_id} className="user_img" />
              <div className="user_info">
                <h5>{login}</h5>
                <a href={html_url} target="_blank">Profile</a>
              </div>
            </div>  
        );
      })}
      </div>
    </>
  );
};
export default FetchData;
