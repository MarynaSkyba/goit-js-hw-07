const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', (event) => {
   if(event.currentTarget.value.length == event.currentTarget.dataset.length) {
       event.currentTarget.classList.add('valid')
       event.currentTarget.classList.remove('invalid');
   } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid')
   }}
)