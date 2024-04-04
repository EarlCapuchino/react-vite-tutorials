import React from 'react'
import FlightCards from '../components/FlightCards';
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
        <Welcome details = {details} loggedIn = {loggedIn}/>
        <FlightCards />
        </>
      )
}

export default HomePage

