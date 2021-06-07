const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
spanName.textContent = event.currentTarget.value.trim() || 'незнакомец' })


// if (event.currentTarget.value !== '') {  
//     spanName.textContent = event.currentTarget.value.trim();
// }
//     else {
//    return 'незнакомец';
// }}






