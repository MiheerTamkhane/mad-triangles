const inputOne = document.querySelector("#input-one");
const inputTwo = document.querySelector("#input-two");
const inputThree = document.querySelector("#input-three");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

function clickHandler() {
  if (inputOne.value && inputTwo.value && inputThree.value) {
    output.innerText = "";
    let sum =
      parseInt(inputOne.value) +
      parseInt(inputTwo.value) +
      parseInt(inputThree.value);
    console.log(sum);
    if (sum === 180) {
      output.innerText = "Greate! your angles forms a Triangle.";
    } else {
      output.innerText = "Oops! your angles not forms a Triangle.";
    }
  } else {
    output.innerText = "Please enter all angles.";
  }
}
button.addEventListener("click", clickHandler);
