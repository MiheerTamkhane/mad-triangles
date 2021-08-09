const buttonOne = document.querySelector("#line-one");
const buttonTwo = document.querySelector("#line-two");
const buttonThree = document.querySelector("#line-three");
const displayFirst = document.querySelector(".case-first");
const displaySecond = document.querySelector(".case-second");
const displayThird = document.querySelector(".case-third");

const caseFirstBtn = document.querySelector("#case-first-btn");
const caseSecondtBtn = document.querySelector("#case-second-btn");
const caseThirdBtn = document.querySelector("#case-third-btn");

//Case first function below
function buttonOneClickHandler() {
  displayFirst.style.display = "flex";
  displayFirst.classList.add("all-case-center");
  displayThird.classList.remove("all-case-center");
  displaySecond.style.display = "";
  displayThird.style.display = "";

  displaySecond.classList.remove("all-case-center");
}

function calcAreaCaseFirst() {
  const outputOne = document.querySelector(".area-output-one");
  const base = parseInt(document.querySelector("#base").value);
  const height = parseInt(document.querySelector("#height").value);
  let area = (1 / 2) * base * height;
  if (!area) {
    outputOne.innerHTML = `<p>Please fill up fields</p>`;
    outputOne.style.backgroundColor = "#D9534F";
  } else {
    outputOne.innerHTML = `<p>Area = ${area}</p>`;
    outputOne.style.backgroundColor = "#5CB85C";
  }
}
caseFirstBtn.addEventListener("click", calcAreaCaseFirst);
//Case second function below
function buttonTwoClickHandler() {
  displayFirst.style.display = "";
  displaySecond.style.display = "flex";
  displaySecond.classList.add("all-case-center");
  displayFirst.classList.remove("all-case-center");
  displayThird.classList.remove("all-case-center");
  displayThird.style.display = "";
}

function calcAreaCaseSecond() {
  const outputTwo = document.querySelector(".area-output-two");
  const sideA = parseInt(document.querySelector("#side-a").value);
  const sideB = parseInt(document.querySelector("#side-b").value);
  const sideC = parseInt(document.querySelector("#side-c").value);
  let s = (sideA + sideB + sideC) / 2;
  let area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
  // outputTwo.innerHTML = `<p>Area = ${area}</p>`;
  if (!area) {
    outputTwo.innerHTML = `<p>Please fill up fields</p>`;
    outputTwo.style.backgroundColor = "#D9534F";
  } else {
    outputTwo.innerHTML = `<p>Area = ${area}</p>`;
    outputTwo.style.backgroundColor = "#5CB85C";
  }
}
caseSecondtBtn.addEventListener("click", calcAreaCaseSecond);
//Case Third function below
function buttonThreeClickHandler() {
  displayFirst.style.display = "";
  displaySecond.style.display = "";
  displayThird.style.display = "flex";
  displayThird.classList.add("all-case-center");
  displaySecond.classList.remove("all-case-center");
  displayFirst.classList.remove("all-case-center");
}
function calcAreaCaseThird() {
  const outputThird = document.querySelector(".area-output-three");
  const sideb = parseInt(document.querySelector("#sideB").value);
  const sidec = parseInt(document.querySelector("#sideC").value);
  const angleA = parseInt(document.querySelector("#angleA").value);
  let a = Math.sin((angleA * Math.PI) / 180);

  let area = (1 / 2) * sideb * sidec * a;
  outputThird.innerHTML = `<p>Area = ${area}</p>`;
  if (!area) {
    outputThird.innerHTML = `<p>Please fill up fields</p>`;
    outputThird.style.backgroundColor = "#D9534F";
  } else {
    outputThird.innerHTML = `<p>Area = ${area}</p>`;
    outputThird.style.backgroundColor = "#5CB85C";
  }
}
caseThirdBtn.addEventListener("click", calcAreaCaseThird);
//Events
buttonOne.addEventListener("click", buttonOneClickHandler);
buttonTwo.addEventListener("click", buttonTwoClickHandler);
buttonThree.addEventListener("click", buttonThreeClickHandler);
