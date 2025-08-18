const btn = document.querySelectorAll(".btn");
const input = document.querySelector("#input");

btn.forEach((btns) => {
  btns.addEventListener("click", () => {
    const value = btns.textContent.trim();
    const operators = ["+", "-", "*", "/", "%"];
    if (value.toLowerCase() === "c") {
      input.value = "";
    } else if (value === "=") {
      calculate();
    } else if (operators.includes(value)) {
      // if last char is also operator → replace it
      if (operators.includes(input.value.slice(-1))) {
        input.value = input.value.slice(0, -1) + value;
      } else if (input.value !== "") {
        input.value += value;
      }
    } else {
      input.value += value;
    }
  });
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Escape") {
    input.value = "";
  }
  // block alphabets
  if (/[a-zA-Z]/.test(e.key)) {
    e.preventDefault();
  }
});

function calculate() {
  try {
    input.value = Function(`'use strict'; return(${input.value})`)();
  } catch (error) {
    input.value = "Error";
  }
}
