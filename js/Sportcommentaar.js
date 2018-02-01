/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var buttonSportCNext = document.getElementById('buttonSportCNext');
var buttonSportCBack = document.getElementById('buttonSportCBack');
var readAgain = document.getElementById('readAgainButtonSport');
var textSportC = document.getElementById('textSportC');
var count = 0;
var timer = document.querySelector('p:last-of-type');
var blueBeam = document.querySelector('div');
var chooseAnimationNumber;

var text = [
    'Welkom bij sportcommentaar! We gaan een beetje competief aan de gang! Probeer dit verhaal zo snel mogelijk door te lezen. De timer hieronder geeft aan het einde aan wat je tijd is. Als je de high score breekt, win je een gratis verpakking Oreo bij je dichtsbijzijnde Albert Heijn! Succes!',
    'En daar stopt lijn 21 op exact de juiste tijd op precies de juiste plek op het Stationsplein. De deuren gaat open, de spanning is te snijden. ',
    'En wie komt daar als eerste uit? ',
    '<strong>JA HOOR,</strong> het is de felgroene kinderwagen waarin Molovich Jr. ligt te slapen, op de voet gevolgd door zijn vader.',
    'De overige passagiers hebben het nakijken, vader en zoon Molovich stuiven er vandoor en hebben al snel een straatlengte voorsprong. Wat een prestatie mensen. En wat een schitterend gezicht, die felgroene kinderwagen die behendig en soepeltjes door de naar de grond starende forenzen laveert, alsof de rest stilstaat! ',
    'Wat een souplesse, wat een genot om naar te kijken! ',
    'De regen en wind lijken het duo niet te deren. Maar laten we vooral niet vergeten waar het hier vandaag om draait. Er staat een hoop op het spel. Deze dag valt of staat bij het vinden van <strong>Stijloefeningen, van de Franse atleet Raymond Queneau.</strong> ',
    'Maar dat is voor straks een zorg. Laten we nu even genieten van de manier waarop Molovich de kinderwagen op de loopplank stuurt… aan weerszijden de gapende afgrond van een bouwput… Wat een adembenemend gezicht, wat een schouwspel! Dat wij hier getuige van mogen zijn!',
    '<strong>Wat is dit nu?</strong> Molovich lijkt te aarzelen.',
    '<strong>Hij staat stil!</strong>',
    'Niet te geloven. Uitgerekend nu, uitgerekend hier!<strong>Staat ie stil! Max, jongen, wat doe je nu? </strong>', 
    'Daar komt al een vrouw aangelopen. ',
    'Ze tikt hem aan. <i>Molovich kijkt verschrikt op.</i>',
    'Ze vraagt of dit het postkantoor is. Molovich aarzelt. Hij zegt dat dit niet het postkantoor is. De zwarte haren van de vrouw dansen in de wind. Ze laat een briefje zien. ',
        'Molovich kijkt. Hij bedenkt iets, wil iets zeggen… maar wat is dit nu? ',
    '<strong>De vrouw kijkt om!</strong> Achter haar rijdt een grijze Renault achteruit rijdend weg. Molovich zegt dat ze naar de Raadhuisstraat moet gaan. De vrouw draait zich om… ze zet het op een lopen. ',
    '<i>Is dit dan helemaal voor niks geweest?</i> ',
    'Heeft Molovich hier voor niets kostbare tijd verloren. Ongelooflijk mensen, wat een ontwikkelingen! ',
    'Wie had dit gedacht, wie had hier zijn geld op durven zetten?',
    'We zijn boven. Op de tweede verdieping. De spanning is om te snijden, het publiek is doodstil, houdt de adem in terwijl Molovich zoekt en zoekt en zoekt. ',
    'Bij de boeken van Queneau. Niks te vinden. Molovich probeert het bij de naast gelegen letters… De P… niks. De R… ook niks. <i>Molovich loopt naar de computers.</i> ',
    'Hij opent het digitale archief. Tikt Stijloefeningen in… op de voet gevolgd door Raymond Queneau. De zoekresultaten rollen als bezetenen over het scherm. ',
    'Maar wat is dat? <strong>Het boek is wel aanwezig!</strong>',
    'Volgens het digitale archief is Stijloefeningen wel degelijk aanwezig! Wat een wending mensen, wat een onwaarschijnlijke wending! ',
    'Molovich loopt vastberaden op een medewerker af en vertelt zijn bevindingen. ',
    'De medewerker stapt op. Neemt een lichte voorsprong. En gaat bij de Q op zoek. Alsof er niets gebeurd is, gaat de bibliothecaris op zoek op precies dezelfde plek als Molovich zojuist heeft gekeken!',
    '<i>Maar ook de bibliothecaris kan het boek niet vinden!</i> <strong>Het boek is niet te vinden!</strong> <strong>Einde verhaal lijkt me.</strong> ',
    'Molovich heeft dapper gestreden… <strong>maar wacht!</strong> ',
    'Gloort daar hoop aan de tunnel? Ja, daar gloort hoop aan de tunnel, daar is nog een heel klein stukje wrakhout waaraan Molovich zich kan vasthouden, zou het dan toch nog goedkomen? ',
    'Zou het dan toch nog, allejezus goed komen? ',
    '<strong>Het enige wat hij moet doen is een mailtje naar het magazijn sturen!</strong> Dat laat Molovich zich geen twee keer zeggen. ',
    'Als een razende zet hij zichzelf weer achter een computer en stuurt het magazijn een mailtje. Nu is het wachten geblazen. Dit zijn ontzettend <strong>zware</strong> momenten voor een sportman. ',
    'Dit is niet goed voor je gezondheid. Ik word hier ter plekke vijf jaar ouder. ',
    'Maar wat de uitkomst ook zal zijn, Molovich kan ontzettend trots zijn op zichzelf. Hij heeft hier een <strong>prestatie</strong> neergezet, dat kan niemand ’m afnemen! ',
    'En dan… het geluid van een inkomende mail. Molovich opent de mail… Wat staat er?',
    '‘Stijloefeningen van Queneau is aanwezig op de tweede verdieping…’ Maar… maar… maar dit is <strong><i>ongelooflijk!</i></strong> Daar heeft Molovich al de hele tijd gezocht! ',
    '<strong>Wat een ontknoping!</strong> <i>Wat een rampzalige ontknoping!</i> Molovich heeft alles gedaan wat hij kon, hij hoeft zichzelf niks kwalijk te nemen, maar wat is dit een ongelooflijke klap! ',
    'Wat is dit een mokerslag. Wat is dit een onwaarschijnlijk grote teleurstelling! ',
    'Hij lijkt het nog niet te beseffen, maar als hij straks thuis is en hij denkt aan deze dag, dan zal hij zich afvragen waarom hij het allemaal gedaan heeft. Dan telt het resultaat, en dat resultaat is genadeloos. ',
    'Misschien kan hij er later nog met een glimlach aan terugdenken, maar de komende weken zal dit heel erg pijn gaan doen. O, wat is dit vreselijk om te zien, wat is dit ontzettend jammer, wat is dit een treurige dag… Met hangende schouders verlaat Molovich het pand.',
    'Op het Bos en Lommerplein, in een babywinkel op nog geen honderd meter van zijn huis, vindt Molovich babyschoentjes voor zijn zoon. <i>Een schrale troost.</i>',
    'Gefeliciteerd! Je hebt het verhaal uitgelezen. Jouw tijd wordt hieronder aangegeven. En we hebben goed nieuws voor je...JE HEBT DE HIGH SCORE VERBROKEN!! GOED GEDAAN ZEG! Je kan nu jouw eigen rol Oreo ophalen bij jou dichtsbijzijnde Albert Heijn, voor 1.50...Jaaa Albert Heijn wou niet meewerken met deze actie hahahaha'
];

function beam(){
    blueBeam.classList.toggle('go');
}

function chooseAnimation(){
    
    chooseAnimationNumber = Math.floor(Math.random()*6);
    if(chooseAnimationNumber === 0){
        textSportC.classList.add('SPORTLEFT');
    }
    
    if(chooseAnimationNumber === 1){
        textSportC.classList.add('SPORTRIGHT');
    }
    
    if(chooseAnimationNumber === 2){
        textSportC.classList.add('SPORTABOVE');
    }
    
    if(chooseAnimationNumber === 3){
        textSportC.classList.add('SPORTDOWN');
    }
    
    if(chooseAnimationNumber === 4){
        textSportC.classList.add('SPORTLEFTABOVE');
    }
    
    if(chooseAnimationNumber === 5){
        textSportC.classList.add('SPORTRIGHTDOWN');
    }
    
    beam();
    
}

function showReadAgainButton(){
    readAgain.classList.remove('hide');
    readAgain.classList.add('FADEIN');
}

function show(){
    
    chooseAnimation();    
    
    textSportC.innerHTML = text[count];
    
    if (count === 0){
        buttonSportCNext.innerHTML = "Beginnen!";
        buttonSportCBack.classList.add('hide');
        textSportC.classList.add('textSportCStart');
        timer.classList.remove('hide');
    }
    
    if (count === 41){
        timer.classList.remove('hide');
        timer.innerHTML = '02:00';
        buttonSportCNext.classList.add('hide');
        setTimeout(showReadAgainButton, 2000);
    }
}

function nextText(){
    count++;
    timer.classList.add('hide');
    buttonSportCBack.classList.remove('hide');
    textSportC.classList.remove('textSportCStart');
    textSportC.classList.remove('SPORTLEFT', 'SPORTRIGHT', 'SPORTABOVE', 'SPORTDOWN', 'SPORTLEFTABOVE', 'SPORTRIGHTDOWN');    /* Op deze manier kan ik meerdere classes verwijderen*/
    buttonSportCNext.innerHTML = 'Volgende';        /* https://stackoverflow.com/questions/11115998/is-there-a-way-to-add-remove-several-classes-in-one-single-instruction-with-clas*/
    setTimeout(show, 100);
}

function backText(){
    count--;
    textSportC.classList.remove('SPORTLEFT', 'SPORTRIGHT', 'SPORTABOVE', 'SPORTDOWN', 'SPORTLEFTABOVE', 'SPORTRIGHTDOWN');
    setTimeout(show, 100);
}

function again() {                      // functie om de pagina te verversen en het verhaal opnieuwe lezen. Code oorspronkelijk van pagina https://developer.mozilla.org/en-US/docs/Web/API/Location/reload.
    window.location.reload(true);
}

textSportC.classList.add('textSportCStart');
buttonSportCBack.classList.add('hide');
readAgain.classList.add('hide');

buttonSportCNext.addEventListener('click', nextText, false);
buttonSportCBack.addEventListener('click', backText, false);
readAgain.addEventListener('click', again, false);
