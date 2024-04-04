import React from 'react';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

const FlightsPage = () => {

    const [flights, setFlightList] = useState([]); //you need to fetch from the database/backend 
    const handleDelete = async (flightNo) => {
        try {
          const response = await fetch(`http://localhost:5000/flights`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ flightNo }) // Pass flightNo in the request body
          });
          if (response.ok) {
            // Remove the deleted flight from the flights list
            setFlightList(prevFlights => prevFlights.filter(flight => flight.flightNo !== flightNo));
            alert('Flight deleted successfully');
          } else {
            throw new Error('Failed to delete flight');
          }
        } catch (error) {
          console.error('Error deleting flight:', error);
          alert('Failed to delete flight. Please try again.');
        }
      };
      
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
                <button onClick={() => handleDelete(flight.flightNo)} className="delete-link">Delete</button>
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
