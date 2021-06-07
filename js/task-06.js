const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', (event) => {
const x = Number.parseInt(event.currentTarget.dataset.length);
console.log(x);

   if(event.currentTarget.value.length === x) {
       event.currentTarget.classList.add('valid')
       event.currentTarget.classList.remove('invalid');
   } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid')
   }}
)