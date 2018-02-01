Dit read me bestand beschrijft de website transavia verhalen van Jesse Nijman. Deze file is opgedeeld in 3 delen die 2 subdelen behandelen. De 3 delen (>>) zijn 
html, css en javascript en alledrie bespreken algemeen de gehele code en een paar belangrijke punten en elementen die gebruikt zijn, waaronder gebruikte bronnen
van internet.

>> html

> algemeen
Elke pagina heeft de volgende eigenschappen:
- Elke pagina heeft dezelfde header op een paar veranderingen na zoals dat alleen de overzichtpagina's de fitler en zoekopties bevat voor het mobile scherm. 
- Elke pagina heeft een hamburgermenu in tablet versie en mobile versie. Mobile versie bevat de account links omdat op mobile scherm twee dropdown menu's 
  teveel ruimte op het scherm zou innemen. 

De code van de html van de overzichtspagina's is als volgt:
- Eerst wordt de header gevuld met nav elementen voor navigatie.
- Als tweede wordt er gebruik gemaakt van een aside element waarin de filter- en zoekopties aanwezig zijn.
- Als derde worden de verhalen getoond in een main element, omdat de verhalen de main content zijn van de pagina.

De code van de inlog-, aanmeldings- en feedbackpagina is al volgt:
- Velden waar iets ingetypt wordt zijn fieldsets en staan altijd in een form. Deze fieldsets zijn opgebouwd uit inputs, selects en op de 
  feedback pagina een textarea. 
- De velden waar alleen maar tekst staat (inlog- en feedbackpagina rechter sectie) zijn sections en zijn via css zo aangepast dat ze samen op de pagina responsive
  werken.

> Uitleg verschillende gedeeltes van de html code

- h1 tm h4

h1-h4 elementen worden gebruikt om titels en hun belangrijkheid aan te geven. Om deze reden zijn ze als volgt verdeeld in de site:
	h1 = Wordt gebruikt als titel van de pagina op de titels van de verhalen na.
	h2 = Wordt gebruikt om secties van de pagina aan te geven, zoals op de home aanbevolen en trending en sections naast fieldsets.
	     Beiden hebben een klein verschil in doel, maar zijn wel secties die informatie aanbieden aan de gebruiker, dus vandaar dat beide
	     een h2 krijgen.
	h3 = Titel van de verhalen op de overzichtspagina
	h4 = Titel van de verhalen op de verhalenpagina's (moe, sportcommentaar en verrassing).

Bron: HTML5doctor
Plaats code: alle html bestanden

- article

Article wordt gebruikt als venster voor onderdelen die informatie beschrijven over de volgende pagina. Hierom zijn alle verhalen
links in article elementen gezet, omdat voor de links meer informatie gebruikt wordt. Zoals de img voor het verhaal, titel en kijktijd. 

Bron: HTML5doctor

- main en form

Main wordt op de overzichtspagina als section middel gebruikt voor de verhalen links, net zoals form dat is voor de pagina's met fieldsets.

Bron: HTML5doctor

- dd, dt, dl

Door overleggen met Jonathan Leenman, kwamen wij erop uit dat de waarden in de dif (aantal likes, leestijd en titel verhaal) het beste 
neergezet kon worden.
Bron: HTML5doctor
Plaats code: beide overzichtspagina's

- nav

De gehele header is opgemaakt uit nav elementen. De eerste nav is de gehele header. De tweede nav is het uitgeklapte navigatiemenu in desktop scherm,
de 3de bevat het hamburger menu voor het tablet scherm en mobile scherm. De 4de nav bevat de navigatielinks voor ingelogde gebruikers zoals mijn
account, favorieten en de uitlogoptie. De 5de en laatste nav bevat 2 knoppen (filter en zoekknop) die in mobiele scherm twee secties van de zelfde pagina 
laten verschijnen. HTML5doctor beschrijft het nav element als een element dat over navigatie gaat naar andere pagina's en secties op dezelfde pagina, dus daarbij kan 
geconcludeerd worden dat het nav element voor deze twee knoppen gebruikt mag worden.

Bron: HTML5doctor
Plaats code: alle html bestanden in de header

- ul en ol

ul en ol zijn beide list elementen. ol wordt vooral gebruikt voor elementen die een structuur in de lijst hebben, terwijl ul dat niet heeft. Ol gebruik ik daarom bij de 
navigatie die links naar alle pagina's geeft. 

Bron: HTML5doctor
Plaats code: home pagina's en overzicht pagina's

- marquee

Om een te lange titel van een verhaal op de overzichtspagina te laten lopen maak ik gebruik van marquee. Dit is alleen niet semantisch correct om in een div element te stoppen.
Deze fout is bij de beoordeling wel in de code gelaten om aan Nicky Heijman het idee van lopende tekst te laten zien. 

Bron: https://developer.mozilla.org/nl/docs/Web/HTML/Element/marquee
Plaatsing code: 4de article op overzichtspagina's


>> Style

> algemeen
De opbouw van de css begint eerst met de @keyframes. Hier maak ik verschillende animaties aan om in javascript voor microinteracties en 
tijdens verhalen te gebruiken. Hierna heb ik verschillende elementen samengebracht wiens display: none; of display: block; zijn. Dit heb ik gedaan
omdat teveel elementen van deze displays gebruik maakten, en het beter was om al deze samen te brengen in één {}. Daarna begint de code voor de elementen.
De structuur hiervan is alfabetisch zodat de elementen makkelijk te vinden zijn. Als een element states bevat, komt die daarna gelijk eronder. Deze code is
gericht op de waarden voor de website in zijn mobiele versie (mobile first). Daarna komt code voor de verhalen. Ik heb deze code apart gezet om alle code 
makkelijk vindbaar te maken en snel aan te passen. Hierna komt de code voor de 3 mictrointeractie, dit is weer gedaan om deze code makkelijker vindbaar te maken
en sneller aan te passen. Na de microinteracties komen de media queries. Deze staan helemaal onderaan omdat hier aanpasbare code staat voor als de width van het
scherm groter worden dan de aangegeven breakpoints. Hierbij komen aanpassingen aan bepaalde code (img.storypicture en div als voorbeeld) waardoor de elementen beter
op het scherm passen. 

> Uitleg verschillende onderdelen van de css code 

- @keyframes

Via w3Schools heb ik geleerd hoe ik animaties in mijn website kon gebruiken. Door middel van eerst de keyframes maken, 
kon ik op meerdere plekken in mijn stylesheet gebruik maken van dezelfde animaties. 

Bron: https://www.w3schools.com/css/css3_animations.asp
Plaats code: style.css

- transform

Via transform kon ik objecten draaien (rotate) en verplaatsen tijdens animaties (translate).

Bron: https://www.w3schools.com/cssref/css3_pr_transform.asp
Plaats code: style.css

- :nth-of-type(n+5):nth-of-type(-n+7)

Om nu de account links te verbergen in het hamburger menu selecteer ik hier de 5de tot 7de li met twee nth-of type naast elkaar.              
De code rent tegen elkaar in wat de optelling bij elkaar stopt en zo een gebied pakt. 

Bron: https://gist.github.com/rondevera/167627*/
Plaats code: css regel 1166

- text-overflow en white-space

Via text-overflow: ellipsis en white-space: nowrap zorg ik ervoor dat een te lange titel in zijn veld eindigt met ... en de titel op 1 lijn blijft. 

Bron: https://www.w3schools.com/cssref/css3_pr_text-overflow.asp
Bron: https://www.w3schools.com/cssref/pr_text_white-space.asp

>> Javascript

> algemeen
Er zijn 6 javascript bestanden gemaakt voor de site. Dit komt omdat waneer er een javascript runt de code die daarin staat op de html pagina aanwezig moet
zijn. Omdat de code die gebruikt wordt voor de verhalen nooit op de andere pagina's staan moesten er meerdere javascript bestanden gemaakt worden.

Elk javascript bestand, verhaal en microinteractie, heeft dezelfde structuur:
- Ik begin met de variabelen te maken waarvan ik op de pagina gebruik zal maken. 
- Hierna maak ik de functies aan. Hoe later een functie in de interactie gebruikt worden, hoe hoger hij komt.
- Hierna voeg ik eventueel aan sommige elementen classes aan doormiddel van classlist.
- Als laatst maak ik de addeventlistener(s) aan.

> Uitleg verschillende onderdelen javascript

- function scrollPosition() en behaviour: smooth

Doormiddel van windows.onscroll leest het document altijd de verticale hoogte. Als dit hoger dan een bepaalde waarde in pixels is,
in mijn geval 300px, wordt er een if statement gebruikt om via element.style.display de css te veranderen van een element. In dit geval 
de back to top knop op mijn website. Dit is aanwezig op pagina's die in verticaal lang zijn, zoals de overzichtpagina's en verhaal verrassing.

Daarna wou ik weten hoe de gebruiker echt de pagina omhoog kon zien scrollen, in verband met de timing van mijn microinteractie, en kwam ik op de 
2de bron uit. Behavior is smooth werkt op de manier waarop naar boven wordt gescrollt.

Bron: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
Bron: https://css-tricks.com/snippets/jquery/smooth-scrolling/
Plaats code: verhalenSite.js

- setTimeout(function, milliseconds)

Om een microinteractie of verhaal goed te laten lopen moest ik soms een timeout tussen functies gebruiken. Daarbij kwam de methode setTimeout helpen.
Hierbij voer ik tussen haakjes van deze methode de functienaam die ik wil starten en het aantal milliseconden dat het duurt voordat de functie wordt geactiveerd.

Bron: https://www.w3schools.com/jsref/met_win_settimeout.asp

- Range sliders en slider.oninput

Via de code die ik heb geleerd op w3school heb ik een slider kunnen maken op het filtermenu voor leestijd en aantal likes
Via javascript code die in de bron staat wordt er via mijn slider variabele de waarde van de input='range' gelezen en overgekopieerd in variabele output
em. Dit wordt dan getoond. De begin en eind waarde van de slider geef ik aan in de html bij het element zelf.  

Bron: https://www.w3schools.com/howto/howto_js_rangeslider.asp
Plaatsing code: Overzichtspagina's en verhalenpagina.js

- function again() 

Functie om de pagina te verversen en het verhaal opnieuwe lezen. De code die gebruikt wordt is windows.location.reload(true); Via deze code wordt van het
scherm waar de gebruiker is de locatie (url) gepakt en dit via de methode reload de pagina ververst. 

Bron: https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
Plaats: Moe, sportcommentaar en verrassing

- querySelector en getElementById
Via deze twee DOM selectors selecteer ik elementen op de pagina om te gebruiken. Queryselector en QueryselectorAll maak ik een pad naar het element(en). Als 
het meerder zijn maak ik gebruik van de All versie en maak ik daarna een for statement om deze te vullen als dit nodig is. Bij verhaal verrassing heb ik dit apart
gedaan voor addeventlistener omdat de waarde die werd meegegeven uit de for altijd het laatste element bleek te zijn. 
getElementById wordt gebruikt om direct gebruik te maken van een element zonder daar een pad naar te maken. Na gesprek met Jonathan bij de 1ste beoordeling is er 
geen gebruik gemaakt van dit element voor de overige 2 microinteracties. 

- style.display 

Door deze code kon ik css aanpassingen maken op de pagina wanneer dit bij het element in de css al aangevinkt was. Gebruik maken van classList zou mij dwingen
om een element een block of inline element te maken terwijl dit niet nodig is. Classlist is wel de betere manier om het te gebruiken, dus is deze code voornamelijk
zo weinig mogelijk gebruikt bij de verhalen die na het feedbackgesprek van 16 januari aangepast en op sommige plekken waar het kon aangepast naar classlist.


Bron: https://css-tricks.com/snippets/jquery/smooth-scrolling/
Plaats code: Enigszins home.js en grotendeels moe.js