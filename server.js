// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data for classrooms
let classrooms = [
    { id: 1, name: 'Room A', capacity: 30, booked: false },
    { id: 2, name: 'Room B', capacity: 25, booked: false },
    { id: 3, name: 'Room C', capacity: 20, booked: false },
];

// Endpoint to get available classrooms
app.get('/api/classrooms', (req, res) => {
    res.json(classrooms);
});

// Endpoint to book a classroom
app.post('/api/book', (req, res) => {
    const { id } = req.body;
    const classroom = classrooms.find(c => c.id === id);
    
    if (classroom && !classroom.booked) {
        classroom.booked = true;
        res.status(200).json({ message: 'Classroom booked successfully!' });
    } else {
        res.status(400).json({ message: 'Classroom is already booked or does not exist.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});