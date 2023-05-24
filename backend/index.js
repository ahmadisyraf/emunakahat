// import env file script
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

// Connecting the database
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

// Make server listen to port 8000
app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})

const routes = require('./routes/user.router');
app.use('/api', routes)