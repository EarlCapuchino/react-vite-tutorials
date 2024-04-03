import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/FlightSight", {

})
.then(() => console.log("Connected to MongoDB"))
.catch(error => console.error("Error connecting to MongoDB:", error));

const Flight = mongoose.model("Flight", {
    flightNo: String,
    airlines: String,
    from: String,
    to: String,
    departure: String,
    arrival: String,
    aircraftDetail: String
}, 'flights');

const homepage = (req, res) => {
    res.send("Welcome to Flight Sight!");
};

const findFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.status(200).json(flights);
    } catch (error) {
        console.error("Error finding flights:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const findFlightByNo = async (req, res) => {
    try {
        const flight = await Flight.findOne({ flightNo: req.params.flightNo });
        if (flight)
            res.status(200).json(flight);
        else
            res.status(404).json({ error: "Flight not found" });
    } catch (error) {
        console.error("Error finding flight:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const addFlight = async (req, res) => {
    try {
        const newFlight = new Flight(req.body);
        await newFlight.save();
        res.status(201).json({ message: "Flight added successfully" });
    } catch (error) {
        console.error("Error adding flight:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const editFlight = async (req, res) => {
    try {
        const flight = await Flight.findOneAndUpdate(
            { flightNo: req.body.flightNo },
            { $set: req.body },
            { new: true }
        );
        if (flight)
            res.status(200).json(flight);
        else
            res.status(404).json({ error: "Flight not found" });
    } catch (error) {
        console.error("Error editing flight:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const deleteFlight = async (req, res) => {
    try {
        const flight = await Flight.deleteOne({ flightNo: req.body.flightNo });
        if (flight.deletedCount > 0)
            res.status(200).json({ message: "Flight deleted successfully" });
        else
            res.status(404).json({ error: "Flight not found" });
    } catch (error) {
        console.error("Error deleting flight:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export { homepage, findFlights, findFlightByNo, addFlight, editFlight, deleteFlight };
