import React from 'react'
import Card from './Card'
const FlightCards = ({flights}) => {
  return (
    <div className="container">
    <h2 className="flight-header">Flight Details</h2>
    <div className="flight-details">
    {flights.map(flight => (
        <Card flight ={flight}/>
    ))}
    </div>
    </div>
  )
}

export default FlightCards