const LENGHT_INPUT_ID = "passwordLength";
const BUTTON_ID = "create";
const RESULT1_ID = "result1";
const RESULT2_ID = "result2";

let passwordLength = document.getElementById(LENGHT_INPUT_ID);
let create = document.getElementById(BUTTON_ID);
let result1 = document.getElementById(RESULT1_ID);
let result2 = document.getElementById(RESULT2_ID);

function passwordGenerator() {
    let passwordNumber = parseInt(passwordLength.value);
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.-#'+*~§$%&/()?";
        password = "";
    for (let i = 0; i < passwordNumber; i++ ) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    result1.textContent = password;
    revertedPassword = password.split("").reverse().join(""); // split password into parts and adds it to array
    result2.textContent = revertedPassword;
}

create.addEventListener("click", passwordGenerator);
  