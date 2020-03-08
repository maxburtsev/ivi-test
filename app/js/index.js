'use strict';

const wrapperDiamond = document.querySelector('.diamond');
const diamond = document.querySelector('.diamond__shape');


let heightDiamond = diamond.offsetHeight;
let timeOut;


function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



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

let counterFn = debounce(function() {
    counter();
}, 250);

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
    counterFn
    
});

window.addEventListener('resize', counterFn);

window.addEventListener('load',function(){
    setTimeout(counter, 500);
});