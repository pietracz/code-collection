const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

/* const mysql = require("mysql2")

const db = mysql.createConnection({
    database: "mydatabase",
    host: "localhost",
    user: "admin",
    passwort: "passwort123"
})

db.connect()

db.query("SELECT * FROM TODO")
db.query("INSERT INTO TODO(task) values('basketball spielen')") */

app.use(cors());
app.use(express.json());

function getTasks() {
  // Definition der Funktion, um Daten aus der JSON zu lesen
  const data = fs.readFileSync("./tasks.json"); //auslesen der Datei unter dem angegebenen Pfad
  return JSON.parse(data); // wandelt eine JSON Zeichenkette in ein Javascript Object um
}

function saveTasks(tasks) {
  fs.writeFileSync("./tasks.json", JSON.stringify(tasks, null, 2)); //beschreiben der Datei unter dem angegebene Pfad. Stringify wandelt ein Javascript Object in JSON Format um
}

// Holt mir alle Tasks
app.get("/tasks", (req, res) => {
  let tasks = getTasks(); // liest über die Funktion die json aus und speichert diese in einer Variable
  res.json(tasks); // reagiert mit der Ausgabe der Daten im json Format
});

// Holt mir ein bestimmtes Element aus der Tasks Liste
app.get("/tasks/:index", (req, res) => {
  // /:index ist eine Weitergabe eines Parameter
  let tasks = getTasks(); // liest über die Funktion die json aus und speichert diese in einer Variable
  const index = parseInt(req.params.index); // req.params enthält die Parameter, die über die URL weitergegeben werden
  const task = tasks.find((t, i) => i === index); //find durchläuft jedes Element im Array, bis die Bedingung erfüllt wurde
  res.json(task); // reagiert mit der Ausgabe der Daten im json Format
});

app.post("/tasks", (req, res) => {
  let tasks = getTasks(); // liest über die Funktion die json aus und speichert diese in einer Variable
  const newTask = req.body.task; // enthält Daten, die im Body über eine HTML Anfrage an der Server geschickt werden
  if (newTask) {
    // wenn wahr, dann:
    tasks.push(newTask); // newTask wird in das Array gepusht
    res
      .status(201)
      .send({ message: "Dein Task wurde erfolgreich hinzugefügt" });
    saveTasks(tasks);
  } else {
    res.status(400).send({
      message: "Bitte einen Task in form von {'task':'neuer task'} hinzufügen",
    });
  }
});

// Move task up
app.post("/tasks/up", (req, res) => {
  const tasks = getTasks();
  const { index } = req.body;
  if (index > 0 && index < tasks.length) {
    [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]]; // Logik um einen Index mit einem darunter zu tauschen
    saveTasks(tasks);
    res.json({ message: "Task erfolgreich nach oben verschoben" });
  } else {
    res.status(400).json({ message: "Invalider Index" });
  }
});

// Move task down
app.post("/tasks/down", (req, res) => {
  const tasks = getTasks();
  const { index } = req.body;
  if (index >= 0 && index < tasks.length - 1) {
    [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]]; // Logik um einen Index mit einem darüber zu tauschen
    saveTasks(tasks);
    res.json({ message: "Task erfolgreich nach unten verschoben" });
  } else {
    res.status(400).json({ message: "Invalider Index" });
  }
});

// Alternative für Delete Request
/* app.delete("/tasks/:index", (req, res) => {
  // parseInt ist hier notwendig, da die params als String gespeichert werden
  const index = parseInt(req.params.index);
  if (index >= 0 && index < tasks.length) {
    tasks = tasks.filter((task, i) => i !== index);
    res.json({ message: "Task wurde erfolgreich gelöscht" });
  }else {
    res.status(400).json({message: "Bitte einen gültigen Index angeben"})
  }
}); */

app.delete("/tasks/:index", (req, res) => {
  let tasks = getTasks();
  // parseInt ist hier notwendig, da die params als String gespeichert werden
  const index = parseInt(req.params.index);
  if (index >= 0 && index < tasks.length) {
    tasks = tasks.filter((task, i) => i !== index);
    res.json({ message: "Task wurde erfolgreich gelöscht" });
    saveTasks(tasks);
  } else {
    res.status(400).json({ message: "Bitte einen gültigen Index angeben" });
  }
});

app.listen(5000);
