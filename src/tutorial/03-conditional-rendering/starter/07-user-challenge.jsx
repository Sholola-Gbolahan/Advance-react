import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const Login = () => {
    // [1]
    setUser({ name: "Dayo" });
    return (
      <div>
        
      </div>
    );
  };

  const Logout = () => {
    setUser(null);
   
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>You're Logged in</h2>
           <h4>Welcome {user.name} to your Dashboard </h4>
          <button className="btn" onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
          {" "}
          <h4> Please Login</h4>
          <button className="btn" onClick={Login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
