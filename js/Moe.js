/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var backgroundMoe = document.getElementById("bgStep");
var readAgain = document.getElementById('readAgainButton');
var nextMoe = document.getElementById('moeButton');
var pageCount = 1;
var background = document.querySelector('body');
var title = document.querySelector('h4');
var textMoe = document.getElementById('textMoe');

// Moe
function moePageSwitch() {

    if (pageCount === 1) {
        background.className = "bgStep2";
        title.style.filter = 'blur(0.02em)';
        textMoe.style.filter = 'blur(0.03em)';
        textMoe.style.opacity = '0.9';
        textMoe.innerHTML = "Ik weet niet hoe lang ik al voor de bibliotheek sta als een vrouw mij aanspreekt. Ze heeft zwart krullend haar. Zou ik dromen? Ze vraagt iets aan me. Ik ben te moe om te horen wat. Ze praat in het Engels met een Frans accent. ‘Je naisse quoi,’ zeg ik. De vrouw kijkt me niet begrijpend aan en vraagt of dit het postkantoor is. Ik moet heel lang en heel diep nadenken. Halverwege vergeet ik de vraag. Ik kijk naar het gebouw. De vrouw kijkt over haar schouder. Beneden rijdt een auto weg. Ik weet de vraag weer. Het zou kunnen dat dit het postkantoor is. Het zou kunnen. Het zou ook niet kunnen. Ik weet niet zeker of ik dit denk of dat ik dit zeg. En ineens weet ik weer dat dit het postkantoor niet is, maar de bibliotheek. Het postkantoor was hier wel ooit. Nu kun je het beste naar de Raadhuisstraat gaan. Als ik mijn ogen opsla is de vrouw met het ravenzwarte haar verdwenen. Ze rent achter een achteruit rijdende auto aan.";
    }

    if (pageCount === 2) {
        background.className = "bgStep3";
        title.style.filter = 'blur(0.08em)';
        textMoe.style.filter = 'blur(0.05em)';
        textMoe.style.opacity = '0.7';
        nextMoe.style.opacity = '0.7';
        textMoe.innerHTML = "Binnen sta ik voor de Q. Ik lees de titels op de ruggen van de boeken, maar ze komen niet binnen. Mijn hersens weigeren dienst. Ze zijn te moe om te werken. Mijn ogen worden zwaarder en zwaarder. En dan ineens schrik ik op alsof iemand mij een schok geeft. Stijloefeningen, dat was ik aan het zoeken. Ik loop de boeken met een Q langs. Maar niks. Ik ga achter de computer zitten en tik Stijloefeningen in. Ik dommel even  in. Mijn oogleden blijven maar zwaarder en zwaarder worden. Ze vragen beleefd doch dwingend of ik even mijn hoofd te ruste wil brengen. Eventjes maar. Het hoeft niet lang. Mijn hoofd ligt op het toetsenbord. Kwijl sijpelt uit mijn rechtermondhoek. Plots schrik ik wakker. Op het scherm lees ik dat Stijloefeningen wel degelijk aanwezig is. Op de daartoe bestemde plank. Ik besluit een medewerker te vragen mee te zoeken. Want ik durf niet voor mezelf in te staan. De medewerker kan het boek ook niet vinden. Hij raadt me aan om een mail naar het magazijn te sturen. Daar hebben ze nog een exemplaar. Ik stuur een mail. Ik wacht en val in slaap.";
    }

    if (pageCount === 3) {
        background.className = "bgStep4";
        title.style.filter = 'none';
        textMoe.style.filter = 'none';
        textMoe.style.opacity = '1.0';
        nextMoe.style.opacity = '1.0';
        textMoe.innerHTML = " Als ik wakker wordt is Spongebob bezig om met meneer Krab een lading frituurvet te lozen. Mijn zoon zit als betoverd naar de tv te kijken, de beentjes voor zich uit, zijn hoofd in zijn nek. <br> <br> Op het Bos en Lommerplein, vlakbij mijn huis, koop ik babyschoentjes. Ik wil slapen.";

        document.getElementById('moeButton').style.display = 'none';
        document.getElementById('readAgainButton').style.display = 'block';
    }

    title.style.transition = '1s';
    textMoe.style.transition = '1s';
    nextMoe.style.transition = '1s';
    console.log(pageCount);
    pageCount++;

}

function again() {                  // functie om de pagina te verversen en het verhaal opnieuwe lezen. Code oorspronkelijk van pagina https://developer.mozilla.org/en-US/docs/Web/API/Location/reload.
    window.location.reload(true);
}

nextMoe.addEventListener('click', moePageSwitch, false);
readAgain.addEventListener('click', again, false);