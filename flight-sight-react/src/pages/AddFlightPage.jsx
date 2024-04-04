import React from 'react'

const AddFlightPage = () => {
  return (
    
    <div class="container">
        <h2>Add Flight</h2>
        <div class="form-container">
            <form action="#" method="post">
                <div class="form-group">
                    <label for="flight-number">Flight Number:</label>
                    <input type="text" id="flight-number" name="flight-number" required/>
                </div>
                <div class="form-group">
                    <label for="airlines">Airlines:</label>
                    <input type="text" id="airlines" name="airlines" required/>
                </div>
                <div class="form-group">
                    <label for="departure">Departure:</label>
                    <input type="text" id="departure" name="departure" required/>
                </div>
                <div class="form-group">
                    <label for="destination">Destination:</label>
                    <input type="text" id="destination" name="destination" required/>
                </div>
                <div class="form-group">
                    <label for="departure-time">Departure Time:</label>
                    <input type="datetime-local" id="departure-time" name="departure-time" required/>
                </div>
                <div class="form-group">
                    <label for="arrival-time">Arrival Time:</label>
                    <input type="datetime-local" id="arrival-time" name="arrival-time" required/>
                </div>
                <div class="form-group">
                    <label for="aircraft">Aircraft:</label>
                    <input type="text" id="aircraft" name="aircraft" required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddFlightPage