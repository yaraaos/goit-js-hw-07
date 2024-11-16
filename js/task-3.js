const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
    const inputElTrimmed = inputEl.value.trim();
    if (inputElTrimmed === ''){
        console.log(spanEl.textContent = 'Anonymous');
    } else {
        console.log(spanEl.textContent = `${inputElTrimmed}`);
    }
})