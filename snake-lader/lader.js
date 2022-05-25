// snake laders game
function randomnumbers() {

    function randomnum() {
        random = Math.floor(Math.random() * 6) + 1;
        return random;
    }

    let ran = randomnum();
    console.log('random', ran);
    return ran;

}
let score = 0;
function addscore(random) {
    score =score + random;
    console.log('score', score);
}

function totals() {
    randomnumbers();
    addscore(random);
    snakes (score);
    ladders(score);
    if (score>100) {
        console.log('you win game end');
        button.setAttribute('disabled','disabled');
    }



}
let button = document.getElementById('btn');
button.addEventListener('click', totals);


function snakes() {
    head = [97, 95, 88, 62, 36, 32];
    tail = [78, 56, 24, 18, 6, 10];
    length = head.length;

    for (i = 0; i < length; i++) {
        if (head[i] == score) {
            console.log('snake bit');
            score = tail[i];
        }

    }
}
function ladders() {
    tail = [80, 71, 50, 28, 21, 8, 4, 1];
    head = [99, 92, 67, 76, 42, 30, 14, 38];
    length1 = tail.length;
    for (i = 0; i < length1; i++) {
        if (score == tail[i]) {
            console.log('ladder help');
            score = head[i];
        }
    }
}


//max
// let marks=[6,4,7,1,10,98];
// let maxi=marks[0];
// console.log(maxi);
// for(let i=0;i<marks.length;i++){
//     console.log('array intex length=',i);
//      total= marks[i];
//     console.log('array value =',total);
//      if(total>maxi){
//         maxi=total;

//      }

// }
// console.log('array maximum no=',maxi);

// function randomnumbers1() {

//     function randomnum1() {
//         random1 = Math.floor(Math.random() * 6) + 1;
//         return random1;
//     }

//     let ran1 = randomnum1();
//     console.log('random1', ran1);
//     return ran1;

// }
// let score1 = 0;
// function addscore1(random1) {
//     score1 =score1 + random1;
//     console.log('score1', score1);
// }

// function totals1() {
//     randomnumbers1();
//     addscore1(random1);
//     snakes1 (score1);
//     ladders1(score1);
//     if (score1>100) {
//         console.log('you win game end');
//         button1.setAttribute('disabled','disabled');
//     }



// }
// let button1 = document.getElementById('btn1');
// button1.addEventListener('click', totals1);


// function snakes1() {
//     head1 = [97, 95, 88, 62, 36, 32];
//     tail1 = [78, 56, 24, 18, 6, 10];
//     length1 = head1.length;

//     for (i = 0; i < length; i++) {
//         if (head1[i] == score1) {
//             console.log('snake bit');
//             score1 = tail1[i];
//         }

//     }
// }
// function ladders1() {
//     tail1 = [80, 71, 50, 28, 21, 8, 4, 1];
//     head1 = [99, 92, 67, 76, 42, 30, 14, 38];
//     length1 = tail1.length;
//     for (i = 0; i < length1; i++) {
//         if (score1 == tail1[i]) {
//             console.log('ladder help');
//             score1 = head1[i];
//         }
//     }
// }




