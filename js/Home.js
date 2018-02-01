/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var collapsePanel = document.querySelector('h2 > button');
var suitCase = document.querySelector('ul.suitCase');
var suitCaseContent = document.querySelectorAll('li > article');
var openCloseSymbol = document.querySelector('button.suitCaseSide > img');
var openCloseDecision = 0;

suitCase.classList.add('hide');

function showContent(){
    for(var i = 0; i < 3; i++){
        suitCaseContent[i].classList.remove('hide');
        suitCaseContent[i].classList.add('FADEINTOP1');
    }
}

function openSuitCase (){
    collapsePanel.classList.remove('suitCase2');
    collapsePanel.classList.add('suitCaseOpen');
    suitCase.classList.remove('hide');
    for(var i = 0; i < 3; i++){
        suitCaseContent[i].classList.add('hide');
    }
    setTimeout(showContent, 1000);
}

function closeSuitCaseFase3() {
    suitCase.classList.add('hide');
    openCloseSymbol.classList.remove('rotate');
    collapsePanel.classList.remove('suitCase2');
}

function closeSuitCaseFase2() {
    collapsePanel.classList.add('suitCase2');
    collapsePanel.classList.remove('suitCaseOpen');
    setTimeout(closeSuitCaseFase3, 800);
}

function closeSuitCaseFase1(){
    for(var i = 0; i < 3; i++){
        suitCaseContent[i].classList.add('hide');
        suitCaseContent[i].classList.add('FADEOUT');
    }
    openCloseDecision--;
    setTimeout(closeSuitCaseFase2, 200);
    openCloseSymbol.classList.remove('rotate');
}

function decideOpenOrClose(){
    
    if(openCloseDecision === 0 ){
    collapsePanel.classList.add('suitCase2');
    openCloseSymbol.classList.add('rotate');
    openCloseDecision++;
    setTimeout(openSuitCase, 800);
    }
    
    else{
        closeSuitCaseFase1();
    }
}

collapsePanel.addEventListener('click', decideOpenOrClose, false);