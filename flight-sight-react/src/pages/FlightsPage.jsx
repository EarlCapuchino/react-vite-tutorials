import React from 'react'

const FlightsPage = () => {
  return (
    <>
      <div class="container">
        <h2 class="flight-header">Flight Details</h2>
        <div class="flight-details">
            <div class="flight-card">
                <div class="card-header">
                    <h3>Flight Number: EK215</h3>
                    <div class="edit-delete-links">
                        <a href="#" class="edit-link">Edit</a>
                        <a href="#" class="delete-link">Delete</a>
                    </div>
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
                    <div class="edit-delete-links">
                        <a href="#" class="edit-link">Edit</a>
                        <a href="#" class="delete-link">Delete</a>
                    </div>
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
                    <div class="edit-delete-links">
                        <a href="#" class="edit-link">Edit</a>
                        <a href="#" class="delete-link">Delete</a>
                    </div>
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
    </>
  )
}

export default FlightsPage