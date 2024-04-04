import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditFlightPage = () => {
  const [flight, setFlight] = useState({
    flightNo: '',
    airlines: '',
    from: '',
    to: '',
    departure: '',
    arrival: '',
    aircraftDetail: ''
  });

  const { flightNo } = useParams();

  useEffect(() => {
    // Simulating fetching flight details from the server based on flightNo
    // Replace this with your actual data fetching logic
    const fetchFlightDetails = async () => {
      try {
        // Example flight details (replace this with your actual data fetching logic)
        const response = await fetch(`http://localhost:5000/flights/${flightNo}`);
        const data = await response.json();
        setFlight(data);
      } catch (error) {
        console.error('Error fetching flight details:', error);
      }
    };

    fetchFlightDetails();
  }, [flightNo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFlight({
      ...flight,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulating sending updated flight details to the server
      // Replace this with your actual PUT request logic
      await fetch(`http://localhost:5000/flights`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(flight)
      });
      alert('Flight updated successfully');
    } catch (error) {
      console.error('Error updating flight:', error);
      alert('Failed to update flight. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Edit Flight: {flightNo}</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="flight-number">Flight Number:</label>
            <input type="text" id="flight-number" name="flightNo" value={flight.flightNo} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="airlines">Airlines:</label>
            <input type="text" id="airlines" name="airlines" value={flight.airlines} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="departure">Departure:</label>
            <input type="text" id="departure" name="from" value={flight.from} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <input type="text" id="destination" name="to" value={flight.to} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="departure-time">Departure Time:</label>
            <input type="datetime-local" id="departure-time" name="departure" value={flight.departure} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="arrival-time">Arrival Time:</label>
            <input type="datetime-local" id="arrival-time" name="arrival" value={flight.arrival} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="aircraft">Aircraft:</label>
            <input type="text" id="aircraft" name="aircraftDetail" value={flight.aircraftDetail} onChange={handleInputChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditFlightPage;
