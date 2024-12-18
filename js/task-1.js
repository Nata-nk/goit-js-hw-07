const listTaskOne = document.querySelector('#categories');
const categListTaskOne = [...document.querySelectorAll('.item')];

console.log(`Number of categories: ${listTaskOne.childElementCount}`)


categListTaskOne.forEach(el => {
    console.log(`Category: ${el.children[0].innerHTML
}`);
    console.log(`Elements: ${el.children[1].childElementCount}`);
});
