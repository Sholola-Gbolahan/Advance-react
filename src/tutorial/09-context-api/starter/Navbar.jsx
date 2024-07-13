import React, { useState } from "react"
import NavLinks from "./NavLinks"

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" })

  const Logout = () => {
    setUser(null)
  }

  return (
    <div className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={Logout} />
    </div>
  )
}

export default Navbar
