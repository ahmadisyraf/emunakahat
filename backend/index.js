// import env file script
require('dotenv').config();

const cors = require('cors');
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

app.use(cors());
app.options('*', cors());

app.use(express.json());

// Make server listen to port 8000
app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})

const user = require('./routes/user.routes');
app.use('/users', user)

const course = require('./routes/course_listing.routes');
app.use('/courses', course);

const booking = require('./routes/marriage_booking_course.routes');
app.use("/booking", booking);

const marriageRequest = require("./routes/marriage_request.routes");
app.use("/marriageRequest", marriageRequest);

const staff = require("./routes/staff.routes");
app.use("/staff", staff);

const specialIncentiveApplication = require("./routes/special_incentive_application.routes");
app.use("/specialIncentiveApplication", specialIncentiveApplication);

const relative = require("./routes/relative_info.routes");
app.use("/relative", relative);
