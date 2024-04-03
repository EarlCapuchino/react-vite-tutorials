import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar">
        <h1 className="website-title">FlightSight</h1>
        <ul>
            <li><a href="home.html"  className="active-tab">Home</a></li>
            <li><a href="flights.html">Flights</a></li>
            <li><a href="addFlight.html">Add Flights</a></li>
        </ul>
    </nav>
  )
}

export default NavBar