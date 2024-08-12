const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Temporary data storage
let students = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ss.html');
});

// Route to display all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Route to add a new student
app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json({ message: 'Student added successfully', student: newStudent });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
