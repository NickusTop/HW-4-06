import { createRN, checkAnswer } from "./math.js";

const text = document.querySelector(".p-maths");
const input = document.querySelector(".input-answer");
const button = document.querySelector(".button-maths");

let corectAnswer = createRN(text);

button.addEventListener("click", () => {
    checkAnswer(input, corectAnswer);
});
