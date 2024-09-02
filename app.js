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

const checkInput = () => {
  const trimmedInput = input.value.trim();

  if (trimmedInput === "") {
    error.textContent = "Najpierw zadaj pytanie";
  } else if (!trimmedInput.endsWith("?")) {
    error.textContent = "Pytanie musi kończyć się '?'";
  } else {
    error.textContent = "";
    randomAnswer();
  }
};

const clear = () => {
  error.textContent = "";
  input.value = "";
};

const randomAnswer = () => {
  ballBtn.classList.add("shake-animation");
  const randomIndex = Math.floor(Math.random() * answerArr.length);
  answer.textContent = answerArr[randomIndex];
};

ballBtn.addEventListener("click", () => {
  answer.textContent = "";
  checkInput();
});

ballBtn.addEventListener("animationend", () => {
  ballBtn.classList.remove("shake-animation");
  clear();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});
