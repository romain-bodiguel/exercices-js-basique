const buttonYes = document.querySelector('#yes');
const buttonNo = document.querySelector('#no');

buttonYes.addEventListener('click', clickCounterYes);
buttonNo.addEventListener('click', clickCounterNo);

let counterYes = 0;
let counterNo = 0;

function clickCounterYes() {
    counterYes++;
    const counterElement = document.querySelector('#counter-yes');
    counterElement.textContent = counterYes;
}

function clickCounterNo() {
    counterNo++;
    const counterElement = document.querySelector('#counter-no');
    counterElement.textContent = counterNo;
}
