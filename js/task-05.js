const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
// spanName.textContent = event.currentTarget.value.trim() || 'незнакомец' })


if (event.currentTarget.value.trim()) {  
    spanName.textContent = event.currentTarget.value;
}
    else {
        spanName.textContent = 'незнакомец';
    }});


