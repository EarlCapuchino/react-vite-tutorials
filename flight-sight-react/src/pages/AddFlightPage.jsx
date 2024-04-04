import React, { useState } from 'react';

const AddFlightPage = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    flightNo: '',
    airlines: '',
    from: '',
    to: '',
    departure: '',
    arrival: '',
    aircraftDetail: ''
  });

  // Handle form input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend server with form data
      const response = await fetch('http://localhost:5000/flights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Flight added successfully');
        // Clear the form after successful submission
        setFormData({
          flightNo: '',
          airlines: '',
          from: '',
          to: '',
          departure: '',
          arrival: '',
          aircraftDetail: ''
        });
      } else {
        throw new Error('Failed to add flight');
      }
    } catch (error) {
      console.error('Error adding flight:', error);
      alert('Failed to add flight. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Add Flight</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="flight-number">Flight Number:</label>
            <input type="text" id="flight-number" name="flightNo" value={formData.flightNo} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="airlines">Airlines:</label>
            <input type="text" id="airlines" name="airlines" value={formData.airlines} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="departure">Departure:</label>
            <input type="text" id="departure" name="from" value={formData.from} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <input type="text" id="destination" name="to" value={formData.to} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="departure-time">Departure Time:</label>
            <input type="datetime-local" id="departure-time" name="departure" value={formData.departure} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="arrival-time">Arrival Time:</label>
            <input type="datetime-local" id="arrival-time" name="arrival" value={formData.arrival} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="aircraft">Aircraft:</label>
            <input type="text" id="aircraft" name="aircraftDetail" value={formData.aircraftDetail} onChange={handleInputChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddFlightPage;
