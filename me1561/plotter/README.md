## Övning - plotter

(Plotta ut klasskamrater i en google map)

Denna övning går ut på att komma in i de mest grundläggande teknikerna i Webbutveckling - html, css och javascript.

Du ska på en karta, som går att öppna i en webbläsare, lägga till samtliga klasskamraters hemstäder.

Ta en titt i källkodsfilerna här i repot - däri finns källkod som använder sig dels av Google Maps API och Leafletjs (Mapbox) för att manipulera kartor, bl a genom att placera några s.k markers till en karta. Ladda hem filerna och öppna den i en webbläsare och se vad som händer.
Försök att lägga till dig själv genom att modifiera/lägga till kod i någon av källfilerna.

Samarbeta gärna med en eller flera i klassen, men gör en egen version av en karta med samtliga klasskamrater utmarkerade.

Den här övningen kommer att utökas efter hand - ta en titt här (på github) då och då för att se om någon ny information har lagts ut.

### Del 1 - plotta ut samtliga klasskamraters hemstäder
Modifiera/lägg till i källkoden i någon av källkodsfilerna i detta repot så att en marker är placerad på klasskamratens hemadress (latitud och longitud).
När man klickar på en marker ska en inforuta visas med personens namn och en liten bild på personen.
Alternativt kan du skapa helt egen/ny källkod (html, css och javascript).


##### Tips:
öppna filnamn.html i din webbläsare. Testa att ändra i koden och se vad som händer...
Försök förstå koden i filen..
Vad betyder och har t ex koden i filerna för funktion och hur fungerar det?
Försök förstå, testa att förändra. Om det kraschar kan du bara ladda hem filerna igen härifrån.


Samarbeta! Hjälp varandra!
För att lösa den här övningen behöver alla samrabeta, och förhoppningsvis lära känna varandra lite bättre....

Informationskällor om html/css/javascript är
- http://www.w3schools.com/
- https://www.codecademy.com/
- http://leafletjs.com/
- http://www.w3schools.com/googleapi/google_maps_basic.asp
- http://www.w3schools.com/googleapi/
- https://developers.google.com/maps/


Använd en editor för att skriva/modifiera s.k källkod. Två tips (om du inte redan har en favorit) är;
- http://www.sublimetext.com/3
- https://atom.io/


### Del 2 - ställen i Karlshamn
Lägg till markörer för olika ställen i Karlshamn. T ex restauranger, vart kåren ligger, affärer etc.
I inforutan som visas när ma klickar på dem, ska förutom namnet och kort info om stället även visas en länk till
ställets egna hemsida. När man klickar på den länken ska hemsidan öppnas i en ny sida.

### Del 3 - bättre sida
Sidorna som finns här är inte speciellt snygga.... Förbättra den/dem med färger och text.
Använd css för att strukturera och skapa en egen design för att visa kartan.
Lägg all css-kod du skriver i en egen fil och hämta in den i .html-filen.

### Del 4 - separera javscriptet
Placera all javascript som har med kartan att göra i en egen fil. Döp den till <code>map.js</code> (eller liknande) och länka in den i .html.


### Del 5 - en egen sida
Gör en egen sida om dig själv. Presentera dig för dina klasskamrater på sidan.
När man klickar på markören som visar infon om dig så ska inforutan visa länken som tar
dig till den sida du nyss har gjort.
Nu kommer det svåra - se till att få tag i alla dina klasskamraters egna sidor. När man klickar på en klasskamrats markör ska en länk
till dennas sida finnas med och visa just den kamrates egna sida....


### Del 6 - Google maps API
Undersök Google Maps API:t eller Leafletjs API:t. API:er är något du kommer att jobba med mycket framöver och det är bra att redan nu börja titta på ett. Mer information om nämnda API finns bland länkarna ovan.
Använd API:t och ändra/lägg till/ gör något. Exempelvis förändra markörerna till andra symboler/ikoner.
Eller varför inte mäta sträckor eller visa vägar mellan dig och andra klasskamrater?

### Del 7 - location
Plotta ut din egna position i kartan, dvs där du är just nu...

Tips:
av säkerhetsskäl tillåter förmodligen inte din webbläsare att din position läses från localhost, dvs lokalt från din dator.
Din kod behöver exekveras på en webbserver eller av en mjukvara som simulerar en webbserver...
Lösningen på detta är många; webbhotell, ngrok, localtunnel, SimpleHTTPServer, Mamp, Wamp, VPS etc etc. Hitta en.

### Del 8 - jQuery
jquery?
Vad är det? Undersök och försök göra något med det, exempelvis effekter.
Lägg till dett till denna övning.


### Del 9 - validering
Det är viktigt att man skriver korrekt formaterad html och css (javascript också för den delen), detta bl a för att ens sidor ska visas och fungera korrekt i olika webbläsare.
För att kontrollera sina sidor och den html man har skrivit så kan man validera sina dokument.
Använd W3C's html-validator och korrigera eventuella fel tills allt är frid och fröjd.
Här är en länk: https://validator.w3.org/
Detsamma gäller vår css. Här är en länk för det: https://jigsaw.w3.org/css-validator/



