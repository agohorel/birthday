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

let indexes = {
    idx1: 0,
    idx2: 0,
    idx3: 0
};

canvas.innerText = asciiArt;

setInterval( ()=> {
    console.log(indexes);
    swapChars(indexes, "idx1", "*");
    swapChars(indexes, "idx2", "@");
    // swapChars(indexes, "idx3", ")");
}, 250);

function swapChars(indexes, idx, target) {
    let locs = getLocs(asciiArt, target);
    canvas.innerText = replaceAt(asciiArt, locs[indexes[idx]], randomChar());
    indexes[idx]++;
    if (indexes[idx] > locs.length-1) indexes[idx] = 0;
}

function getLocs(string, target){
    let arr = [];
    for (let i = 0; i < string.length; i++){
        if (string[i] === target){
            arr.push(i);
        }
    }
    return arr;
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function randomChar(){
    let chars = ["!", "@", "#", "$", "%", "^", "*", "+", "=", "_"];
    return chars[Math.floor(Math.random() * chars.length)];
}