const YEAR_ID = "jahr";
const SUBMIT_ID = "senden";
const RECEIVE_ID = "ausgabe";

const jahr = document.getElementById(YEAR_ID);
const senden = document.getElementById(SUBMIT_ID);
const ausgabe = document.getElementById(RECEIVE_ID);

function schaltjahrRechner() {
    
  const jahrEingabe = parseInt(jahr.value);

  if ((jahrEingabe % 4 == 0 && jahrEingabe % 100 != 0) || (jahrEingabe % 400 == 0)) {
    let message = `${jahrEingabe} ist ein Schaltjahr!`;
    ausgabe.textContent = message;
  } else {
    let message = `${jahrEingabe} ist kein Schaltjahr!`;
    ausgabe.textContent = message;
  }
};

senden.addEventListener("click", schaltjahrRechner)