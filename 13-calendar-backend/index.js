const express = require('express');
const { dbConnection } = require('./db/config');
require('dotenv').config();
const cors = require('cors');

// Create express server
const app = express();

// DB init
dbConnection();

//CORS
app.use(cors());

// Public directory
app.use(express.static('public'));

// read and parse body on POST requests (to extract JSON from it's body)
app.use( express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/event', require('./routes/events'));

//listen requests
app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`)
});