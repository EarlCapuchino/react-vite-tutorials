import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="navbar">
        <h1 className="website-title">FlightSight</h1>
        <ul>
            <li><Link to="/"  className="active-tab">Home</Link></li>
            <li><Link to="/flights">Flights</Link></li>
            <li><Link to="/add-flight">Add Flights</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar