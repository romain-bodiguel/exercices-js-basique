const buttonClic = document.querySelector('#button');

buttonClic.addEventListener('click', clickCounter);

let counter = 0;

function clickCounter() {
    counter++;
    const counterElement = document.querySelector('#counter');
    counterElement.textContent = counter;
}
