import React from 'react';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

const FlightsPage = () => {

    const [flights, setFlightList] = useState([]); //you need to fetch from the database/backend 
  
    useEffect(() => { //make sure to address CORS in your backend/index.js
    fetch('http://localhost:5000/flights')
        .then(response => response.json())
        .then(body => {
        setFlightList(body)
        })
    })
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
              <p><strong>Departure:</strong> {flight.from}</p>
              <p><strong>Destination:</strong> {flight.to}</p>
              <p><strong>Arrival Time:</strong> {flight.arrival}</p>
              <p><strong>Departure Time:</strong> {flight.departure}</p>
              <p><strong>Aircraft:</strong> {flight.aircraftDetail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightsPage;
