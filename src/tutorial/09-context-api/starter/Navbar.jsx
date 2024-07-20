import React, { createContext, useState, useContext } from "react"
import NavLinks from "./NavLinks"

const NavbarContext = createContext()

//Custom Hooks
export const useAppContext = () => useContext(NavbarContext)

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" })

  const logout = () => {
    setUser(null)
  }

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <div className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  )
}

export default Navbar
