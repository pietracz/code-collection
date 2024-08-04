const INPUT_ID = "input"
const ADD_ID = "add"
const OUTPUT_ID = "output"
const API_PORT = 3000

let input = document.getElementById(INPUT_ID)
let add = document.getElementById(ADD_ID)
let output = document.getElementById(OUTPUT_ID)
let PORT = API_PORT

add.addEventListener("click", function() {
    fetch(`http://127.0.0.1:${PORT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
           title: input.value, completed: false }) // Use template literal for title
      })
        .then(response => {
          if (response.ok) {
            input.value = "";}
    })
});

function addEntry(title, completed) {
    let div = document.createElement("div");
    div.setAttribute("class", "listDiv");
    output.appendChild(div);

    let checkbox = document.createElement("input");
    checkbox.checked = completed;
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    div.appendChild(checkbox);

    let li = document.createElement("li")
    li.textContent = title;
    div.appendChild(li);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("class", "deleteButton");
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        div.remove();
    });
}

function gotTodos(){
    fetch("http://127.0.0.1:3000/")
    .then((response) => response.json())
    .then((array) => 
        array.forEach((entry) => addEntry(entry.title, entry.completed)))
};


gotTodos();
/* 
checkbox.eventListener("change", function() {
    if Bedingung */