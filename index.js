let num1;
let num2;
let operator;
const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";

let display = document.querySelector("#display");
displayStorage = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case PLUS:
      add(num1, num2);
      break;
    case SUBTRACT:
      subtract(num1, num2);
      break;
    case MULTIPLY:
      multiply(num1, num2);
      break;
    case DIVIDE:
      divide(num1, num2);
      break;
    default:
      console.error("Wrong Value!");
      break;
  }
}

function isOperator(buttonTextContent) {
  return (
    buttonTextContent === ADD ||
    buttonTextContent === SUBTRACT ||
    buttonTextContent === MULTIPLY ||
    buttonTextContent === DIVIDE
  );
}

function replaceLastChar(displayStorage, buttonTextContent) {
  return displayStorage.slice(0, -1) + buttonTextContent;
}

const btns = document.querySelectorAll("button");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonTextContent = button.textContent;

    if (isOperator(buttonTextContent)) {
      if (isOperator(displayStorage[displayStorage.length - 1])) {
        displayStorage = replaceLastChar(displayStorage, buttonTextContent);
      } else {
        displayStorage += `${buttonTextContent}`;
      }
    } else {
    }
    display.textContent = displayStorage;
  });
});

/* Old code:

let displayArr = [];

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Delete") {
      console.log("I am DELETE!");
    } else if (button.textContent === "C") {
      console.log("I am C");
    } else {
      displayArr.push(button.textContent);
    }
  });
});
*/
