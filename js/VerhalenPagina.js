/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//bron = https://www.w3schools.com/howto/howto_js_rangeslider.asp
var slider = document.querySelectorAll('input[type="range"]');
var output = document.querySelectorAll('input[type="range"] + em');
var showFilter = document.querySelector('input[value="Zoeken"] + form');
var filterAndSort = document.querySelector('aside > button:first-of-type');
var filterAndSortMobile = document.querySelector('nav.mobileFiltSearch > button:first-of-type');
var searchMobileButton = document.querySelector('nav.mobileFiltSearch > button:last-of-type');
var searchBar = document.querySelectorAll('aside > input');
var planeTop = document.getElementById('buttonTop');
var actualPlane = document.getElementById('actualPlane');
var pageCount = 1;
var titleStories = document.querySelector('article:nth-of-type(4) div > h3');
var titleStoriesScroll = document.querySelector('marquee');
var i;
var filterButtonOpenClose = 0;
var searchButtonOpenClose = 0;

for(i = 0; i < 2; i++){                             /* output nummer neemt van zijn slider nummer de waarde over en toont op de site */
    output[i].innerHTML = slider[i].value;          /* https://www.w3schools.com/howto/howto_js_rangeslider.asp */
}

slider[0].oninput = function(){
    output[0].innerHTML = this.value;
}

slider[1].oninput = function(){
    output[1].innerHTML = this.value;
}

// Microinteractie's code

// Bron to-the-top javascript https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

function scrollPosition() {
    console.log(document.documentElement.scrollTop);        /* ScrollTop berekent het aantal pixels waar de gebruiker in verticale lengte naar beneden is gescrolled */
    if (document.documentElement.scrollTop > 300) {
        planeTop.style.display = "block";
    } else {
        planeTop.style.display = "none";
    }  
}

window.onscroll = function () {                 /* Activeert als de pagina gescrolld wordt. */
    scrollPosition();
};

function backDown() {
    actualPlane.classList.remove('MOVEUP');
}

//http://iamdustan.com/smoothscroll/
// Het selecteert de header en gaat er dan smooth heen
function goUp() {
    actualPlane.classList.add('MOVEUP');
    document.querySelector('header').scrollIntoView({
        behavior: 'smooth'
    });
    setTimeout(backDown, 2000);
}

function titleScroll() {
    titleStories.classList.add('hide');
    titleStoriesScroll.classList.remove('hide');
    titleStoriesScroll.classList.add('show');
    titleStoriesScroll.start();
    console.log(1);
}

function titleNormal() {
    titleStoriesScroll.classList.remove('show');
    titleStoriesScroll.classList.add('hide');
    titleStories.classList.remove('hide');
}

function filterSort(){
    
    if(filterButtonOpenClose === 0){
        showFilter.classList.remove('hide');
        showFilter.classList.add('FADEINTOP1');
        filterButtonOpenClose = 1;
    }
    
    else{
        showFilter.classList.add('hide');
        filterButtonOpenClose = 0;
    }
}

function showSearchBar() {
    
    if(searchButtonOpenClose === 0){
        for(i = 0; i < 2; i++){
            searchBar[i].style.display = 'inline-block';
            searchBar[i].classList.add('FADEINTOP1');
        }
        searchButtonOpenClose++;
    }
    else{
        for(i = 0; i < 2; i++){
            searchBar[i].style.display = 'none';
            searchBar[i].classList.remove('FADEINTOP1');
        }
        searchButtonOpenClose--;
    }
}

showFilter.classList.add('hide');
titleStoriesScroll.classList.add('hide');

filterAndSort.addEventListener('click', filterSort, false);
filterAndSortMobile.addEventListener('click', filterSort, false);
searchMobileButton.addEventListener('click', showSearchBar, false);
titleStoriesScroll.addEventListener('mouseout', titleNormal, false);
titleStories.addEventListener('mouseover', titleScroll, false);
planeTop.addEventListener('click', goUp, false);
