import { useState } from 'react';

const Card = ({ flight }) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const flightDetails = () => {
        return (
            <>
                <p><strong>Airlines:</strong> {flight.airlines}</p>
                <p><strong>Departure:</strong> {flight.from}</p>
                <p><strong>Destination:</strong> {flight.to}</p>
                <p><strong>Departure Time:</strong> {flight.departure}</p>
                <p><strong>Arrival Time:</strong> {flight.arrival}</p>
                <p><strong>Aircraft:</strong> {flight.aircraftDetail}</p>
            </>
        );
    };

    return (
        <>
            <div key={flight.flightNo} className="flight-card">
                <div className="card-header">
                    <h3>Flight Number: {flight.flightNo}</h3>
                </div>
                <div className="card-details">
                    {showAll ? (
                        <>
                            {flightDetails()}
                            <button className="details-button" onClick={toggleShowAll}>Less</button>
                        </>
                    ) : (
                        <button className="details-button" onClick={toggleShowAll}>More</button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Card;
