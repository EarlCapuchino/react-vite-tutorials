import React from 'react'

const Card = ({flights}) => {
  return (
    <>
    {flights.map(flight => (
        <div key={flight.flightNo} className="flight-card">
            <div className="card-header">
            <h3>Flight Number: {flight.flightNo}</h3>
            </div>
            <div className="card-details">
            <p><strong>Airlines:</strong> {flight.airlines}</p>
            <p><strong>Departure:</strong> {flight.from}</p>
            <p><strong>Destination:</strong> {flight.to}</p>
            <p><strong>Departure Time:</strong> {flight.departure}</p>
            <p><strong>Arrival Time:</strong> {flight.arrival}</p>
            <p><strong>Aircraft:</strong> {flight.aircraftDetail}</p>
            </div>
        </div>
    ))}
    </>
  )
}

export default Card