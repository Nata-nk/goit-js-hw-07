const inputText = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputText.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === "") {
        return output.textContent = 'Anonymous'
    }
        output.textContent = event.currentTarget.value.trim();
});

