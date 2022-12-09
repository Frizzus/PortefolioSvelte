"use strict";
let intervalId, actualNavIndex = 0, lastNavIndex, carroussel, tabs, tabDot = [];
const CARRSWAPTIME = 2000;

export function EnableCarroussel(){
    carroussel = document.getElementById("carroussel");
    tabs = [...carroussel.children];
    tabs.pop();

    addDot(tabs.length);
    ActivateCarroussel();
    carroussel.addEventListener("mouseleave", ActivateCarroussel);
    carroussel.addEventListener("mouseenter", DesactivateCarroussel);
    carroussel.addEventListener("click", NextSlide);
}

function ActivateCarroussel() {
    intervalId = setInterval(NextSlide, CARRSWAPTIME);
}

function DesactivateCarroussel() {
    clearInterval(intervalId);
}

function NextSlide() {
    lastNavIndex = actualNavIndex;
    actualNavIndex++;
    actualNavIndex = actualNavIndex%tabs.length;

    tabs[lastNavIndex].setAttribute("class", "slideout");
    tabs[actualNavIndex].setAttribute("class", "slidein");

    tabDot[lastNavIndex].style.backgroundColor = "var(--light)";
    tabDot[actualNavIndex].style.backgroundColor = "var(--primaryColor)";

}

function addDot(nbSlide) {
    for (let i = 0; i < nbSlide; i++) {
        let spanElem = document.createElement("span");
        spanElem.setAttribute("class", "navDot");
        tabDot.push(spanElem);
        document.querySelector("#carroussel nav").appendChild(tabDot[i]);
    }
}