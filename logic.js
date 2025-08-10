let calculation = "";
function calc(value) {
  if (value === "=") {
    calculation = eval(calculation);
    document.querySelector("p").innerText = calculation;
  } else {
    calculation += value;
    document.querySelector("p").innerText = calculation;
  }
}
function reset() {
  calculation = "";
  document.querySelector("p").innerText = calculation;
}
document.querySelector("p").innerText = calculation;
