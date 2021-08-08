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
  displayFirst.style.display = "block";
  displaySecond.style.display = "";
  displayThird.style.display = "";
}

function calcAreaCaseFirst() {
  const outputOne = document.querySelector(".area-output-one");
  const base = parseInt(document.querySelector("#base").value);
  const height = parseInt(document.querySelector("#height").value);
  let area = (1 / 2) * base * height;
  if (!area) {
    outputOne.innerHTML = `<p>Please fill up fields</p>`;
  } else {
    outputOne.innerHTML = `<p>Area = ${area}</p>`;
  }
}
caseFirstBtn.addEventListener("click", calcAreaCaseFirst);
//Case second function below
function buttonTwoClickHandler() {
  displayFirst.style.display = "";
  displaySecond.style.display = "block";
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
  } else {
    outputTwo.innerHTML = `<p>Area = ${area}</p>`;
  }
}
caseSecondtBtn.addEventListener("click", calcAreaCaseSecond);
//Case Third function below
function buttonThreeClickHandler() {
  displayFirst.style.display = "";
  displaySecond.style.display = "";
  displayThird.style.display = "block";
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
  } else {
    outputThird.innerHTML = `<p>Area = ${area}</p>`;
  }
}
caseThirdBtn.addEventListener("click", calcAreaCaseThird);
//Events
buttonOne.addEventListener("click", buttonOneClickHandler);
buttonTwo.addEventListener("click", buttonTwoClickHandler);
buttonThree.addEventListener("click", buttonThreeClickHandler);
