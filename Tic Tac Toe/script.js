// let turn = 'X';
// let isgameover = false;

//  //Function to change the turn
// const changeTurn = () =>{
//     return turn === "X" ? "O" : "X";
// }

//  //Function to check for a win
// const checkWin = () =>{
//     let boxtext = document.getElementsByClassName('boxtext');
//    let wins = [
//        [0, 1, 2],
//        [3, 4, 5],
//        [6, 7, 8],
//        [0, 3, 6],
//        [1, 4, 7],
//        [2, 5, 8], 
//        [0, 4, 8],
//        [2, 4, 6]
//    ]
//    wins.forEach(e =>{
//        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !==''){
//            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
//            isgameover = true;
//            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "400px";
//            let boxes = document.querySelectorAll('.box');
//            boxes.forEach(box =>{
//                box.addEventListener('mouseover', ()=>{
//                       box.style.cursor = 'not-allowed';
//                })
//            })
//        }
//    })
// }

//  //Game Logic
// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(element =>{
//     let boxText = element.querySelector('.boxtext');
//     element.addEventListener('click', ()=>{
//         if(boxText.innerText === ''){
//             boxText.innerText = turn;
//             turn = changeTurn();
//             checkWin();
//             if(!isgameover){
//                 document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
//             }
//         }
//     })
// })


//  //Add onclick listener to reset button
// reset.addEventListener('click', ()=>{
//     let boxTexts = document.querySelectorAll('.boxtext');
//     Array.from(boxTexts).forEach(element =>{
//         element.innerText = '';
//     })
//     turn = "X";
//     isgameover = false;
//     document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
//     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
//     let boxes = document.querySelectorAll('.box');
//     boxes.forEach(box =>{
//         box.addEventListener('mouseover', ()=>{
//                box.style.cursor = 'pointer';
//         })
//     })
// })

let turn = "X";
let isgameover = false;
const changeTurn = () =>{
    return turn === "X" ? "O" : "X";
}

const checkWin = () =>{
   let boxtext = document.getElementsByClassName("boxtext");
   let wins = [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8], 
           [0, 4, 8],
           [2, 4, 6]
   ] 
   wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !==''){
           document.getElementsByClassName('info').innerText = boxtext[e[0]].innerText + " won";
           isgameover = true;
           document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "400px";
       }
   })
}


let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
     let boxText = element.querySelector('.boxtext');

     element.addEventListener('click', ()=>{
         if( boxText.innerText === ""){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
         }
     })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach( element=>{
        element.innerText = ''
        isgameover = false;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
    })
})

