const calculator = {
  number1: document.getElementById("input1"),
  number2: document.getElementById("input2"),
};

function calculate(operation) {
  const number1 = parseFloat(calculator.number1.value);
  const number2 = parseFloat(calculator.number2.value);

  if (operation == "+") {
    result = number1 + number2;
  }
  if (operation == "-") {
    result = number1 - number2;
  }
  if (operation == "*") {
    result = number1 * number2;
  }
  if (operation == "/") {
    result = number1 / number2;
  }
  document.getElementById("result").setAttribute("value", result);
  history(number1, number2, operation, result);
}

function history(number1, number2, operation, result) {
  const newListItem = document.createElement("li");
  const historyElement = document.getElementById("history-list");

  newListItem.textContent = `${number1} ${operation} ${number2} = ${result} `;
  historyElement.prepend(newListItem);
  if (historyElement.children.length > 10) {
    historyElement.lastElementChild.remove();
  }
}
