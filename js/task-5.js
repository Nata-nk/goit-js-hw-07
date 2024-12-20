function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
const buttColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');


spanColor.style.color = widget.parentNode.style.backgroundColor

buttColor.addEventListener("click", () => {
  widget.parentNode.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = widget.parentNode.style.backgroundColor;
});
