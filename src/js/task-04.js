let counterValue = 0;

let container = document.querySelector('#counter');
let incrementBtn = container.querySelector('[data-action="increment"]');
let decrementBtn = container.querySelector('[data-action="decrement"]');
let value = container.querySelector('#value');

incrementBtn.addEventListener('click',()  => {
    counterValue ++; 
    value.innerText = counterValue;
}); 

decrementBtn.addEventListener('click', () => {
    counterValue --; 
    value.innerText = counterValue;
}); 
