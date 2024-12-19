function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
const buttColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

buttColor.addEventListener("click", () => {
  const colorRandom = getRandomHexColor();
  widget.parentNode.style.backgroundColor = colorRandom;
   spanColor.style.color = colorRandom;
});
