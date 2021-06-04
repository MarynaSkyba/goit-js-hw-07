const inputEL = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

inputEL.addEventListener('input', function() {
    const size = inputEL.value;

    console.log(size);
    textSize.style.fontSize = size + 'px';
});
