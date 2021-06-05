const inputEL = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

inputEL.addEventListener('input', function() {
    const size = inputEL.value;
    textSize.style.fontSize = size + 'px';
});
