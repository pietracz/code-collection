const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const { isUtf8 } = require('buffer');
const app = express();
const PORT = 3000;
const todoPfad = './todo.json';

app.use(cors());

app.use(bodyParser.json());

// Funktion zum lesen
function readTodos() {
  const todos = fs.readFileSync(todoPfad, "utf8");
  return JSON.parse(todos);
}

// Funktion zum schreiben
function writeTodos(todos) {
  fs.writeFileSync(todoPfad, JSON.stringify(todos, null, 2));
}

// GET Endpoint für HTTP Request
app.get('/', (req, res) => {
  const todos = readTodos();
  res.status(200).json(todos);
});

// POST Endpoint für HTTP Request

app.post('/', (req, res) => {
    const newTodo = req.body;
    const todos = readTodos();
    todos.push({title: newTodo.title});
    writeTodos(todos);
    res.status(200).send("ToDo hinzugefügt!")
})


// Server starten
app.listen(PORT, () => 
  console.log(`Server läuft auf http://127.0.0.1:${PORT}`))