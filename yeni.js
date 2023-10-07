var input = document.querySelector(".input");
var num1 = "";
var num2 = "";
var operator = "";
var resultElement = document.querySelector(".result");
var zero = document.querySelector('.initial-zero')
const buttons = document.querySelectorAll('.buttons p');

buttons.forEach(button => {
  var buttonValue = button.innerText;

  button.addEventListener('click', () => {
    zero.innerText = "";
    if (buttonValue === "AC") {
      num1 = "";
      num2 = "";
      operator = "";
      resultElement.textContent = "";
      input.textContent = "";
    } else if (buttonValue === "DEL") {
      if (operator === "") {
        num1 = num1.slice(0, -1);
        input.textContent = input.textContent.slice(0, -1);
      } else {
        if (operator !== "%") {
          num2 = num2.slice(0, -1);
          input.textContent = input.textContent.slice(0, -1);
        }
      }
    } else if (["+", "-", "*", "/"].includes(buttonValue)) {
      if (operator === "") {
        num1 = input.textContent;
        operator = buttonValue;
        input.textContent += buttonValue;
      }
    } else if (buttonValue === "%") {
      resultElement.textContent = "";
      if (num1 !== "") {
        num1 = parseFloat(num1);
        var result = num1 / 100;
        num1 = result;
        input.textContent = result.toString();
      }
    } else if (buttonValue === "=") {
      if (num1 !== "" && num2 !== "" && operator !== "") {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        result = 0;
        if (operator === "+") {
          result = num1 + num2;
        } else if (operator === "-") {
          result = num1 - num2;
        } else if (operator === "*") {
          result = num1 * num2;
        } else if (operator === "/") {
          result = num1 / num2;
        }
      } 
        resultElement.textContent = result;
    } else if (buttonValue === ".") {
      if (operator === "" && num1.includes(".") && !num2) {
        return input;
      } else if (operator !== "" && num2.includes(".")) {
        return input;
      } else {
        if (operator === "") {
          num1 += buttonValue;
        } else {
          num2 += buttonValue;
        }
        input.textContent += buttonValue;
      }
    } else {
      if (operator === "") {
        num1 += buttonValue;
      } else {
        num2 += buttonValue;
      }
      input.textContent += buttonValue;
    }
  });
});
