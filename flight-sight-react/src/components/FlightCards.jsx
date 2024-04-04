import React, { useState } from 'react';
import Card from './Card';
import { useEffect } from 'react';

const FlightCards = () => {
  const [flightList, setFlightList] = useState([]); //you need to fetch from the database/backend 
  
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
        {flightList.map(flight => (
          <Card key={flight.flightNo} flight={flight} />
        ))}
      </div>
    </div>
  );
};

export default FlightCards;
