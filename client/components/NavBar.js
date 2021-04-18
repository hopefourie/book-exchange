import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => (
  <div className="navbar">
    <Link className="link" to="/">
      Book Exchange
    </Link>
    <nav className="nav">
          <Link className="link" to="/map">Map</Link>
          <Link className="link" to="/inbox">Inbox</Link>
          <Link className="link" to="/profile">Profile</Link>
          <Link className="link" to="/login">Login</Link>

    </nav>
  </div>
)

export default NavBar
