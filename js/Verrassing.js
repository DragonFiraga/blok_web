/*global Audio: false, change: false*/
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var confetti = document.querySelectorAll('body.bgVerrassing > img');
var confettiNumbersStart = 0;
var confettiNumbersEnd = 10;
var confettiBox = document.querySelectorAll('button.confetti-Buis');
var i;
var j = 0;
var hidePassNumber = 0;
var readAgain = document.getElementById('readAgainButtonVerrassing');
var decideAnimation = 0;
var popSound = new Audio('/soundeffect/Pop2.wav');
popSound.volume = 0.1;

function showPart(i) {
    confetti[i].classList.remove('hide');
    confetti[i].classList.add('show');
    if(decideAnimation === 0 || decideAnimation === 2){
        confetti[i].classList.add('CONFETTIPOPDOWN');
    }
    
    else{
        confetti[i].classList.add('CONFETTIPOPUP');
    }
}

function hideLastPart(i) {
    confetti[i].classList.remove('show');
    confetti[i].classList.add('hide');
}

function lastPart(){
    popSound.play();
    for(i = 30; i < 42; i++){
        showPart(i);
    }
    
    for (i = (confettiNumbersStart - 10); i < (confettiNumbersEnd - 10); i++) {
        hideLastPart(i);
    }
    
    confettiBox[3].classList.remove('show');
    confettiBox[3].classList.add('hide');
    readAgain.classList.remove('hide');
}

function firstThreeParts() {
    console.log(j);
    popSound.play();
    confettiBox[j].classList.remove('show');
    confettiBox[j+1].classList.add('show');
    for (i = confettiNumbersStart; i < confettiNumbersEnd; i++) {
        showPart(i);
    }

    if (hidePassNumber === 1) {
        for (i = (confettiNumbersStart - 10); i < (confettiNumbersEnd - 10); i++) {
            hideLastPart(i);
        }

    } 
    else {
        hidePassNumber++;
        confettiBox[0].classList.add('hide');
    }
    
    confettiNumbersStart = confettiNumbersStart + 10;
    confettiNumbersEnd = confettiNumbersEnd + 10;
    
    if(j === 3){
        confettiBox[j].classList.remove('hide');
    }
    
    else{
        j++;
        console.log(j);
    }
    
    decideAnimation++;
    
}

function again() {                      // functie om de pagina te verversen en het verhaal opnieuwe lezen. Code oorspronkelijk van pagina https://developer.mozilla.org/en-US/docs/Web/API/Location/reload.
    window.location.reload(true);
}

for (i = 0; i < 42; i++) {
    confetti[i].classList.add('hide');
}

for (i = 1; i < 4; i++) {
    confettiBox[i].classList.add('hide');
}

readAgain.classList.add('hide');

confettiBox[0].addEventListener('click', firstThreeParts, false);
confettiBox[1].addEventListener('click', firstThreeParts, false);
confettiBox[2].addEventListener('click', firstThreeParts, false);
confettiBox[3].addEventListener('click', lastPart, false);
readAgain.addEventListener('click', again, false);