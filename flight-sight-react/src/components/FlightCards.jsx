import React from 'react'
import Card from './Card'
import flights from '../../../flights.json'

const FlightCards = () => {
  return (
    <div className="container">
    <h2 className="flight-header">Flight Details</h2>
    <div className="flight-details">
        {flights.map(flight => (
            <Card key = {flight.flightNo} flight ={flight}/>
        ))}
    </div>
    </div>
  )
}

export default FlightCards