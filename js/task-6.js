function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttCreate = document.querySelector('.Create');
const buttDestroy = document.querySelector('.Destroy');
const boxes = document.querySelector('#boxes');
const inputControls = document.querySelector('.input-controls');

let amount

inputControls.addEventListener("input", (event) => {
 amount = event.currentTarget.value;  
});

const destroyBoxes = () => {
  boxes.innerHTML = '';
  inputControls.value = '';
}

const renderBoxes = () => {
  const divArr = [];  
        let pixel = 20;

    for (let i = 1; i <= amount; i++) {
        pixel += 10;
      const elem = document.createElement("div");
        elem.style.backgroundColor = getRandomHexColor();
        elem.style.width = `${pixel}px`;
        elem.style.height = `${pixel}px`;
        divArr.push(elem);
    };
    return divArr;
}

const createBoxes = () => {
  if (amount < 1 || amount > 100) {
    return 
}  
    let divArr = renderBoxes();
    destroyBoxes()
    boxes.prepend(...divArr);
}

buttCreate.addEventListener('click', createBoxes);
buttDestroy.addEventListener('click', destroyBoxes);

