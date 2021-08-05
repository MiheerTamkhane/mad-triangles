const inputOne = document.querySelector("#input-one");
const inputTwo = document.querySelector("#input-two");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

function clickHandler() {
  let valueOne = Number(inputOne.value);
  let valueTwo = Number(inputTwo.value);

  let a = valueOne * valueOne;
  let b = valueTwo * valueTwo;
  let c = Math.sqrt(a + b);

  output.innerText = "c = " + c;
}
button.addEventListener("click", clickHandler);
