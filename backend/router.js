
import {
    homepage,
    findFlights,
    findFlightByNo,
    addFlight,
    editFlight,
    deleteFlight
} from './controller.js';

const router = (app) => {
    // Homepage route
    app.get('/', homepage);
    // Get all flights
    app.get('/flights', findFlights);
    // Get flight by flightNo
    app.get('/flights/:flightNo', findFlightByNo);
    // Add new flight
    app.post('/flights', addFlight);
    // Edit existing flight
    app.put('/flights', editFlight);
    // Delete flight
    app.delete('/flights', deleteFlight);
}




export default router;