import React from "react"

const UserContainers = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there. {user.name} </p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  )
}

export default UserContainers
