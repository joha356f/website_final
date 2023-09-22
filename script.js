let point;
point = 1;
console.log(point);

window.addEventListener("load", sidenvises);

let score;

function sidenvises() {
  score = document.querySelector("#score");
  console.log("Score element", score);

  score.textContent = point;
}

window.addEventListener("click", addPoint);

function addPoint() {
  console.log("Add point");

  point += 1;

  score.textContent = point;
}
