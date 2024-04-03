import './App.css'
import FlightCards from './components/FlightCards';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
function App() {
  const details = {
    time: "11:00 PM",
    country: "Philippines",
    weather: "Sunny",
  }
  
  const loggedIn = true;
  return (
    <>
    <NavBar/>
    <Welcome details = {details} loggedIn = {loggedIn}/>
    <FlightCards />
    <Footer/>
    </>
  )
}

export default App
