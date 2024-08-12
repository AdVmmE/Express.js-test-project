const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Todo list array to store tasks
let todoList = [];

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/todos', (req, res) => {
  res.json(todoList);
});

app.post('/todos', (req, res) => {
  const todo = req.body.todo;
  todoList.push(todo);
  res.redirect('/');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
