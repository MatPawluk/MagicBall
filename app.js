const input = document.querySelector("input");
const ballBtn = document.querySelector("img");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const answerArr = [
  "Tak",
  "Nie",
  "Może",
  "Zdecydowanie",
  "Zapytaj ponownie później",
  "Nie sądzę",
  "Absolutnie",
  "Nie ma szans",
  "Tak, ale...",
  "Bez wątpienia",
];

const randomAnswer = () => {
  const trimmedInput = input.value.trim();

  if (trimmedInput === "" || trimmedInput.startsWith("?")) {
    error.textContent = "Najpierw zadaj pytanie";
  } else if (!trimmedInput.endsWith("?")) {
    error.textContent = "Pytanie musi kończyć się '?'";
  } else {
    error.textContent = "";
    ballBtn.classList.add("shake-animation");
    const randomIndex = Math.floor(Math.random() * answerArr.length);
    answer.textContent = answerArr[randomIndex];
    input.value = "";
  }
};

ballBtn.addEventListener("click", (e) => {
  answer.textContent = "";
  randomAnswer();
});

ballBtn.addEventListener("animationend", () => {
  ballBtn.classList.remove("shake-animation");
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    randomAnswer();
  }
});
