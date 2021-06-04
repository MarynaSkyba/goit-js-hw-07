const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');


// inputName.addEventListener('input', (event) => {
//     if (event.currentTarget.value === ' ') {
//         return spanName.textContent;
//     } else {
//         spanName.textContent = event.currentTarget.value;
//     }

// })



inputName.addEventListener('input', (event) => {
  
    spanName.textContent = event.currentTarget.value || 'незнакомец';

})




