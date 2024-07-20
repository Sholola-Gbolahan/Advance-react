import React from "react"
import { useAppContext } from "./Navbar"

const UserContainers = () => {
  const { user, logout } = useAppContext()
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there. {user.name.toUpperCase()} </p>
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
