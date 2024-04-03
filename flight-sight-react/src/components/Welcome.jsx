import React, { useState } from 'react';

const Welcome = ({ details }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleInputChange = event => {
    setUserName(event.target.value);
  };

  return (
    <div className="welcome-container">
      <div className="welcome-message">
        {loggedIn ? <h1>Welcome Aboard, {userName}!</h1> : <h1>Hi There {userName}!</h1>}
        <p>Embark on a journey with us and explore aircraft flights from around the world with ease.</p>
        <p>Whether you're a passionate aviation enthusiast, a frequent traveler, or simply curious about the movement of aircraft worldwide, FlightSight offers an intuitive platform to track flights in real-time.</p>
        <div className="details">
          <p><strong>Local Time:</strong>{details.time}</p>
          <p><strong>Country:</strong>{details.country}</p>
          <p><strong>Weather:</strong>{details.weather}</p>
        </div>
        <input type="text" className = "user-field" placeholder="Enter your name" value={userName} onChange={handleInputChange} />
        {loggedIn ? null : (
          <div>
            <button className="login-button" onClick={handleLogin}>Log In</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
