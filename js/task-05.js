const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
    if (event.currentTarget.value !== '') {  
        spanName.textContent = event.currentTarget.value;
    }
        else 
        spanName.textContent = 'незнакомец'
    }

)








