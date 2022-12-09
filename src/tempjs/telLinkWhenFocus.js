const CSSCLASS = "lwf";
const TAB = document.getElementsByClassName(CSSCLASS);

export function EnableTLWF() {
    [...TAB].forEach(element => {
        element.addEventListener("touchstart", chooseClick);
        [...element.children].forEach(e => {
            e.style.pointerEvents = "none";
        });
    });
}

function chooseClick(event) {
    if (event.target === document.activeElement) {
        
    }
    else{
        event.preventDefault();
        event.target.focus();
    }
}