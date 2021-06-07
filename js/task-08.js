const controlsEL =  document.getElementById('controls');
const boxEl = document.getElementById('boxes');
const inputEl = document.querySelector('input');



const btnCreate = document.querySelector('[data-action="render"]');
console.log(btnCreate)


 const createBoxes = (amount) => {
    const newBox = document.createElement('div');
     const newBoxes = newBox * inputEl.value;
     boxEl.append(newBoxes);

 }
//btnCreate.style.backgroundColor = `rgb(${[1,2,3].map(x=>Math.random()*256|0)})`; ЦВЕТ рандом
// "#" + (Math.random() * 0xFFFFFF << 0).toString(16)





//кнопка Очистить

const btnDelete = document.querySelector('[data-action="destroy"]'); //все сбрасывает
function destroyBoxes () {
    boxEl.innerHTML = '';
}
btnDelete.addEventListener('click', destroyBoxes)