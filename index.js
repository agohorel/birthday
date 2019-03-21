let asciiArt = `
          *                                             *
                                               *
                    *
                                  *
                                                            *
         *
                                                  *
             *
                           *             *
                                                     *
      *                                                               *
               *
                               (             )
                       )      (*)           (*)      (
              *       (*)      |             |      (*)
                       |      |~|           |~|      |          *
                      |~|     | |           | |     |~|
                      | |     | |           | |     | |
                     ,| |a@@@@| |@@@@@@@@@@@| |@@@@a| |.
                .,a@@@| |@@@@@| |@@@@@@@@@@@| |@@@@@| |@@@@a,.
              ,a@@@@@@| |@@@@@@@@@@@@.@@@@@@@@@@@@@@| |@@@@@@@a,
             a@@@@@@@@@@@@@@@@@@@@@' . \`@@@@@@@@@@@@@@@@@@@@@@@@a
             ;\`@@@@@@@@@@@@@@@@@@'   .   \`@@@@@@@@@@@@@@@@@@@@@';
             ;@@@\`@@@@@@@@@@@@@'     .     \`@@@@@@@@@@@@@@@@'@@@;
             ;@@@;,.aaaaaaaaaa       .       aaaaa,,aaaaaaa,;@@@;
             ;;@;;;;@@@@@@@@;@      @.@      ;@@@;;;@@@@@@;;;;@@;
             ;;;;;;;@@@@;@@;;@    @@ . @@    ;;@;;;;@@;@@@;;;;;;;
             ;;;;;;;;@@;;;;;;;  @@   .   @@  ;;;;;;;;;;;@@;;;;@;;
             ;;;;;;;;;;;;;;;;;@@     .     @@;;;;;;;;;;;;;;;;@@@;
         ,%%%;;;;;;;;@;;;;;;;;       .       ;;;;;;;;;;;;;;;;@@;;%%%,
      .%%%%%%;;;;;;;@@;;;;;;;;     ,%%%,     ;;;;;;;;;;;;;;;;;;;;%%%%%%,
     .%%%%%%%;;;;;;;@@;;;;;;;;   ,%%%%%%%,   ;;;;;;;;;;;;;;;;;;;;%%%%%%%,
     %%%%%%%%\`;;;;;;;;;;;;;;;;  %%%%%%%%%%%  ;;;;;;;;;;;;;;;;;;;'%%%%%%%%
     %%%%%%%%%%%%\`;;;;;;;;;;;;,%%%%%%%%%%%%%,;;;;;;;;;;;;;;;'%%%%%%%%%%%%
     \`%%%%%%%%%%%%%%%%%,,,,,,,%%%%%%%%%%%%%%%,,,,,,,%%%%%%%%%%%%%%%%%%%%'
       \`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
           \`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
                  """"""""""""""\`,,,,,,,,,'"""""""""""""""""
                                 \`%%%%%%%'
                                  \`%%%%%'
                                    %%%     
                                   %%%%%
                                .,%%%%%%%,.
                           ,%%%%%%%%%%%%%%%%%%%,
`;

const canvas = document.querySelector(".ascii");
let index = 0;
canvas.innerText = asciiArt;

setInterval( ()=> {

    swapChars("*");

    // // skip whitespace
    // if (/\S/.test(asciiArt[index])) {
    //     canvas.innerText = replaceAt(asciiArt, index, randomChar());
    // } 
}, 50);

function getLocs(string, target){
    let arr = [];
    for (let i = 0; i < string.length; i++){
        if (string[i] === target){
            arr.push(i);
        }
    }
    return arr;
}

function swapChars(target){
    let locs = getLocs(asciiArt, target);
    canvas.innerText = replaceAt(asciiArt, locs[index], randomChar());
    index++;
    if (index > locs.length - 1) index = 0;
}

function randomChar(){
    let chars = ["!", "@", "#", "$", "%", "^", "*", "+", "=", "_"];
    return chars[Math.floor(Math.random() * chars.length)];
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);    
}