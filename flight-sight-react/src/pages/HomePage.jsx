import React from 'react'
import FlightCards from '../components/FlightCards';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';

const details = {
    time: "11:00 PM",
    country: "Philippines",
    weather: "Sunny",
}
const loggedIn = false;

const HomePage = () => {
      return (
        <>
        <NavBar/>
        <Welcome details = {details} loggedIn = {loggedIn}/>
        <FlightCards />
        <Footer/>
        </>
      )
}

export default HomePage

