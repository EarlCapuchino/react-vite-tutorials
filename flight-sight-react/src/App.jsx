import './App.css'
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
function App() {
  const details = {
    time: "11:00 PM",
    country: "Philippines",
    weather: "Sunny",
  }

  const flights = [
    {
      flightNo: "EK215",
      airlines: "Emirates",
      from: "New York (JFK)",
      to: "Dubai (DXB)",
      departure: "2024-04-03T22:00:00",
      arrival: "2024-04-04T19:00:00",
      aircraftDetail: "Airbus A380"
    },
    {
      flightNo: "SQ21",
      airlines: "Singapore Airlines",
      from: "Newark (EWR)",
      to: "Singapore (SIN)",
      departure: "2024-04-03T20:00:00",
      arrival: "2024-04-04T06:00:00",
      aircraftDetail: "Airbus A350"
    },
    {
      flightNo: "BA9",
      airlines: "British Airways",
      from: "London (LHR)",
      to: "Sydney (SYD)",
      departure: "2024-04-04T21:00:00",
      arrival: "2024-04-05T18:00:00",
      aircraftDetail: "Boeing 777"
    }
  ];
  
  const loggedIn = true;
  return (
    <>
    <NavBar/>
    <Welcome details = {details} loggedIn = {loggedIn}/>
    <div className="container">
        <h2 className="flight-header">Flight Details</h2>
        <div className="flight-details">
          {flights.map(flight => (
          <div key={flight.flightNo} className="flight-card">
            <div className="card-header">
              <h3>Flight Number: {flight.flightNo}</h3>
            </div>
            <div className="card-details">
              <p><strong>Airlines:</strong> {flight.airlines}</p>
              <p><strong>Departure:</strong> {flight.from}</p>
              <p><strong>Destination:</strong> {flight.to}</p>
              <p><strong>Departure Time:</strong> {flight.departure}</p>
              <p><strong>Arrival Time:</strong> {flight.arrival}</p>
              <p><strong>Aircraft:</strong> {flight.aircraftDetail}</p>
            </div>
          </div>
        ))}
        </div>
    </div>

    <footer className="footer">
        <p>&copy; 2024 TrygoDigital Data Services. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
