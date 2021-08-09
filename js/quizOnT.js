const formQuiz = document.querySelector("#quiz");
const button = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const answers = [
  "right",
  "equilateral",
  "180 degrees",
  "acute angled triangle",
  "equilateral triangle",
  "scalene triangle",
  "isosceles triangl",
  "pythagoras",
  "c2",
  "trigonomtry",
];

function quizHandler() {
  let score = 0;
  let index = 0;

  const formResult = new FormData(formQuiz).values();

  for (let values of formResult) {
    if (values === answers[index]) {
      score++;
    }
    index++;
  }
  if (score === 0) {
    output.innerText = "Your final score is : " + score;
    output.style.backgroundColor = "#D9534F";
  } else {
    output.innerText = "Your final score is : " + score;
    output.style.backgroundColor = "#5CB85C";
  }
}
button.addEventListener("click", quizHandler);
