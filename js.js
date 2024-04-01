const lights = {
  red: document.getElementById("red"),
  yellow: document.getElementById("yellow"),
  green: document.getElementById("green"),
};

function toggleColor() {
  const { red, yellow, green } = lights;
  if (yellow.classList.contains("yellow-light")) {
    yellow.classList.remove("yellow-light");
    red.classList.add("red-light");
  } else if (red.classList.contains("red-light")) {
    red.classList.remove("red-light");
    green.classList.add("green-light");
  } else {
    green.classList.remove("green-light");
    yellow.classList.add("yellow-light");
  }
}
