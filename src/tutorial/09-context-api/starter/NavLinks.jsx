import React from "react"
import UserContainers from "./UserContainers"

const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainers />
    </div>
  )
}

export default NavLinks
