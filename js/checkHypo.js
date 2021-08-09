const inputOne = document.querySelector("#input-one");
const inputTwo = document.querySelector("#input-two");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

function clickHandler() {
  let valueOne = Number(inputOne.value);
  let valueTwo = Number(inputTwo.value);
  if (valueOne && valueTwo) {
    let a = valueOne * valueOne;
    let b = valueTwo * valueTwo;
    let c = Math.sqrt(a + b);

    output.innerText = "C = " + c;
    output.style.backgroundColor = "#5CB85C";
  } else {
    output.innerText = "Please enter the values";
    output.style.backgroundColor = "#D9534F";
  }
}
button.addEventListener("click", clickHandler);
