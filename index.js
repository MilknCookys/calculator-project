let num1;
let num2;
let operator;
const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";
const DELETE = "Delete";
const CLEAR = "C";
const EQUALS = "=";

let display = document.querySelector("#display");
displayStorage = "";

function add(num1, num2) {
  console.log(num1 + num2);
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
    case ADD:
      return add(num1, num2);

    case SUBTRACT:
      return subtract(num1, num2);

    case MULTIPLY:
      return multiply(num1, num2);

    case DIVIDE:
      return divide(num1, num2);

    default:
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

function isDelete(buttonTextContent) {
  return buttonTextContent === DELETE;
}

function isClear(buttonTextContent) {
  return buttonTextContent === CLEAR;
}

function isNum(buttonTextContent) {
  return !isNaN(buttonTextContent);
}

function isEquals(buttonTextContent) {
  return buttonTextContent === EQUALS;
}

function replaceLastChar(displayStorage, buttonTextContent) {
  return displayStorage.slice(0, -1) + buttonTextContent;
}

function removeLastChar(displayStorage) {
  return displayStorage.slice(0, -1);
}

function clear(displayStorage) {
  return (displayStorage = "");
}

const btns = document.querySelectorAll("button");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonTextContent = button.textContent;

    if (isOperator(buttonTextContent)) {
      if (displayStorage.length !== 0) {
        if (isOperator(displayStorage[displayStorage.length - 1])) {
          displayStorage = replaceLastChar(displayStorage, buttonTextContent);
        } else {
          displayStorage += `${buttonTextContent}`;
        }
      }
    } else if (isDelete(buttonTextContent)) {
      displayStorage = removeLastChar(displayStorage);
    } else if (isClear(buttonTextContent)) {
      displayStorage = clear(displayStorage);
    } else if (isNum(buttonTextContent)) {
      displayStorage += `${buttonTextContent}`;
    } else if (isEquals(buttonTextContent)) {
      // "2 + 3"
      // '2' -> num1 '+' -> operator '3' -> num2

      function operatorIndex(displayStorage) {
        if (displayStorage.indexOf(ADD) !== -1) {
          return displayStorage.indexOf(ADD);
        } else if (displayStorage.indexOf(SUBTRACT) !== -1) {
          return displayStorage.indexOf(SUBTRACT);
        } else if (displayStorage.indexOf(MULTIPLY) !== -1) {
          return displayStorage.indexOf(MULTIPLY);
        } else if (displayStorage.indexOf(DIVIDE) !== -1) {
          return displayStorage.indexOf(DIVIDE);
        } else {
          return -1;
        }
      }

      operatorIndexLocation = operatorIndex(displayStorage);

      if (operatorIndexLocation !== -1) {
        num1 = displayStorage.slice(0, operatorIndexLocation);
        console.log(`num1: ${num1}`);

        console.log(`operatorIndex: ${operatorIndexLocation}`);
        operator = displayStorage[operatorIndex(displayStorage)];

        num2 = displayStorage.slice(operatorIndexLocation + 1);
        console.log(`num2: ${num2}`);

        answer = operate(Number(num1), Number(num2), operator);
        console.log(`answer: ${answer}`);
        displayStorage = `${answer}`;
        // displayStorage = `${operate(num1, num2, operator)}`;
      }
    }
    display.textContent = displayStorage;
  });
});
