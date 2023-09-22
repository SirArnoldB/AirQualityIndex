import express from 'express';
import aqiRouter from './routes/aqi.js'

// Initialize the app
const app = express();

// Set up the port
const PORT = process.env.PORT || 3003;

// Serve static files from the client\public directory
app.use('/public', express.static('public'));

// Set up middleware to serve files from the client\public\scripts directory
app.use('/scripts', express.static('client/public/scripts'));

// Set up middleware to serve files from the client\public\styles directory
app.use('/styles', express.static('client/public/styles'));

// Define the root route
app.get('/', (req, res) => {
    res.status(200).send(
        `<h1 style="text-align: center; margin-top: 50px; ">Air Quality Index</h1>`
    )
});

// add the aqiRouter middleware to the application
app.use('/aqi', aqiRouter);

// Listen on the port
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port http://localhost:${PORT}`)
});
