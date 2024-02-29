// app.js
// backend for booking, uses mongoose batabase

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Body-parser middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/booking', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Mongoose Model
const Booking = mongoose.model('Booking', {
  user: String,
  startTime: Date,
  endTime: Date
});

// Route to create a new booking
app.post('/api/bookings', async (req, res) => {
  try {
    const { user, startTime, endTime } = req.body;
    const newBooking = new Booking({ user, startTime, endTime });
    await newBooking.save();
    res.json(newBooking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
