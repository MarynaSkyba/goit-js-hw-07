const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {
   if(event.currentTarget.value.length <= 6) {
       event.currentTarget.classList.add('invalid')
   } else {
       if (event.currentTarget.value.length > 6){
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid')
   }}
})