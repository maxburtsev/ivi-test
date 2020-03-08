'use strict';

const wrapperDiamond = document.querySelector('.diamond');
const diamond = document.querySelector('.diamond__shape');


let heightDiamond = diamond.offsetHeight;
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
        
        console.log(diamondCount.textContent)
    }

    let t = setInterval(tick, 500);

    tick();
    
}



diamond.addEventListener("mouseover", function (event) {
    timeOut = setTimeout(counter, 1000);
    document.body.style.background = "blue"
});

diamond.addEventListener("mouseout", function (event) {
    document.body.style.background = "transparent";
    clearTimeout(timeOut);
});

wrapperDiamond.style.height = heightDiamond + 'px';

window.addEventListener('resize',function(){
    function resizeHeight() { 
        
        let heightDiamond = diamond.offsetHeight;
        wrapperDiamond.style.height = heightDiamond + 'px';
        
    }
    
    resizeHeight();
    setTimeout(counter, 500);

});


window.addEventListener('load',function(){
    setTimeout(counter, 500);
});