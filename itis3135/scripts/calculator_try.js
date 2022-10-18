class Calculator {
    constructor(calculator, keys, display) {
      this.calculator = calculator;
      this.keys = keys;
      this.display = display;
    }
  
    turnOn() {
      this.keys.addEventListener("click", (e) => {
        if (e.target.matches("button")) {
          // a calculator button was clicked.
          this.buttonClicked(e.target);
        }
      });
    }
  
    buttonClicked(target) {
      const key = target;
  
      const action = key.dataset.action;
  
      // get the value of the button clicked
      const keyContent = key.textContent;
  
      // get the value of the display element
      const displayedNum = this.display.textContent;
  
      // get the type of the previous button clicked
      const previousKeyType = this.calculator.dataset.previousKeyType;
  
      // perform action if button clicked is a numeral 0 - 9
      if (!action) {
        this.numberInput(keyContent, displayedNum, previousKeyType);
      }
  
      // perform action negative / positive toggle if clicked
      if (action === "negative") {
        // if displayed number is negative, change to positive
        if (displayedNum < 0) {
          this.display.textContent = Math.abs(displayedNum);
        } else {
          // if displayed number is positive, change to negative
          this.display.textContent = -Math.abs(displayedNum);
        }
      }
  
      if (action === "percentage") {
        this.display.textContent = displayedNum * 0.01;
      }
  
      if (action === "decimal") {
        this.decimalInput(displayedNum, previousKeyType);
      }
  
      if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divide"
      ) {
        this.operatorInput(displayedNum, previousKeyType, action);
      }
  
      if (action === "clear") {
        this.clearInput(key);
      }
  
      if (action !== "clear") {
        const clearButton = this.calculator.querySelector("[data-action=clear]");
        clearButton.textContent = "CE";
      }
  
      if (action === "calculate") {
        this.equalsInput(displayedNum, previousKeyType);
      }
    }
  
    numberInput(keyContent, displayedNum, previousKeyType) {
      if (
        displayedNum === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        this.display.textContent = keyContent;
      } else {
        this.display.textContent = displayedNum + keyContent;
      }
      this.calculator.dataset.previousKeyType = "number";
    }
  
    decimalInput(displayedNum, previousKeyType) {
      if (!displayedNum.includes(".")) {
        this.display.textContent = displayedNum + ".";
      } else if (
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        this.display.textContent = "0.";
      }
      this.calculator.dataset.previousKeyType = "decimal";
    }
  
    operatorInput(displayedNum, previousKeyType, action) {
      const firstValue = this.calculator.dataset.firstValue;
      const operator = this.calculator.dataset.operator;
      const secondValue = displayedNum;
  
      if (
        firstValue &&
        operator &&
        previousKeyType !== "operator" &&
        previousKeyType !== "calculate"
      ) {
        const calcValue = this.calculate(firstValue, operator, secondValue);
  
        this.display.textContent = calcValue;
  
        this.calculator.dataset.firstValue = calcValue;
      } else {
        this.calculator.dataset.firstValue = displayedNum;
      }
  
      this.calculator.dataset.previousKeyType = "operator";
      this.calculator.dataset.operator = action;
    }
  
    clearInput(key) {
      if (key.textContent === "AC") {
        this.calculator.dataset.firstValue = "";
        this.calculator.dataset.operator = "";
        this.calculator.dataset.previousKeyType = "";
      } else {
        key.textContent = "AC";
      }
      this.display.textContent = 0;
      this.calculator.dataset.previousKeyType = "clear";
    }
  
    equalsInput(displayedNum, previousKeyType) {
      let firstValue = this.calculator.dataset.firstValue;
      const operator = this.calculator.dataset.operator;
      let secondValue = displayedNum;
  
  
      if (firstValue) {
  
        if (previousKeyType !== "calculate") {
          this.display.textContent = this.calculate(
            firstValue,
            operator,
            secondValue
          );
        }
      }
      this.calculator.dataset.previousKeyType = "calculate";
    }
  
    calculate(n1, operator, n2) {
      const firstNum = parseFloat(n1);
      const secondNum = parseFloat(n2);
  
      switch (operator) {
        case "add":
          return firstNum + secondNum;
        case "subtract":
          return firstNum - secondNum;
        case "multiply":
          return firstNum * secondNum;
        case "divide":
          return firstNum / secondNum;
        default:
      }
    }
  }
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

let myCalculator = new Calculator(calculator, keys, display);
myCalculator.turnOn();