'use strict';

const diamond = document.querySelector('.diamond__shape');
let timeOut;

function counter() {

    let i = 0;

    function tick() {

        const diamondCount = document.querySelector('.diamond__item-count');

        if (i++ == 3) {
            clearInterval(t);
            diamondCount.textContent = 'GO!';
        } else {
            diamondCount.textContent = i;
        }
    }

    let t = setInterval(tick, 1000);

    tick();

}

diamond.addEventListener("mouseover", function (event) {
    timeOut = setTimeout(counter, 1000);
    document.body.style.background = "blue"
})

diamond.addEventListener("mouseout", function (event) {
    document.body.style.background = "transparent";
    clearTimeout(timeOut);
})