import React from 'react';
import flights from '../../../flights.json';
import {Link} from 'react-router-dom'

const FlightsPage = () => {
  return (
    <div className="container">
      <h2 className="flight-header">Flight Details</h2>
      <div className="flight-details">
        {flights.map((flight, index) => (
          <div className="flight-card" key={index}>
            <div className="card-header">
              <h3>Flight Number: {flight.flightNo}</h3>
              <div className="edit-delete-links">
                <Link to={`/edit-flight/${flight.flightNo}`} className="edit-link">Edit</Link>
                <Link href="#" className="delete-link">Delete</Link>
              </div>
            </div>
            <div className="card-details">
              <p><strong>Airlines:</strong> {flight.airlines}</p>
              <p><strong>Departure:</strong> {flight.departure} ({flight.arrival})</p>
              <p><strong>Destination:</strong> {flight.to}</p>
              <p><strong>Aircraft:</strong> {flight.aircraftDetail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightsPage;
