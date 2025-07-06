export function createRN(text) {
    let number = Math.floor(Math.random() * 100) + 1;
    let number2 = Math.floor(Math.random() * 100) + 1;
    let corectAnswer = number + number2;
    text.textContent = `${number} + ${number2}`;
    return corectAnswer;
}

export function checkAnswer(input, corectAnswer) {
    if (input.value === "") {
        alert("Введіть відповідь");
        return false;
    } else if (isNaN(input.value)) {
        alert("Введіть число");
        return false;
    } else if (Number(input.value) === corectAnswer) {
        alert("Відповідь вірна");
        input.value = "";
        location.reload();
        return true;
    } else {
        alert("Невірно спробуйте ще");
        return false;
    }
}
