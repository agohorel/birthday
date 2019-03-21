const canvas = document.querySelector(".ascii");
canvas.innerText = asciiArt;

let iterator = 0;

setInterval( ()=> {
    canvas.innerText = asciis[iterator];
    iterator++;
    iterator > asciis.length - 1 ? iterator = 0 : iterator = iterator;
}, 125);