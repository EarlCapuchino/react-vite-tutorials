import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <nav class="navbar">
        <h1 class="website-title">FlightSight</h1>
        <ul>
            <li><a href="home.html"  class="active-tab">Home</a></li>
            <li><a href="flights.html">Flights</a></li>
            <li><a href="addFlight.html">Add Flights</a></li>
        </ul>
    </nav>

    <div class="welcome-container">
        <div class="welcome-message">
            <h1>Welcome Aboard, Travellers!</h1>
            <p>Embark on a journey with us and explore aircraft flights from around the world with ease.</p>
            <p>Whether you're a passionate aviation enthusiast, a frequent traveler, or simply curious about the movement of aircraft worldwide, FlightSight offers an intuitive platform to track flights in real-time.</p>
            <div class="details">
                <p><strong>Local Time:</strong> 9:00 AM</p>
                <p><strong>Country:</strong> United States</p>
                <p><strong>Weather:</strong> Sunny</p>
            </div>
        </div>
    </div>

    <div class="container">
        <h2 class="flight-header">Flight Details</h2>
        <div class="flight-details">
            <div class="flight-card">
                <div class="card-header">
                    <h3>Flight Number: EK215</h3>
                </div>
                <div class="card-details">
                    <p><strong>Airlines:</strong> Emirates</p>
                    <p><strong>Departure:</strong> New York (JFK)</p>
                    <p><strong>Destination:</strong> Dubai (DXB)</p>
                    <p><strong>Departure Time:</strong> 2024-04-03T22:00:00</p>
                    <p><strong>Arrival Time:</strong> 2024-04-04T19:00:00</p>
                    <p><strong>Aircraft:</strong> Airbus A380</p>
                </div>
            </div>
            <div class="flight-card">
                <div class="card-header">
                    <h3>Flight Number: SQ21</h3>
                </div>
                <div class="card-details">
                    <p><strong>Airlines:</strong> Singapore Airlines</p>
                    <p><strong>Departure:</strong> Newark (EWR)</p>
                    <p><strong>Destination:</strong> Singapore (SIN)</p>
                    <p><strong>Departure Time:</strong> 2024-04-03T20:00:00</p>
                    <p><strong>Arrival Time:</strong> 2024-04-04T06:00:00</p>
                    <p><strong>Aircraft:</strong> Airbus A350</p>
                </div>
            </div>
            <div class="flight-card">
                <div class="card-header">
                    <h3>Flight Number: BA9</h3>
                </div>
                <div class="card-details">
                    <p><strong>Airlines:</strong> British Airways</p>
                    <p><strong>Departure:</strong> London (LHR)</p>
                    <p><strong>Destination:</strong> Sydney (SYD)</p>
                    <p><strong>Departure Time:</strong> 2024-04-04T21:00:00</p>
                    <p><strong>Arrival Time:</strong> 2024-04-05T18:00:00</p>
                    <p><strong>Aircraft:</strong> Boeing 777</p>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <p>&copy; 2024 TrygoDigital Data Services. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
