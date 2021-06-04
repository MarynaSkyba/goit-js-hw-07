const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('focus', (event) =>{
    inputEl.style.display = 'block';
})

inputEl.addEventListener('blur', (event) =>{
   if(event.currentTarget.value.length <= 6) {
       event.currentTarget.classList.add('invalid')
   }
})