import "./App.css";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function onUserAdd(user) {
    setUsers([...users, user]);
  }

  return (
    <>
      <UserForm onUserAdd={onUserAdd}></UserForm>
      <hr></hr>
      <UserList users={users}></UserList>
    </>
  );
}

export default App;

/* const [buttonColor, setButtonColor] = useState("rot");
  const nextColor = buttonColor === "rot" ? "blau" : "rot";
  const [toggle, setToggle] = useState(false);
  // const nextToggle = toggle === false ? true : false; 
  const classGrey = toggle ? "grey" : buttonColor;

  function switchColor() {
    setButtonColor(nextColor);
  }

  function handleOnChange() {
    setToggle((prevState) => !prevState);
  }

  return (
    <>
      <h1>Learn React</h1>
      <div>
        <button disabled={toggle} className={classGrey} onClick={switchColor}>
          Farbe zu {nextColor} wechseln
        </button>
        <br />
        <input id="checkbox" type="checkbox" onChange={handleOnChange} />
        <label htmlFor="checkbox">Toggle</label>
      </div>
    </>
  ); */
