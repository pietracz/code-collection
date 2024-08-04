import React, { useEffect, useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // useEffect(() => {}, []); -> Grundgerüst von useEffect
  function fetchAllData() {
    fetch("http://localhost:5000/tasks") // holt Daten von Website
      .then((response) => response.json()) //packt die erhaltenen Daten in eine JSON
      .then((data) => setTasks(data)) // versetzt über setTasks die tasks variable mit einer json
      .catch((error) => console.error("Fehler beim API-Aufruf", error));
  }
  useEffect(() => {
    fetchAllData();
  }, []); // aktiviert fetchAllData beim Laden der Website

  function handleInputChange(event) {
    // eventhandler, wenn sich der Wert vom Inputfeld ändert
    setNewTask(event.target.value);
  }

  async function addTask() {
    // asynchrone Funktion für den Add-Button
    if (newTask !== "") {
      // wenn der Wert aus dem Inputfeld gefüllt ist / nicht leer ist, dann:
      await fetch("http://localhost:5000/tasks", {
        // wartet auf den Inhalt des Server
        method: "POST", // setzt die Methode fest, über die mit dem Server kommuniziert wird
        headers: {
          "Content-Type": "application/json", // beschreibt den Format Typen
        },
        body: JSON.stringify({ task: newTask }), // fügt den Wert aus newTask dem zugewiesenen Schlüssel zu, unter Berücksichtigung der Json Regeln
      });
      fetchAllData(); // fetcht abschließend den Inhalt/Daten der Website
      setNewTask(""); // setzt das Inputfeld wieder zurück
    }
  }

  async function moveTaskUp(index) {
    if (index > 0) {
      await fetch("http://localhost:5000/tasks/up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index }),
      });
      fetchAllData();
    }
  }
  async function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      await fetch("http://localhost:5000/tasks/down", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index }),
      });
      fetchAllData();
    }
  }

  async function deleteTask(index) {
    // nimmt den Index vom jeweiligen Element, welches angeklickt wird
    await fetch(`http://localhost:5000/tasks/${index}`, {
      // wartet auf den Zugriff per fetch
      method: "DELETE", // fordert einen Delete Request für den jeweiligen Index an
    });
    fetchAllData(); // fetcht dann die Daten von der Website
    // const updatedTasks = tasks.filter((task, i) => i !== index);
    // const updatedTasks = tasks.filter((_, i) => i !== index); // quasi das gleiche, nur anders geschrieben
    // setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <div>
        <input
          type="text"
          placeholder="enter new task"
          className="input-field"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="up-button" onClick={() => moveTaskUp(index)}>
                UP
              </button>
              <button
                className="down-button"
                onClick={() => moveTaskDown(index)}
              >
                DOWN
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default TodoList;
