import React from 'react'

const Welcome = ({details, loggedIn}) => {
  return (
    <div className="welcome-container">
        <div className="welcome-message">
            {loggedIn ? <h1> Welcome Aboard, Member! </h1> : <h1>Hi There Guest!</h1>}
            <p>Embark on a journey with us and explore aircraft flights from around the world with ease.</p>
            <p>Whether you're a passionate aviation enthusiast, a frequent traveler, or simply curious about the movement of aircraft worldwide, FlightSight offers an intuitive platform to track flights in real-time.</p>
            <div className="details">
                <p><strong>Local Time:</strong>{details.time}</p>
                <p><strong>Country:</strong>{details.country}</p>
                <p><strong>Weather:</strong>{details.weather}</p>
            </div>
        </div>
    </div>
  )
}

export default Welcome