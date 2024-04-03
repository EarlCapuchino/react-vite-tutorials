import React, { useState } from 'react';
import Card from './Card';
import flights from '../../../flights.json';

const FlightCards = () => {
  const [flightList, setFlightList] = useState(flights);
  const addFlight = () => {
    const newFlight = {
      flightNo: 'NEW123', 
      airlines: 'New Airline', 
      from: 'New Origin', 
      to: 'New Destination', 
      departure: 'New Departure Time', 
      arrival: 'New Arrival Time', 
      aircraftDetail: 'New Aircraft'
    };
    setFlightList([...flightList, newFlight]);
  };

  return (
    <div className="container">
      <h2 className="flight-header">Flight Details</h2>
      <div className="flight-details">
        {flightList.map(flight => (
          <Card key={flight.flightNo} flight={flight} />
        ))}
      </div>
      <button onClick={addFlight}>Add Flight</button>
    </div>
  );
};

export default FlightCards;
